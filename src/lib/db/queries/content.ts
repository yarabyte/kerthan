import { eq, and, asc, desc, isNull, sql } from "drizzle-orm";
import type {
  ContentItemType,
  ContentScope,
  ServiceItem,
  SiteContent,
  SiteSettingsKey,
} from "@/lib/content-types";
import { DEFAULT_SITE_CONTENT } from "@/lib/default-content";
import { normalizeServices } from "@/lib/services";
import { getDb } from "../client";
import { contentItems, siteSettings, contactSubmissions } from "../schema";

const SETTINGS_KEYS: SiteSettingsKey[] = [
  "site",
  "hero",
  "services_section",
  "history_section",
  "internal_medicine_section",
  "contact_section",
  "emergency_section",
  "footer",
  "seo",
  "legal",
  "maintenance",
  "blog_section",
];

const LIST_TYPES: ContentItemType[] = [
  "nav_link",
  "hero_slide",
  "stat",
  "service",
  "history_point",
  "internal_med_item",
  "appointment_service",
  "blog_post",
  "team_member",
];

function settingsToContent(
  settings: Partial<Record<SiteSettingsKey, unknown>>,
  items: Partial<Record<ContentItemType, unknown[]>>,
): SiteContent {
  const d = DEFAULT_SITE_CONTENT;
  return {
    site: (settings.site as SiteContent["site"]) ?? d.site,
    navLinks: (items.nav_link as SiteContent["navLinks"]) ?? d.navLinks,
    hero: (settings.hero as SiteContent["hero"]) ?? d.hero,
    heroSlides: (items.hero_slide as SiteContent["heroSlides"]) ?? d.heroSlides,
    stats: (items.stat as SiteContent["stats"]) ?? d.stats,
    servicesSection: (settings.services_section as SiteContent["servicesSection"]) ?? d.servicesSection,
    services: normalizeServices(
      Array.isArray(items.service) && items.service.length > 0
        ? (items.service as ServiceItem[])
        : d.services,
    ),
    historySection: (settings.history_section as SiteContent["historySection"]) ?? d.historySection,
    historyPoints: (items.history_point as SiteContent["historyPoints"]) ?? d.historyPoints,
    internalMedicineSection:
      (settings.internal_medicine_section as SiteContent["internalMedicineSection"]) ??
      d.internalMedicineSection,
    internalMedItems: (items.internal_med_item as SiteContent["internalMedItems"]) ?? d.internalMedItems,
    contactSection: (settings.contact_section as SiteContent["contactSection"]) ?? d.contactSection,
    appointmentServices:
      (items.appointment_service as SiteContent["appointmentServices"]) ?? d.appointmentServices,
    emergencySection: (settings.emergency_section as SiteContent["emergencySection"]) ?? d.emergencySection,
    footer: (settings.footer as SiteContent["footer"]) ?? d.footer,
    seo: (settings.seo as SiteContent["seo"]) ?? d.seo,
    legal: (settings.legal as SiteContent["legal"]) ?? d.legal,
    maintenance: (settings.maintenance as SiteContent["maintenance"]) ?? d.maintenance,
    blogPosts: (items.blog_post as SiteContent["blogPosts"]) ?? d.blogPosts,
    blogSection: (settings.blog_section as SiteContent["blogSection"]) ?? d.blogSection,
    teamMembers: (items.team_member as SiteContent["teamMembers"]) ?? d.teamMembers,
  };
}

function enrichStats(content: SiteContent): SiteContent {
  const serviceCount = content.services.length;
  return {
    ...content,
    stats: content.stats.map((stat) =>
      stat.autoServices ? { ...stat, value: String(serviceCount) } : stat,
    ),
  };
}

async function loadScope(scope: ContentScope): Promise<SiteContent> {
  const db = getDb();

  const settingsRows = await db
    .select()
    .from(siteSettings)
    .where(eq(siteSettings.scope, scope));

  const itemRows = await db
    .select()
    .from(contentItems)
    .where(eq(contentItems.status, scope))
    .orderBy(asc(contentItems.sortOrder));

  if (settingsRows.length === 0 && itemRows.length === 0) {
    return enrichStats(DEFAULT_SITE_CONTENT);
  }

  const settings: Partial<Record<SiteSettingsKey, unknown>> = {};
  for (const row of settingsRows) {
    settings[row.key as SiteSettingsKey] = row.value;
  }

  const items: Partial<Record<ContentItemType, unknown[]>> = {};
  for (const row of itemRows) {
    const type = row.itemType as ContentItemType;
    if (!items[type]) items[type] = [];
    items[type]!.push(row.data);
  }

  return enrichStats(settingsToContent(settings, items));
}

export async function getPublishedContent(): Promise<SiteContent> {
  return loadScope("published");
}

export async function getDraftContent(): Promise<SiteContent> {
  const draft = await loadScope("draft");
  if (
    (await getDb().select().from(siteSettings).where(eq(siteSettings.scope, "draft")).limit(1))
      .length === 0
  ) {
    const published = await loadScope("published");
    const hasPublished =
      (await getDb()
        .select()
        .from(siteSettings)
        .where(eq(siteSettings.scope, "published"))
        .limit(1)).length > 0;
    return hasPublished ? published : draft;
  }
  return draft;
}

export async function getMaintenanceMode(): Promise<boolean> {
  const envFallback = process.env.MAINTENANCE_MODE === "true";
  try {
    const db = getDb();
    const row = await db
      .select()
      .from(siteSettings)
      .where(and(eq(siteSettings.key, "maintenance"), eq(siteSettings.scope, "published")))
      .limit(1);
    if (row.length === 0) return envFallback;
    const value = row[0].value as { enabled?: boolean };
    return value.enabled ?? envFallback;
  } catch {
    return envFallback;
  }
}

export async function setMaintenanceMode(enabled: boolean): Promise<void> {
  const db = getDb();
  const value = { enabled };
  for (const scope of ["draft", "published"] as const) {
    await db
      .insert(siteSettings)
      .values({ key: "maintenance", scope, value })
      .onConflictDoUpdate({
        target: [siteSettings.key, siteSettings.scope],
        set: { value, updatedAt: new Date() },
      });
  }
}

export async function saveDraftSettings(
  key: SiteSettingsKey,
  value: unknown,
): Promise<void> {
  const db = getDb();
  await db
    .insert(siteSettings)
    .values({ key, scope: "draft", value })
    .onConflictDoUpdate({
      target: [siteSettings.key, siteSettings.scope],
      set: { value, updatedAt: new Date() },
    });
}

export async function saveDraftItems(
  itemType: ContentItemType,
  items: unknown[],
): Promise<void> {
  const db = getDb();
  await db.delete(contentItems).where(
    and(eq(contentItems.itemType, itemType), eq(contentItems.status, "draft")),
  );
  if (items.length === 0) return;
  await db.insert(contentItems).values(
    items.map((data, index) => ({
      id: `${itemType}-draft-${(data as { id: string }).id}`,
      itemType,
      sortOrder: index,
      status: "draft" as const,
      data,
    })),
  );
}

export async function publishAll(): Promise<void> {
  const db = getDb();
  const draft = await getDraftContent();

  await db.delete(siteSettings).where(eq(siteSettings.scope, "published"));
  await db.delete(contentItems).where(eq(contentItems.status, "published"));

  for (const key of SETTINGS_KEYS) {
    const value = getSettingValue(draft, key);
    await db.insert(siteSettings).values({
      key,
      scope: "published",
      value,
    });
  }

  for (const itemType of LIST_TYPES) {
    const items = getItemsForType(draft, itemType);
    if (items.length === 0) continue;
    await db.insert(contentItems).values(
      items.map((data, index) => ({
        id: `${itemType}-pub-${(data as { id: string }).id}`,
        itemType,
        sortOrder: index,
        status: "published" as const,
        data,
      })),
    );
  }
}

function getSettingValue(content: SiteContent, key: SiteSettingsKey): unknown {
  const map: Record<SiteSettingsKey, unknown> = {
    site: content.site,
    hero: content.hero,
    services_section: content.servicesSection,
    history_section: content.historySection,
    internal_medicine_section: content.internalMedicineSection,
    contact_section: content.contactSection,
    emergency_section: content.emergencySection,
    footer: content.footer,
    seo: content.seo,
    legal: content.legal,
    maintenance: content.maintenance,
    blog_section: content.blogSection,
  };
  return map[key];
}

function getItemsForType(content: SiteContent, type: ContentItemType): unknown[] {
  const map: Record<ContentItemType, unknown[]> = {
    nav_link: content.navLinks,
    hero_slide: content.heroSlides,
    stat: content.stats,
    service: content.services,
    history_point: content.historyPoints,
    internal_med_item: content.internalMedItems,
    appointment_service: content.appointmentServices,
    blog_post: content.blogPosts,
    team_member: content.teamMembers,
  };
  return map[type];
}

export async function hasUnpublishedChanges(): Promise<boolean> {
  const draft = await getDraftContent();
  const published = await getPublishedContent();
  return JSON.stringify(draft) !== JSON.stringify(published);
}

export async function seedDatabase(): Promise<void> {
  const db = getDb();
  const content = DEFAULT_SITE_CONTENT;

  await db.delete(siteSettings);
  await db.delete(contentItems);

  for (const scope of ["draft", "published"] as const) {
    for (const key of SETTINGS_KEYS) {
      await db.insert(siteSettings).values({
        key,
        scope,
        value: getSettingValue(content, key),
      });
    }

    for (const itemType of LIST_TYPES) {
      const items = getItemsForType(content, itemType);
      if (items.length === 0) continue;
      await db.insert(contentItems).values(
        items.map((data, index) => ({
          id: `${itemType}-${scope}-${(data as { id: string }).id}`,
          itemType,
          sortOrder: index,
          status: scope,
          data,
        })),
      );
    }
  }
}

export async function insertContactSubmission(data: {
  name: string;
  phone: string;
  service?: string;
  message?: string;
}): Promise<string> {
  const db = getDb();
  const id = crypto.randomUUID();
  await db.insert(contactSubmissions).values({
    id,
    name: data.name,
    phone: data.phone,
    service: data.service ?? null,
    message: data.message ?? null,
  });
  return id;
}

export async function listContactSubmissions() {
  const db = getDb();
  return db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt));
}

export async function markSubmissionRead(id: string): Promise<void> {
  const db = getDb();
  await db
    .update(contactSubmissions)
    .set({ readAt: new Date() })
    .where(eq(contactSubmissions.id, id));
}

export async function countUnreadSubmissions(): Promise<number> {
  const db = getDb();
  const rows = await db
    .select({ count: sql<number>`count(*)` })
    .from(contactSubmissions)
    .where(isNull(contactSubmissions.readAt));
  return rows[0]?.count ?? 0;
}
