"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { IconPickerField } from "@/components/admin/icon-picker-field";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import type { HeroSlideItem } from "@/lib/content-types";
import { fetchDraftContent, saveDraftContent } from "@/lib/admin/client";

export default function AdminSliderPage() {
  const [slides, setSlides] = useState<HeroSlideItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const load = useCallback(async () => {
    const content = await fetchDraftContent();
    setSlides(content.heroSlides);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function move(index: number, dir: -1 | 1) {
    const next = [...slides];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setSlides(next);
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    try {
      await saveDraftContent({ items: { hero_slide: slides } });
      setMessage("Slider enregistré.");
    } catch {
      setMessage("Erreur.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <AdminShell title="Slider hero"><p>Chargement…</p></AdminShell>;

  return (
    <AdminShell title="Slider hero">
      {message && <div className="kt-admin__success">{message}</div>}
      {slides.map((slide, i) => (
        <div key={slide.id} className="kt-admin__list-item">
          <div className="kt-admin__list-head">
            <span>Slide {i + 1} — {slide.type}</span>
            <span>
              <button type="button" className="kt-admin__btn kt-admin__btn--ghost" onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" className="kt-admin__btn kt-admin__btn--ghost" onClick={() => move(i, 1)} disabled={i === slides.length - 1}>↓</button>
              <button type="button" className="kt-admin__btn kt-admin__btn--danger" onClick={() => setSlides(slides.filter((_, j) => j !== i))}>Supprimer</button>
            </span>
          </div>
          <div className="kt-admin__grid kt-admin__grid--2">
            <div className="kt-admin__field">
              <label>Type</label>
              <select value={slide.type} onChange={(e) => {
                const next = [...slides];
                next[i] = { ...slide, type: e.target.value as "logo" | "feature" };
                setSlides(next);
              }}>
                <option value="logo">Logo</option>
                <option value="feature">Point fort</option>
              </select>
            </div>
            {slide.type === "logo" ? (
              <>
                <ImageUploadField
                  label="Image logo"
                  value={slide.logoImage ?? ""}
                  onChange={(v) => {
                    const next = [...slides];
                    next[i] = { ...slide, logoImage: v };
                    setSlides(next);
                  }}
                  hint="JPG, PNG, WebP ou GIF — max. 5 Mo"
                />
                <div className="kt-admin__field">
                  <label>Texte signature</label>
                  <input value={slide.signature ?? ""} onChange={(e) => { const next = [...slides]; next[i] = { ...slide, signature: e.target.value }; setSlides(next); }} />
                </div>
              </>
            ) : (
              <>
                <div className="kt-admin__field">
                  <label>Titre</label>
                  <input value={slide.title ?? ""} onChange={(e) => { const next = [...slides]; next[i] = { ...slide, title: e.target.value }; setSlides(next); }} />
                </div>
                <div className="kt-admin__field">
                  <label>Description</label>
                  <input value={slide.description ?? ""} onChange={(e) => { const next = [...slides]; next[i] = { ...slide, description: e.target.value }; setSlides(next); }} />
                </div>
                <IconPickerField
                  label="Icône"
                  value={slide.icon ?? "shield-check"}
                  onChange={(v) => {
                    const next = [...slides];
                    next[i] = { ...slide, icon: v };
                    setSlides(next);
                  }}
                />
                <div className="kt-admin__field">
                  <label>Ton</label>
                  <select value={slide.tone ?? "green"} onChange={(e) => { const next = [...slides]; next[i] = { ...slide, tone: e.target.value as HeroSlideItem["tone"] }; setSlides(next); }}>
                    <option value="green">Vert</option>
                    <option value="gold">Or</option>
                    <option value="red">Rouge</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
      <div className="kt-admin__actions">
        <button type="button" className="kt-admin__btn kt-admin__btn--ghost" onClick={() => setSlides([...slides, { id: `slide-${Date.now()}`, type: "feature", icon: "shield-check", tone: "green", title: "Nouveau", description: "" }])}>
          + Ajouter un slide
        </button>
        <button type="button" className="kt-admin__btn kt-admin__btn--primary" disabled={saving} onClick={save}>
          Enregistrer
        </button>
      </div>
    </AdminShell>
  );
}
