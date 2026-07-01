"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { FooterContent, SiteInfo } from "@/lib/content-types";

interface TopBarProps {
  site: SiteInfo;
  social: FooterContent["social"];
}

export function TopBar({ site, social }: TopBarProps) {
  return (
    <div className="kt-topbar">
      <div className="kt-container kt-topbar__inner">
        <div className="kt-topbar__contacts">
          <span>
            <Icon name="phone" size={14} color="var(--gold-300)" />
            Urgences 24/7 : <strong>{site.phone}</strong>
          </span>
          <span className="kt-hide-sm">
            <Icon name="map-pin" size={14} color="var(--gold-300)" />
            {site.addressShort}
          </span>
        </div>
        <div className="kt-topbar__social">
          <span className="kt-hide-sm">Nous suivre</span>
          {social.slice(0, 2).map((link) => (
            <Link key={link.platform} href={link.href} aria-label={link.ariaLabel}>
              <Icon name={link.icon} size={15} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
