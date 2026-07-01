import type { ServiceItem } from "./content-types";

export function serviceDetailPath(service: Pick<ServiceItem, "slug">): string {
  return `/services/${service.slug}`;
}

export function normalizeService(raw: Partial<ServiceItem> & { id: string }): ServiceItem {
  const description = raw.description ?? "";
  return {
    id: raw.id,
    slug: raw.slug ?? raw.id,
    icon: raw.icon ?? "stethoscope",
    tone: raw.tone ?? "green",
    title: raw.title ?? "Service",
    description,
    image: raw.image ?? "",
    body: raw.body ?? description,
    href: raw.href,
  };
}

export function normalizeServices(items: unknown[]): ServiceItem[] {
  return items.map((item) => normalizeService(item as Partial<ServiceItem> & { id: string }));
}
