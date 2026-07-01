import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { Button } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";
import { RichContent } from "@/components/ui/rich-content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { blogPostPath, formatBlogDate, visibleBlogPosts } from "@/lib/blog";
import { getAllBlogSlugs, getPublishedBlogPostBySlug, getSiteContent } from "@/lib/content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs
    .filter((slug): slug is string => typeof slug === "string" && slug.length > 0)
    .map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const [post, content] = await Promise.all([
    getPublishedBlogPostBySlug(slug),
    getSiteContent(),
  ]);

  if (!post) notFound();

  const related = visibleBlogPosts(content.blogPosts).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="kt-page">
      <TopBar site={content.site} social={content.footer.social} />
      <Header site={content.site} navLinks={content.navLinks} />

      <main className="kt-blog-detail">
        {post.image && (
          <div className="kt-blog-detail__hero">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="kt-blog-detail__hero-img"
            />
            <div className="kt-blog-detail__hero-overlay" aria-hidden />
          </div>
        )}
        <div className="kt-container kt-blog-detail__inner">
          <ScrollReveal>
            <Link href="/#blog" className="kt-blog-detail__back">
              <Icon name="arrow-right" size={16} style={{ transform: "rotate(180deg)" }} />
              Retour au blog
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <header className="kt-blog-detail__head">
              <p className="kt-blog-detail__eyebrow">Blog</p>
              {post.publishedAt && (
                <time className="kt-blog-detail__date" dateTime={post.publishedAt}>
                  {formatBlogDate(post.publishedAt)}
                </time>
              )}
              <h1 className="kt-blog-detail__title">{post.title}</h1>
              {post.excerpt && <p className="kt-blog-detail__lead">{post.excerpt}</p>}
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <RichContent html={post.body} className="kt-blog-detail__body" />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="kt-blog-detail__cta">
              <Button variant="primary" size="lg" href="/#contact">
                Prendre rendez-vous
              </Button>
              <Button variant="secondary" size="lg" href={content.site.phoneHref}>
                Appeler la clinique
              </Button>
            </div>
          </ScrollReveal>

          {related.length > 0 && (
            <ScrollReveal delay={140}>
              <section className="kt-blog-detail__related" aria-labelledby="blog-related-heading">
                <h2 id="blog-related-heading" className="kt-blog-detail__related-title">
                  Autres articles
                </h2>
                <ul className="kt-blog-detail__related-list">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link href={blogPostPath(item)} className="kt-blog-detail__related-link">
                        <Icon name="book-open" size={18} />
                        <span>{item.title}</span>
                        <Icon name="arrow-right" size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
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
