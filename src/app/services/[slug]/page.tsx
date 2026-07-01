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
import { getAllServiceSlugs, getPublishedServiceBySlug, getSiteContent } from "@/lib/content";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs
    .filter((slug): slug is string => typeof slug === "string" && slug.length > 0)
    .map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getPublishedServiceBySlug(slug);
  if (!service) return { title: "Service introuvable" };

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: service.image ? [{ url: service.image }] : undefined,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const [service, content] = await Promise.all([
    getPublishedServiceBySlug(slug),
    getSiteContent(),
  ]);

  if (!service) notFound();

  const related = content.services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="kt-page">
      <TopBar site={content.site} social={content.footer.social} />
      <Header site={content.site} navLinks={content.navLinks} />

      <main className="kt-svc-detail">
        <div className="kt-svc-detail__hero">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="kt-svc-detail__hero-img"
            />
          ) : (
            <div className={`kt-svc-detail__hero-fallback kt-svc-detail__hero-fallback--${service.tone}`}>
              <Icon name={service.icon} size={56} />
            </div>
          )}
          <div className="kt-svc-detail__hero-overlay" aria-hidden />
        </div>

        <div className="kt-container kt-svc-detail__inner">
          <ScrollReveal>
            <Link href="/#services" className="kt-svc-detail__back">
              <Icon name="arrow-right" size={16} style={{ transform: "rotate(180deg)" }} />
              Retour aux services
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <header className="kt-svc-detail__head">
              <span className={`kt-svc-detail__icon kt-svc-detail__icon--${service.tone}`}>
                <Icon name={service.icon} size={28} />
              </span>
              <div>
                <p className="kt-svc-detail__eyebrow">Nos services</p>
                <h1 className="kt-svc-detail__title">{service.title}</h1>
                <p className="kt-svc-detail__lead">{service.description}</p>
              </div>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <RichContent html={service.body} className="kt-svc-detail__body" />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="kt-svc-detail__cta">
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
              <section className="kt-svc-detail__related" aria-labelledby="related-heading">
                <h2 id="related-heading" className="kt-svc-detail__related-title">
                  Autres services
                </h2>
                <ul className="kt-svc-detail__related-list">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link href={`/services/${item.slug}`} className="kt-svc-detail__related-link">
                        <Icon name={item.icon} size={18} />
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
