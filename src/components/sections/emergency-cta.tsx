import { Button } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { EmergencySectionContent, SiteInfo } from "@/lib/content-types";

interface EmergencyCtaSectionProps {
  site: SiteInfo;
  section: EmergencySectionContent;
}

export function EmergencyCtaSection({ site, section }: EmergencyCtaSectionProps) {
  return (
    <section className="kt-emergency" aria-labelledby="emergency-heading">
      <div className="kt-container">
        <ScrollReveal>
          <div className="kt-emergency__card">
            <div className="kt-emergency__left">
              <span className="kt-emergency__icon" aria-hidden>
                <Icon name="phone-call" size={22} color="#fff" />
              </span>
              <div className="kt-emergency__text">
                <span id="emergency-heading" className="kt-emergency__label">
                  <span className="kt-emergency__pulse" aria-hidden />
                  {section.label}
                </span>
                <a href={site.phoneHref} className="kt-emergency__phone">
                  {site.phone}
                </a>
              </div>
            </div>
            <Button variant="gold" size="md" href={section.ctaHref} className="kt-emergency__btn">
              {section.ctaLabel}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
