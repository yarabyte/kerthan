import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { FooterContent, NavLinkItem, ServiceItem, SiteInfo } from "@/lib/content-types";
import { serviceDetailPath } from "@/lib/services";

function FooterHeading({ children }: { children: ReactNode }) {
  return <h4 className="kt-footer__heading">{children}</h4>;
}

interface FooterProps {
  site: SiteInfo;
  navLinks: NavLinkItem[];
  services: ServiceItem[];
  footer: FooterContent;
}

export function Footer({ site, navLinks, services, footer }: FooterProps) {
  const year = new Date().getFullYear();
  const websiteSocial = footer.social.find((s) => s.platform === "website");

  return (
    <footer className="kt-footer">
      <div className="kt-footer__main">
        <ScrollReveal>
          <div className="kt-container kt-footer__grid">
            <div className="kt-footer__brand">
              <div className="kt-footer__logo-wrap">
                <Image
                  src="/assets/logo-seal.png"
                  alt={site.name}
                  width={120}
                  height={90}
                  sizes="120px"
                  className="kt-footer__mark"
                />
              </div>
              <p className="kt-footer__name">{site.name}</p>
              <p className="kt-footer__tagline kt-script">{footer.taglineScript}</p>
              <p className="kt-footer__mission">{footer.mission}</p>
              <div className="kt-footer__motto">
                {site.motto.map((word, i) => (
                  <span key={word}>
                    {i > 0 && <i aria-hidden>—</i>}
                    {word}
                  </span>
                ))}
              </div>
              <div className="kt-footer__hours">
                <Icon name="clock" size={15} color="var(--gold-300)" />
                <span>{site.hours}</span>
              </div>
              <div className="kt-footer__social">
                {footer.social.map((link) => (
                  <Link
                    key={link.platform}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="kt-footer__social-link"
                  >
                    <Icon name={link.icon} size={17} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="kt-footer__col">
              <FooterHeading>Navigation</FooterHeading>
              <nav className="kt-footer__links" aria-label="Liens du pied de page">
                {navLinks.map((link) => (
                  <Link key={link.id} href={`/#${link.id}`} className="kt-footer__link">
                    <Icon name="arrow-right" size={14} />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="kt-footer__col">
              <FooterHeading>Nos services</FooterHeading>
              <div className="kt-footer__links">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={serviceDetailPath(service)}
                    className="kt-footer__link"
                  >
                    <Icon name="arrow-right" size={14} />
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="kt-footer__col">
              <FooterHeading>Contact</FooterHeading>
              <ul className="kt-footer__contacts">
                <li>
                  <a href={site.phoneHref} className="kt-footer__contact">
                    <span className="kt-footer__contact-icon">
                      <Icon name="phone" size={18} />
                    </span>
                    <span>
                      <span className="kt-footer__contact-label">Standard</span>
                      <span className="kt-footer__contact-value">{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={site.phoneSecondaryHref} className="kt-footer__contact">
                    <span className="kt-footer__contact-icon">
                      <Icon name="phone-call" size={18} />
                    </span>
                    <span>
                      <span className="kt-footer__contact-label">Second numéro</span>
                      <span className="kt-footer__contact-value">{site.phoneSecondary}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="kt-footer__contact">
                    <span className="kt-footer__contact-icon">
                      <Icon name="map-pin" size={18} />
                    </span>
                    <span>
                      <span className="kt-footer__contact-label">Adresse</span>
                      <span className="kt-footer__contact-value">{site.address}</span>
                    </span>
                  </div>
                </li>
                <li>
                  <a
                    href={websiteSocial?.href ?? site.websiteHref}
                    className="kt-footer__contact"
                  >
                    <span className="kt-footer__contact-icon">
                      <Icon name="globe" size={18} />
                    </span>
                    <span>
                      <span className="kt-footer__contact-label">Site web</span>
                      <span className="kt-footer__contact-value">{site.website}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <Image
          src="/assets/motif-heartbeat.svg"
          alt=""
          width={1200}
          height={40}
          className="kt-footer__motif"
          aria-hidden
        />
      </div>

      <div className="kt-footer__bar">
        <div className="kt-container kt-footer__bar-inner">
          <span className="kt-footer__copy">
            © {year} {site.name} — Tous droits réservés.
          </span>
          <Link href="/mentions-legales" className="kt-footer__legal">
            Mentions légales
          </Link>
          <span className="kt-footer__since">{footer.sinceBar}</span>
          <span className="kt-footer__signoff">{footer.signoff}</span>
        </div>
      </div>
    </footer>
  );
}
