/** @deprecated Use getSiteContent() from @/lib/content for dynamic data. */
import { DEFAULT_SITE_CONTENT } from "./default-content";

export const SITE = DEFAULT_SITE_CONTENT.site;
export { DEFAULT_SITE_CONTENT };

export const NAV_LINKS = DEFAULT_SITE_CONTENT.navLinks;
export const SERVICES = DEFAULT_SITE_CONTENT.services;
export const HISTORY_POINTS = DEFAULT_SITE_CONTENT.historyPoints.map((p) => p.text);
export const INTERNAL_MED_ITEMS = DEFAULT_SITE_CONTENT.internalMedItems;
export const APPOINTMENT_SERVICES = DEFAULT_SITE_CONTENT.appointmentServices.map((s) => s.label);
export const HERO_SLIDES = DEFAULT_SITE_CONTENT.heroSlides;
