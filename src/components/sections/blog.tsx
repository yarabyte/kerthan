import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeading } from "@/components/ui/brand";
import { Button } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getLatestBlogPosts, HOME_BLOG_POST_LIMIT, visibleBlogPosts } from "@/lib/blog";
import type { BlogPostItem, SectionIntro } from "@/lib/content-types";

interface BlogSectionProps {
  intro: SectionIntro;
  posts: BlogPostItem[];
  preview?: boolean;
}

export function BlogSection({ intro, posts, preview = false }: BlogSectionProps) {
  const allVisible = visibleBlogPosts(posts, preview);
  const articles = getLatestBlogPosts(posts, HOME_BLOG_POST_LIMIT, preview);

  if (articles.length === 0) return null;

  return (
    <section id="blog" className="kt-section kt-section--soft">
      <div className="kt-container">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
        </ScrollReveal>
        <ScrollReveal stagger className="kt-blog__grid" delay={60}>
          {articles.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ScrollReveal>
        {allVisible.length > HOME_BLOG_POST_LIMIT && (
          <ScrollReveal delay={100}>
            <div className="kt-blog__more">
              <Button
                variant="secondary"
                size="lg"
                href="/blog"
                rightIcon={<Icon name="arrow-right" size={18} />}
              >
                Voir tous les articles
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
