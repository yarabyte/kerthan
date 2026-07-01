import Image from "next/image";
import { SectionHeading } from "@/components/ui/brand";
import { Button } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { InternalMedItem, InternalMedicineSectionContent } from "@/lib/content-types";

interface InternalMedicineSectionProps {
  section: InternalMedicineSectionContent;
  items: InternalMedItem[];
  detailHref?: string;
}

const HIGHLIGHTS = [
  { icon: "heart-pulse", label: "Prise en charge de l'adulte" },
  { icon: "hospital", label: "Plateau technique sur place" },
  { icon: "shield-check", label: "Suivi rigoureux et humain" },
] as const;

export function InternalMedicineSection({
  section,
  items,
  detailHref = "/services/medecine-interne",
}: InternalMedicineSectionProps) {
  return (
    <section id="interne" className="kt-imed">
      <div className="kt-imed__glow" aria-hidden />
      <Image
        src="/assets/motif-heartbeat.svg"
        alt=""
        width={1200}
        height={120}
        className="kt-imed__motif"
        aria-hidden
      />

      <div className="kt-container kt-imed__grid">
        <ScrollReveal className="kt-imed__intro">
          <SectionHeading
            light
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <blockquote className="kt-imed__quote">{section.quote}</blockquote>

          <ul className="kt-imed__pills" aria-label="Points forts">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label} className="kt-imed__pill">
                <Icon name={item.icon} size={16} />
                {item.label}
              </li>
            ))}
          </ul>

          <div className="kt-imed__actions">
            <Button variant="gold" size="lg" href={detailHref}>
              Découvrir la spécialité
            </Button>
            <Button variant="secondary" size="lg" href="/#contact" className="kt-imed__btn-outline">
              Prendre rendez-vous
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="kt-imed__cards" delay={80}>
          {items.map((item, index) => (
            <article key={item.id} className="kt-imed__card">
              <span className="kt-imed__card-num" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="kt-imed__card-icon">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="kt-imed__card-title">{item.title}</h3>
              <p className="kt-imed__card-desc">{item.description}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
