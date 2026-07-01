import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { RichContent } from "@/components/ui/rich-content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getSiteContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: content.legal.title,
    robots: { index: true, follow: true },
  };
}

export default async function MentionsLegalesPage() {
  const content = await getSiteContent();

  return (
    <div className="kt-page">
      <TopBar site={content.site} social={content.footer.social} />
      <Header site={content.site} navLinks={content.navLinks} />

      <main className="kt-legal">
        <div className="kt-container kt-legal__inner">
          <ScrollReveal>
            <h1>{content.legal.title}</h1>
            <RichContent html={content.legal.body} className="kt-legal__content" />
          </ScrollReveal>
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
