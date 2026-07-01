export type ContentScope = "draft" | "published";

export type Tone = "green" | "gold" | "red";

export interface SiteInfo {
  name: string;
  tagline: string;
  motto: string[];
  phone: string;
  phoneSecondary: string;
  phoneHref: string;
  phoneSecondaryHref: string;
  address: string;
  addressShort: string;
  website: string;
  websiteHref: string;
  hours: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  icon: string;
  tone: Tone;
  title: string;
  description: string;
  image?: string;
  body: string;
  /** @deprecated Utiliser slug → /services/[slug] */
  href?: string;
}

export interface HeroSlideItem {
  id: string;
  type: "logo" | "feature";
  icon?: string;
  tone?: Tone;
  title?: string;
  description?: string;
  logoImage?: string;
  logoAlt?: string;
  signature?: string;
}

export interface StatItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  tone?: Tone;
  autoServices?: boolean;
}

export interface HistoryPointItem {
  id: string;
  text: string;
}

export interface InternalMedItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AppointmentServiceItem {
  id: string;
  label: string;
}

export interface SectionIntro {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface HeroContent {
  title: string;
  titleHighlight: string;
  lead: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
}

export interface HistorySectionContent extends SectionIntro {
  photoImage: string;
  photoCaption: string;
  sinceLabel: string;
  sinceValue: string;
}

export interface InternalMedicineSectionContent extends SectionIntro {
  quote: string;
}

export interface ContactSectionContent extends SectionIntro {
  successTitle: string;
  successMessage: string;
  hoursBadge: string;
}

export interface EmergencySectionContent {
  label: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FooterSocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
  icon: string;
}

export interface FooterContent {
  taglineScript: string;
  mission: string;
  sinceBar: string;
  signoff: string;
  social: FooterSocialLink[];
}

export interface SeoContent {
  title: string;
  description: string;
  ogImage: string;
}

export interface LegalContent {
  title: string;
  body: string;
}

export interface MaintenanceSettings {
  enabled: boolean;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image?: string;
  published: boolean;
  /** Date de publication (YYYY-MM-DD) — sert au tri des articles. */
  publishedAt?: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  sortOrder: number;
}

export interface SiteContent {
  site: SiteInfo;
  navLinks: NavLinkItem[];
  hero: HeroContent;
  heroSlides: HeroSlideItem[];
  stats: StatItem[];
  servicesSection: SectionIntro;
  services: ServiceItem[];
  historySection: HistorySectionContent;
  historyPoints: HistoryPointItem[];
  internalMedicineSection: InternalMedicineSectionContent;
  internalMedItems: InternalMedItem[];
  contactSection: ContactSectionContent;
  appointmentServices: AppointmentServiceItem[];
  emergencySection: EmergencySectionContent;
  footer: FooterContent;
  seo: SeoContent;
  legal: LegalContent;
  maintenance: MaintenanceSettings;
  blogPosts: BlogPostItem[];
  blogSection: SectionIntro;
  teamMembers: TeamMemberItem[];
}

export type SiteSettingsKey =
  | "site"
  | "hero"
  | "services_section"
  | "history_section"
  | "internal_medicine_section"
  | "contact_section"
  | "emergency_section"
  | "footer"
  | "seo"
  | "legal"
  | "maintenance"
  | "blog_section";

export type ContentItemType =
  | "nav_link"
  | "hero_slide"
  | "stat"
  | "service"
  | "history_point"
  | "internal_med_item"
  | "appointment_service"
  | "blog_post"
  | "team_member";
