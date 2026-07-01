import { unstable_cache } from "next/cache";
import type { ServiceItem, SiteContent, BlogPostItem } from "./content-types";
import {
  getPublishedContent,
  getDraftContent,
  hasUnpublishedChanges,
} from "./db/queries/content";

export const SITE_CONTENT_TAG = "site-content";

export async function getSiteContent(preview = false): Promise<SiteContent> {
  if (preview) {
    return getDraftContent();
  }

  return unstable_cache(
    async () => getPublishedContent(),
    ["site-content-published"],
    { tags: [SITE_CONTENT_TAG], revalidate: 60 },
  )();
}

export async function getDraftSiteContent(): Promise<SiteContent> {
  return getDraftContent();
}

export async function checkUnpublishedChanges(): Promise<boolean> {
  return hasUnpublishedChanges();
}

export async function getPublishedServiceBySlug(slug: string): Promise<ServiceItem | null> {
  const content = await getSiteContent();
  return content.services.find((s) => s.slug === slug) ?? null;
}

export async function getAllServiceSlugs(): Promise<string[]> {
  const content = await getSiteContent();
  return content.services.map((s) => s.slug);
}

export async function getPublishedBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
  const content = await getSiteContent();
  return content.blogPosts.find((p) => p.published && p.slug === slug) ?? null;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const content = await getSiteContent();
  return content.blogPosts.filter((p) => p.published && p.slug).map((p) => p.slug);
}
