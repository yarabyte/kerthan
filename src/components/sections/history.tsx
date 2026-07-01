import Image from "next/image";
import { SectionHeading } from "@/components/ui/brand";
import { Icon } from "@/components/ui/icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { HistoryPointItem, HistorySectionContent } from "@/lib/content-types";

interface HistorySectionProps {
  section: HistorySectionContent;
  points: HistoryPointItem[];
}

export function HistorySection({ section, points }: HistorySectionProps) {
  return (
    <section id="histoire" className="kt-section kt-section--soft">
      <div className="kt-container kt-about__grid">
        <ScrollReveal className="kt-about__media">
          <div className="kt-about__photo">
            {section.photoImage ? (
              <Image
                src={section.photoImage}
                alt={section.photoCaption}
                width={520}
                height={360}
                className="kt-about__photo-img"
              />
            ) : (
              <Icon name="hospital" size={46} />
            )}
            <span>{section.photoCaption}</span>
          </div>
          <div className="kt-about__badge">
            <span className="kt-about__since">{section.sinceLabel}</span>
            <strong>{section.sinceValue}</strong>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <ul className="kt-checklist">
            {points.map((point) => (
              <li key={point.id}>
                <span>
                  <Icon name="check" size={15} />
                </span>
                {point.text}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
