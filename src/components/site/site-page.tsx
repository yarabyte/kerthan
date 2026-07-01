import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { BlogSection } from "@/components/sections/blog";
import { ContactSection } from "@/components/sections/contact";
import { EmergencyCtaSection } from "@/components/sections/emergency-cta";
import { HeroSection } from "@/components/sections/hero";
import { HistorySection } from "@/components/sections/history";
import { InternalMedicineSection } from "@/components/sections/internal-medicine";
import { ServicesSection } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";
import type { SiteContent } from "@/lib/content-types";
import { serviceDetailPath } from "@/lib/services";

interface SitePageProps {
  content: SiteContent;
  preview?: boolean;
}

export function SitePage({ content, preview = false }: SitePageProps) {
  const internalMedicineService = content.services.find((s) => s.slug === "medecine-interne");

  return (
    <div className="kt-page">
      <ClinicJsonLd site={content.site} />
      <TopBar site={content.site} social={content.footer.social} />
      <Header site={content.site} navLinks={content.navLinks} />
      <main>
        <HeroSection site={content.site} hero={content.hero} slides={content.heroSlides} />
        <StatsSection stats={content.stats} />
        <ServicesSection intro={content.servicesSection} services={content.services} />
        <HistorySection section={content.historySection} points={content.historyPoints} />
        <InternalMedicineSection
          section={content.internalMedicineSection}
          items={content.internalMedItems}
          detailHref={
            internalMedicineService
              ? serviceDetailPath(internalMedicineService)
              : "/services/medecine-interne"
          }
        />
        <BlogSection intro={content.blogSection} posts={content.blogPosts} preview={preview} />
        <ContactSection
          site={content.site}
          section={content.contactSection}
          appointmentServices={content.appointmentServices}
        />
      </main>
      <EmergencyCtaSection site={content.site} section={content.emergencySection} />
      <Footer
        site={content.site}
        navLinks={content.navLinks}
        services={content.services}
        footer={content.footer}
      />
    </div>
  );
}
