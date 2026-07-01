import Image from "next/image";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/icon";
import { SITE } from "@/lib/site";
import "@/styles/coming-soon.css";

export const metadata: Metadata = {
  title: "Bientôt en ligne",
  description: "Le nouveau site de la Clinique Kerthan arrive très prochainement.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return (
    <div className="kt-coming-soon">
      <div className="kt-coming-soon__glow" aria-hidden />
      <div className="kt-coming-soon__card">
        <Image
          src="/assets/logo-seal.png"
          alt={SITE.name}
          width={200}
          height={150}
          sizes="200px"
          className="kt-coming-soon__logo"
          priority
        />
        <p className="kt-coming-soon__eyebrow">Nouveau site web</p>
        <h1 className="kt-coming-soon__title">Bientôt en ligne</h1>
        <p className="kt-coming-soon__lead">
          Nous préparons une expérience digitale à la hauteur de nos soins — chaleureuse,
          claire et toujours tournée vers vous.
        </p>
        <p className="kt-coming-soon__script">We Care</p>
        <div className="kt-coming-soon__motto">
          {SITE.motto.map((word, i) => (
            <span key={word}>
              {i > 0 && <i>—</i>}
              {word}
            </span>
          ))}
        </div>
        <div className="kt-coming-soon__contacts">
          <a href={SITE.phoneHref} className="kt-coming-soon__contact">
            <Icon name="phone-call" size={20} />
            <span>
              <strong>Urgences 24/7</strong>
              {SITE.phone}
            </span>
          </a>
          <a href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`} className="kt-coming-soon__contact">
            <Icon name="map-pin" size={20} />
            <span>
              <strong>Bonaberi, Douala</strong>
              {SITE.addressShort}
            </span>
          </a>
        </div>
      </div>
      <Image
        src="/assets/motif-heartbeat.svg"
        alt=""
        width={800}
        height={40}
        className="kt-coming-soon__motif"
        aria-hidden
      />
    </div>
  );
}
