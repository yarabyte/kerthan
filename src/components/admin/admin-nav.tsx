"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FileText,
  Images,
  LayoutDashboard,
  LogOut,
  Mail,
  Newspaper,
  Settings,
  SlidersHorizontal,
  Users,
  ExternalLink,
} from "lucide-react";

const NAV_MAIN = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard, exact: true },
  { href: "/admin/contenu", label: "Contenu du site", icon: FileText },
  { href: "/admin/slider", label: "Slider hero", icon: SlidersHorizontal },
  { href: "/admin/demandes", label: "Demandes", icon: Mail, badgeKey: "unread" as const },
];

const NAV_SECONDARY = [
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/equipe", label: "Équipe", icon: Users },
  { href: "/admin/parametres", label: "Paramètres", icon: Settings },
];

interface AdminNavProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export function AdminNav({ mobileOpen, onClose }: AdminNavProps) {
  const pathname = usePathname();
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    fetch("/api/admin/status")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.unread != null) setUnread(data.unread);
      })
      .catch(() => {});
  }, [pathname]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function renderLink(item: (typeof NAV_MAIN)[number]) {
    const Icon = item.icon;
    const active = isActive(item.href, item.exact);
    const badge = item.badgeKey === "unread" && unread > 0 ? unread : null;

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`kt-admin__nav-link${active ? " is-active" : ""}`}
        onClick={onClose}
      >
        <Icon size={18} strokeWidth={2} aria-hidden />
        <span>{item.label}</span>
        {badge != null && <span className="kt-admin__badge">{badge}</span>}
      </Link>
    );
  }

  return (
    <>
      <div
        className={`kt-admin__overlay${mobileOpen ? " is-open" : ""}`}
        onClick={onClose}
        aria-hidden
      />
      <aside className={`kt-admin__sidebar${mobileOpen ? " is-open" : ""}`}>
        <div className="kt-admin__sidebar-top">
          <Link href="/admin" className="kt-admin__brand" onClick={onClose}>
            <Image
              src="/assets/logo-seal.png"
              alt=""
              width={44}
              height={33}
              className="kt-admin__brand-mark"
            />
            <span>
              Clinique Kerthan
              <small>Backoffice</small>
            </span>
          </Link>
        </div>

        <nav className="kt-admin__nav" aria-label="Administration">
          <p className="kt-admin__nav-label">Gestion</p>
          {NAV_MAIN.map(renderLink)}

          <p className="kt-admin__nav-label">Avancé</p>
          {NAV_SECONDARY.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`kt-admin__nav-link${active ? " is-active" : ""}`}
                onClick={onClose}
              >
                <Icon size={18} strokeWidth={2} aria-hidden />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="kt-admin__sidebar-foot">
          <Link href="/" className="kt-admin__nav-link kt-admin__nav-link--muted" target="_blank">
            <ExternalLink size={18} strokeWidth={2} aria-hidden />
            <span>Voir le site</span>
          </Link>
          <button type="button" className="kt-admin__nav-link kt-admin__nav-link--logout" onClick={handleLogout}>
            <LogOut size={18} strokeWidth={2} aria-hidden />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  );
}
