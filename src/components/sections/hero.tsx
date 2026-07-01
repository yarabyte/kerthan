import { Button } from "@/components/ui/core";
import { HeroSlider } from "@/components/sections/hero-slider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { HeroContent, HeroSlideItem, SiteInfo } from "@/lib/content-types";

interface HeroSectionProps {
  site: SiteInfo;
  hero: HeroContent;
  slides: HeroSlideItem[];
}

export function HeroSection({ site, hero, slides }: HeroSectionProps) {
  return (
    <section id="accueil" className="kt-hero">
      <div className="kt-container kt-hero__grid">
        <ScrollReveal threshold={0}>
          <h1 className="kt-hero__title">
            {hero.title}
            <span>{hero.titleHighlight}</span>.
          </h1>
          <p className="kt-hero__lead">{hero.lead}</p>
          <div className="kt-motto">
            {site.motto.map((word, i) => (
              <span key={word}>
                {i > 0 && <i>—</i>}
                {word}
              </span>
            ))}
          </div>
          <div className="kt-hero__actions">
            <Button variant="primary" size="lg" href={hero.ctaPrimaryHref}>
              {hero.ctaPrimary}
            </Button>
            <Button variant="secondary" size="lg" href={hero.ctaSecondaryHref}>
              {hero.ctaSecondary}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal className="kt-hero__visual" delay={120} threshold={0}>
          <HeroSlider slides={slides} />
        </ScrollReveal>
      </div>
    </section>
  );
}
