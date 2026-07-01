"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import type { HeroSlideItem } from "@/lib/content-types";

const INTERVAL_MS = 5500;

interface HeroSliderProps {
  slides: HeroSlideItem[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      setActive((index + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total <= 1) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [total]);

  if (total === 0) return null;

  return (
    <div className="kt-hero-slider" aria-roledescription="carousel" aria-label="Points forts">
      <div className="kt-hero-slider__viewport">
        <div
          className="kt-hero-slider__track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="kt-hero-slider__slide"
              role="group"
              aria-roledescription="slide"
              aria-hidden={slide.id !== slides[active]?.id}
            >
              {slide.type === "logo" ? (
                <div className="kt-hero__card kt-hero__card--logo">
                  <Image
                    src={slide.logoImage ?? "/assets/logo-20-years.png"}
                    alt={slide.logoAlt ?? "Clinique Kerthan"}
                    width={340}
                    height={255}
                    sizes="(max-width: 880px) 90vw, 340px"
                    className="kt-hero__logo"
                    priority
                  />
                  {slide.signature && <p className="kt-hero__sig">{slide.signature}</p>}
                  <Image
                    src="/assets/motif-heartbeat.svg"
                    alt=""
                    width={400}
                    height={40}
                    className="kt-hero__pulse"
                    aria-hidden
                  />
                </div>
              ) : (
                <div className={`kt-hero__card kt-hero__card--feature kt-hero__card--${slide.tone}`}>
                  <span className="kt-hero__feature-icon">
                    <Icon name={slide.icon ?? "shield-check"} size={36} />
                  </span>
                  <strong className="kt-hero__feature-title">{slide.title}</strong>
                  <p className="kt-hero__feature-desc">{slide.description}</p>
                  <Image
                    src="/assets/motif-heartbeat.svg"
                    alt=""
                    width={400}
                    height={40}
                    className="kt-hero__pulse"
                    aria-hidden
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <div className="kt-hero-slider__controls">
          <button
            type="button"
            className="kt-hero-slider__arrow"
            onClick={() => goTo(active - 1)}
            aria-label="Slide précédent"
          >
            <Icon name="arrow-right" size={18} style={{ transform: "rotate(180deg)" }} />
          </button>

          <div className="kt-hero-slider__dots" role="tablist" aria-label="Choisir un slide">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                className={`kt-hero-slider__dot${index === active ? " is-active" : ""}`}
                aria-label={`Slide ${index + 1} sur ${total}`}
                aria-selected={index === active}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="kt-hero-slider__arrow"
            onClick={() => goTo(active + 1)}
            aria-label="Slide suivant"
          >
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
