import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { blogPostPath, formatBlogDate } from "@/lib/blog";
import type { BlogPostItem } from "@/lib/content-types";

interface BlogCardProps {
  post: BlogPostItem;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="kt-blog-card">
      <Link href={blogPostPath(post)} className="kt-blog-card__media" tabIndex={-1} aria-hidden>
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            width={640}
            height={360}
            className="kt-blog-card__img"
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        ) : (
          <div className="kt-blog-card__fallback">
            <Icon name="book-open" size={28} />
          </div>
        )}
      </Link>
      <div className="kt-blog-card__body">
        {post.publishedAt && (
          <time className="kt-blog-card__date" dateTime={post.publishedAt}>
            {formatBlogDate(post.publishedAt)}
          </time>
        )}
        <h3 className="kt-blog-card__title">
          <Link href={blogPostPath(post)}>{post.title}</Link>
        </h3>
        {post.excerpt && <p className="kt-blog-card__excerpt">{post.excerpt}</p>}
        <Link href={blogPostPath(post)} className="kt-blog-card__link">
          Lire l&apos;article
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </article>
  );
}
