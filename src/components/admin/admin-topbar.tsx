"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Eye, Menu, Upload } from "lucide-react";
import { publishContent } from "@/lib/admin/client";

interface AdminTopbarProps {
  title: string;
  onMenuOpen: () => void;
}

export function AdminTopbar({ title, onMenuOpen }: AdminTopbarProps) {
  const [hasDraftChanges, setHasDraftChanges] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [toast, setToast] = useState<{ tone: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/status")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) setHasDraftChanges(data.hasDraftChanges === true);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(t);
  }, [toast]);

  async function handlePublish() {
    setPublishing(true);
    try {
      await publishContent();
      setHasDraftChanges(false);
      setToast({ tone: "success", text: "Site publié — les visiteurs voient la nouvelle version." });
    } catch {
      setToast({ tone: "error", text: "Échec de la publication. Réessayez." });
    } finally {
      setPublishing(false);
    }
  }

  return (
    <>
      <header className="kt-admin__topbar">
        <div className="kt-admin__topbar-left">
          <button
            type="button"
            className="kt-admin__menu-btn"
            onClick={onMenuOpen}
            aria-label="Ouvrir le menu"
          >
            <Menu size={20} />
          </button>
          <div>
            <p className="kt-admin__topbar-eyebrow">Administration</p>
            <h1 className="kt-admin__title">{title}</h1>
          </div>
        </div>

        <div className="kt-admin__topbar-actions">
          <Link href="/admin/preview" className="kt-admin__btn kt-admin__btn--ghost" target="_blank">
            <Eye size={16} aria-hidden />
            <span className="kt-admin__btn-label">Prévisualiser</span>
          </Link>
          <button
            type="button"
            className="kt-admin__btn kt-admin__btn--gold"
            onClick={handlePublish}
            disabled={publishing}
          >
            <Upload size={16} aria-hidden />
            <span className="kt-admin__btn-label">{publishing ? "Publication…" : "Publier"}</span>
          </button>
        </div>
      </header>

      {hasDraftChanges && (
        <div className="kt-admin__draft-notice" role="status">
          <span className="kt-admin__draft-dot" aria-hidden />
          Modifications en brouillon non publiées — les visiteurs voient encore l&apos;ancienne version.
        </div>
      )}

      {toast && (
        <div className={`kt-admin__toast kt-admin__toast--${toast.tone}`} role="alert">
          {toast.text}
        </div>
      )}
    </>
  );
}
