import { SectionHeading, ServiceCard } from "@/components/ui/brand";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SectionIntro, ServiceItem } from "@/lib/content-types";
import { serviceDetailPath } from "@/lib/services";

interface ServicesSectionProps {
  intro: SectionIntro;
  services: ServiceItem[];
}

export function ServicesSection({ intro, services }: ServicesSectionProps) {
  return (
    <section id="services" className="kt-section">
      <div className="kt-container">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
        </ScrollReveal>
        <ScrollReveal stagger className="kt-services__grid" delay={60}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              tone={service.tone}
              title={service.title}
              description={service.description}
              href={serviceDetailPath(service)}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
