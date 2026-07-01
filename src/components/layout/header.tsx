"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";
import { useActiveSection } from "@/hooks/use-active-section";
import type { NavLinkItem, SiteInfo } from "@/lib/content-types";

interface HeaderProps {
  site: SiteInfo;
  navLinks: NavLinkItem[];
}

export function Header({ site, navLinks }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="kt-header" data-open={open || undefined}>
      <div className="kt-container kt-header__inner">
        <Link href="/#accueil" className="kt-brand" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo-seal.png"
            alt={site.name}
            width={70}
            height={52}
            sizes="70px"
            className="kt-brand__mark"
            priority
          />
          <span className="kt-brand__text">
            <span className="kt-brand__name">{site.name}</span>
            <span className="kt-brand__tag">{site.tagline}</span>
          </span>
        </Link>

        <nav className="kt-nav" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className={`kt-nav__link${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="kt-header__cta">
          <Button variant="primary" size="sm" href="/#contact" className="kt-hide-xs">
            Rendez-vous
          </Button>
          <button
            type="button"
            className="kt-burger kt-iconbtn kt-iconbtn--outline kt-iconbtn--md"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
