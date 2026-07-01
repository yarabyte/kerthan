import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeading } from "@/components/ui/brand";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { visibleBlogPosts } from "@/lib/blog";
import { getSiteContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: content.blogSection.title,
    description: content.blogSection.description,
  };
}

export default async function BlogIndexPage() {
  const content = await getSiteContent();
  const articles = visibleBlogPosts(content.blogPosts);

  return (
    <div className="kt-page">
      <TopBar site={content.site} social={content.footer.social} />
      <Header site={content.site} navLinks={content.navLinks} />

      <main className="kt-blog-index">
        <div className="kt-container">
          <ScrollReveal>
            <SectionHeading
              align="center"
              eyebrow={content.blogSection.eyebrow}
              title={content.blogSection.title}
              description={content.blogSection.description}
            />
          </ScrollReveal>

          {articles.length === 0 ? (
            <p className="kt-blog-index__empty">Aucun article publié pour le moment.</p>
          ) : (
            <ScrollReveal stagger className="kt-blog__grid kt-blog-index__grid" delay={60}>
              {articles.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </ScrollReveal>
          )}
        </div>
      </main>

      <Footer
        site={content.site}
        navLinks={content.navLinks}
        services={content.services}
        footer={content.footer}
      />
    </div>
  );
}
