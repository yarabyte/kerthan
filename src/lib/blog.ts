import type { BlogPostItem } from "./content-types";

export const HOME_BLOG_POST_LIMIT = 3;

export function blogPostPath(post: Pick<BlogPostItem, "slug">): string {
  return `/blog/${post.slug}`;
}

function postTimestamp(post: BlogPostItem): number {
  if (post.publishedAt) {
    const time = Date.parse(post.publishedAt);
    if (!Number.isNaN(time)) return time;
  }
  const match = post.id.match(/^blog-(\d+)$/);
  if (match) return Number(match[1]);
  return 0;
}

export function sortBlogPosts(posts: BlogPostItem[]): BlogPostItem[] {
  return [...posts].sort((a, b) => postTimestamp(b) - postTimestamp(a));
}

export function visibleBlogPosts(posts: BlogPostItem[], preview = false): BlogPostItem[] {
  const filtered = posts.filter(
    (post) => post.slug.trim().length > 0 && post.title.trim().length > 0 && (preview || post.published),
  );
  return sortBlogPosts(filtered);
}

export function getLatestBlogPosts(
  posts: BlogPostItem[],
  limit = HOME_BLOG_POST_LIMIT,
  preview = false,
): BlogPostItem[] {
  return visibleBlogPosts(posts, preview).slice(0, limit);
}

export function formatBlogDate(value: string): string {
  const time = Date.parse(value);
  if (Number.isNaN(time)) return value;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(time));
}
