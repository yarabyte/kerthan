"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BookOpen,
  Contact,
  Footprints,
  HeartPulse,
  Home,
  LayoutGrid,
  Menu,
  Phone,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SiteContent } from "@/lib/content-types";
import { fetchDraftContent, saveDraftContent } from "@/lib/admin/client";
import { AdminLoading } from "@/components/admin/admin-loading";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { IconPickerField } from "@/components/admin/icon-picker-field";
import { ContentField, ContentPanel, SaveBar } from "./parts";

type ContentTab =
  | "general"
  | "accueil"
  | "services"
  | "histoire"
  | "interne"
  | "contact"
  | "footer"
  | "navigation";

const TABS: { id: ContentTab; label: string; icon: LucideIcon; group: string }[] = [
  { id: "general", label: "Informations", icon: Phone, group: "Site" },
  { id: "accueil", label: "Accueil", icon: Home, group: "Page d'accueil" },
  { id: "services", label: "Services", icon: Stethoscope, group: "Page d'accueil" },
  { id: "histoire", label: "Notre histoire", icon: BookOpen, group: "Page d'accueil" },
  { id: "interne", label: "Médecine interne", icon: HeartPulse, group: "Page d'accueil" },
  { id: "contact", label: "Contact", icon: Contact, group: "Page d'accueil" },
  { id: "footer", label: "Footer & SEO", icon: Footprints, group: "Site" },
  { id: "navigation", label: "Navigation", icon: Menu, group: "Site" },
];

export function ContentEditor() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ContentTab>("general");
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchDraftContent();
      setContent(data);
      setActiveServiceId(data.services[0]?.id ?? null);
    } catch {
      setError("Impossible de charger le contenu.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function save(settings: Record<string, unknown>, items?: Record<string, unknown[]>) {
    if (!content) return;
    setSaving(true);
    setMessage(null);
    setError(null);
    try {
      const updated = await saveDraftContent({ settings, items });
      setContent(updated);
      setMessage("Brouillon enregistré.");
      window.setTimeout(() => setMessage(null), 3500);
    } catch {
      setError("Échec de l'enregistrement.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <AdminLoading />;
  if (!content) return <p className="kt-admin__error">{error ?? "Erreur"}</p>;

  const c = content;
  const activeService = c.services.find((s) => s.id === activeServiceId) ?? c.services[0];
  const activeServiceIndex = c.services.findIndex((s) => s.id === activeService?.id);

  let lastGroup = "";

  return (
    <div className="kt-content-editor">
      {message && <div className="kt-admin__success kt-content-editor__alert">{message}</div>}
      {error && <div className="kt-admin__error kt-content-editor__alert">{error}</div>}

      <nav className="kt-content-editor__nav" aria-label="Sections du contenu">
        {TABS.map((tab) => {
          const showGroup = tab.group !== lastGroup;
          lastGroup = tab.group;
          const Icon = tab.icon;
          return (
            <div key={tab.id}>
              {showGroup && <p className="kt-content-editor__group">{tab.group}</p>}
              <button
                type="button"
                className={`kt-content-editor__tab${activeTab === tab.id ? " is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={17} aria-hidden />
                {tab.label}
              </button>
            </div>
          );
        })}
        <p className="kt-content-editor__group">Ailleurs</p>
        <a href="/admin/slider" className="kt-content-editor__tab kt-content-editor__tab--link">
          <LayoutGrid size={17} aria-hidden />
          Slider hero
        </a>
      </nav>

      <div className="kt-content-editor__main">
        {activeTab === "general" && (
          <ContentPanel
            title="Informations générales"
            description="Coordonnées, horaires et devise affichés sur tout le site."
          >
            <div className="kt-admin__grid kt-admin__grid--2">
              <ContentField label="Nom" value={c.site.name} onChange={(v) => setContent({ ...c, site: { ...c.site, name: v } })} />
              <ContentField label="Slogan" value={c.site.tagline} onChange={(v) => setContent({ ...c, site: { ...c.site, tagline: v } })} />
              <ContentField label="Téléphone principal" value={c.site.phone} onChange={(v) => setContent({ ...c, site: { ...c.site, phone: v } })} />
              <ContentField label="Téléphone secondaire" value={c.site.phoneSecondary} onChange={(v) => setContent({ ...c, site: { ...c.site, phoneSecondary: v } })} />
              <ContentField label="Lien tel. principal" value={c.site.phoneHref} onChange={(v) => setContent({ ...c, site: { ...c.site, phoneHref: v } })} hint="tel:+237…" />
              <ContentField label="Lien tel. secondaire" value={c.site.phoneSecondaryHref} onChange={(v) => setContent({ ...c, site: { ...c.site, phoneSecondaryHref: v } })} />
              <ContentField label="Adresse complète" value={c.site.address} onChange={(v) => setContent({ ...c, site: { ...c.site, address: v } })} multiline />
              <ContentField label="Adresse courte" value={c.site.addressShort} onChange={(v) => setContent({ ...c, site: { ...c.site, addressShort: v } })} />
              <ContentField label="Site web (texte)" value={c.site.website} onChange={(v) => setContent({ ...c, site: { ...c.site, website: v } })} />
              <ContentField label="URL site web" value={c.site.websiteHref} onChange={(v) => setContent({ ...c, site: { ...c.site, websiteHref: v } })} />
              <ContentField label="Horaires" value={c.site.hours} onChange={(v) => setContent({ ...c, site: { ...c.site, hours: v } })} />
              <ContentField label="Devise (3 mots, virgules)" value={c.site.motto.join(", ")} onChange={(v) => setContent({ ...c, site: { ...c.site, motto: v.split(",").map((s) => s.trim()).filter(Boolean) } })} />
            </div>
            <SaveBar saving={saving} onSave={() => save({ site: c.site })} />
          </ContentPanel>
        )}

        {activeTab === "accueil" && (
          <>
            <ContentPanel title="Hero" description="Bannière principale et boutons d'action.">
              <div className="kt-admin__grid">
                <div className="kt-admin__grid kt-admin__grid--2">
                  <ContentField label="Titre (avant surlignage)" value={c.hero.title} onChange={(v) => setContent({ ...c, hero: { ...c.hero, title: v } })} />
                  <ContentField label="Mot surligné" value={c.hero.titleHighlight} onChange={(v) => setContent({ ...c, hero: { ...c.hero, titleHighlight: v } })} />
                </div>
                <ContentField label="Texte d'accroche" value={c.hero.lead} onChange={(v) => setContent({ ...c, hero: { ...c.hero, lead: v } })} multiline />
                <div className="kt-admin__grid kt-admin__grid--2">
                  <ContentField label="Bouton principal" value={c.hero.ctaPrimary} onChange={(v) => setContent({ ...c, hero: { ...c.hero, ctaPrimary: v } })} />
                  <ContentField label="Lien" value={c.hero.ctaPrimaryHref} onChange={(v) => setContent({ ...c, hero: { ...c.hero, ctaPrimaryHref: v } })} />
                  <ContentField label="Bouton secondaire" value={c.hero.ctaSecondary} onChange={(v) => setContent({ ...c, hero: { ...c.hero, ctaSecondary: v } })} />
                  <ContentField label="Lien" value={c.hero.ctaSecondaryHref} onChange={(v) => setContent({ ...c, hero: { ...c.hero, ctaSecondaryHref: v } })} />
                </div>
              </div>
              <SaveBar saving={saving} onSave={() => save({ hero: c.hero })} />
            </ContentPanel>

            <ContentPanel
              title="Statistiques"
              description="Le chiffre « services médicaux » est calculé automatiquement."
            >
              <div className="kt-content-stats">
                {c.stats.filter((s) => !s.autoServices).map((stat) => (
                  <div key={stat.id} className="kt-content-stats__item">
                    <div className="kt-admin__grid kt-admin__grid--2">
                      <ContentField label="Valeur" value={stat.value} onChange={(v) => {
                        const stats = c.stats.map((s) => (s.id === stat.id ? { ...s, value: v } : s));
                        setContent({ ...c, stats });
                      }} />
                      <ContentField label="Suffixe" value={stat.suffix ?? ""} onChange={(v) => {
                        const stats = c.stats.map((s) => (s.id === stat.id ? { ...s, suffix: v || undefined } : s));
                        setContent({ ...c, stats });
                      }} />
                      <ContentField label="Libellé" value={stat.label} onChange={(v) => {
                        const stats = c.stats.map((s) => (s.id === stat.id ? { ...s, label: v } : s));
                        setContent({ ...c, stats });
                      }} />
                    </div>
                  </div>
                ))}
              </div>
              <SaveBar saving={saving} onSave={() => save({}, { stat: c.stats })} />
            </ContentPanel>
          </>
        )}

        {activeTab === "services" && (
          <>
            <ContentPanel title="Introduction de la section" description="Titre et texte au-dessus de la grille des services.">
              <div className="kt-admin__grid">
                <ContentField label="Surtitre" value={c.servicesSection.eyebrow ?? ""} onChange={(v) => setContent({ ...c, servicesSection: { ...c.servicesSection, eyebrow: v } })} />
                <ContentField label="Titre" value={c.servicesSection.title} onChange={(v) => setContent({ ...c, servicesSection: { ...c.servicesSection, title: v } })} />
                <ContentField label="Description" value={c.servicesSection.description ?? ""} onChange={(v) => setContent({ ...c, servicesSection: { ...c.servicesSection, description: v } })} multiline wide />
              </div>
              <SaveBar saving={saving} onSave={() => save({ services_section: c.servicesSection })} label="Enregistrer l'intro" />
            </ContentPanel>

            <ContentPanel
              title="Fiches services"
              description="Sélectionnez un service pour modifier sa carte et sa page détaillée."
            >
              <div className="kt-service-picker" role="tablist" aria-label="Choisir un service">
                {c.services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={activeService?.id === service.id}
                    className={`kt-service-picker__btn${activeService?.id === service.id ? " is-active" : ""}`}
                    onClick={() => setActiveServiceId(service.id)}
                  >
                    {service.title}
                  </button>
                ))}
                <button
                  type="button"
                  className="kt-service-picker__btn kt-service-picker__btn--add"
                  onClick={() => {
                    const id = `svc-${Date.now()}`;
                    const next = {
                      id,
                      slug: `service-${Date.now()}`,
                      icon: "stethoscope",
                      tone: "green" as const,
                      title: "Nouveau service",
                      description: "",
                      image: "",
                      body: "",
                    };
                    setContent({ ...c, services: [...c.services, next] });
                    setActiveServiceId(id);
                  }}
                >
                  + Ajouter
                </button>
              </div>

              {activeService && activeServiceIndex >= 0 && (
                <div className="kt-service-form">
                  <div className="kt-admin__grid kt-admin__grid--2">
                    <ContentField label="Titre" value={activeService.title} onChange={(v) => {
                      const services = [...c.services];
                      services[activeServiceIndex] = { ...activeService, title: v };
                      setContent({ ...c, services });
                    }} />
                    <ContentField label="Slug URL" value={activeService.slug} onChange={(v) => {
                      const services = [...c.services];
                      services[activeServiceIndex] = { ...activeService, slug: v };
                      setContent({ ...c, services });
                    }} hint="/services/…" />
                    <ContentField label="Résumé (carte)" value={activeService.description} onChange={(v) => {
                      const services = [...c.services];
                      services[activeServiceIndex] = { ...activeService, description: v };
                      setContent({ ...c, services });
                    }} multiline />
                    <ImageUploadField
                      label="Photo bannière"
                      value={activeService.image ?? ""}
                      onChange={(v) => {
                        const services = [...c.services];
                        services[activeServiceIndex] = { ...activeService, image: v };
                        setContent({ ...c, services });
                      }}
                      hint="JPG, PNG, WebP ou GIF — max. 5 Mo"
                    />
                    <IconPickerField
                      label="Icône"
                      value={activeService.icon}
                      onChange={(v) => {
                        const services = [...c.services];
                        services[activeServiceIndex] = { ...activeService, icon: v };
                        setContent({ ...c, services });
                      }}
                    />
                    <ContentField label="Couleur" value={activeService.tone} onChange={(v) => {
                      const services = [...c.services];
                      services[activeServiceIndex] = { ...activeService, tone: v as typeof activeService.tone };
                      setContent({ ...c, services });
                    }} hint="green, gold ou red" />
                  </div>
                  <RichTextEditor
                    label="Contenu complet (page détail)"
                    value={activeService.body}
                    onChange={(html) => {
                      const services = [...c.services];
                      services[activeServiceIndex] = { ...activeService, body: html };
                      setContent({ ...c, services });
                    }}
                    minHeight={240}
                  />
                </div>
              )}

              <SaveBar
                saving={saving}
                onSave={() => save({}, { service: c.services })}
                label="Enregistrer tous les services"
                extra={
                  activeService && c.services.length > 1 ? (
                    <button
                      type="button"
                      className="kt-admin__btn kt-admin__btn--danger"
                      onClick={() => {
                        const next = c.services.filter((s) => s.id !== activeService.id);
                        setContent({ ...c, services: next });
                        setActiveServiceId(next[0]?.id ?? null);
                      }}
                    >
                      Supprimer ce service
                    </button>
                  ) : null
                }
              />
            </ContentPanel>
          </>
        )}

        {activeTab === "histoire" && (
          <ContentPanel title="Notre histoire" description="Section présentation et points clés.">
            <div className="kt-admin__grid">
              <ContentField label="Surtitre" value={c.historySection.eyebrow ?? ""} onChange={(v) => setContent({ ...c, historySection: { ...c.historySection, eyebrow: v } })} />
              <ContentField label="Titre" value={c.historySection.title} onChange={(v) => setContent({ ...c, historySection: { ...c.historySection, title: v } })} />
              <ContentField label="Description" value={c.historySection.description ?? ""} onChange={(v) => setContent({ ...c, historySection: { ...c.historySection, description: v } })} multiline wide />
              <ImageUploadField
                label="Photo"
                value={c.historySection.photoImage}
                onChange={(v) => setContent({ ...c, historySection: { ...c.historySection, photoImage: v } })}
                hint="JPG, PNG, WebP ou GIF — max. 5 Mo"
              />
              <ContentField label="Légende photo" value={c.historySection.photoCaption} onChange={(v) => setContent({ ...c, historySection: { ...c.historySection, photoCaption: v } })} />
              <div className="kt-admin__grid kt-admin__grid--2">
                <ContentField label="Badge « Depuis »" value={c.historySection.sinceLabel} onChange={(v) => setContent({ ...c, historySection: { ...c.historySection, sinceLabel: v } })} />
                <ContentField label="Date" value={c.historySection.sinceValue} onChange={(v) => setContent({ ...c, historySection: { ...c.historySection, sinceValue: v } })} />
              </div>
            </div>
            <p className="kt-content-panel__subhead">Points clés</p>
            <div className="kt-content-list">
              {c.historyPoints.map((point, i) => (
                <ContentField
                  key={point.id}
                  label={`Point ${i + 1}`}
                  value={point.text}
                  onChange={(v) => {
                    const historyPoints = [...c.historyPoints];
                    historyPoints[i] = { ...point, text: v };
                    setContent({ ...c, historyPoints });
                  }}
                />
              ))}
            </div>
            <SaveBar saving={saving} onSave={() => save({ history_section: c.historySection }, { history_point: c.historyPoints })} />
          </ContentPanel>
        )}

        {activeTab === "interne" && (
          <ContentPanel title="Médecine interne" description="Spécialité phare et cartes de présentation.">
            <div className="kt-admin__grid">
              <ContentField label="Surtitre" value={c.internalMedicineSection.eyebrow ?? ""} onChange={(v) => setContent({ ...c, internalMedicineSection: { ...c.internalMedicineSection, eyebrow: v } })} />
              <ContentField label="Titre" value={c.internalMedicineSection.title} onChange={(v) => setContent({ ...c, internalMedicineSection: { ...c.internalMedicineSection, title: v } })} />
              <ContentField label="Description" value={c.internalMedicineSection.description ?? ""} onChange={(v) => setContent({ ...c, internalMedicineSection: { ...c.internalMedicineSection, description: v } })} multiline wide />
              <ContentField label="Citation" value={c.internalMedicineSection.quote} onChange={(v) => setContent({ ...c, internalMedicineSection: { ...c.internalMedicineSection, quote: v } })} />
            </div>
            <p className="kt-content-panel__subhead">Cartes</p>
            <div className="kt-content-list">
              {c.internalMedItems.map((item, i) => (
                <div key={item.id} className="kt-content-list__card">
                  <div className="kt-admin__grid kt-admin__grid--2">
                    <ContentField label="Titre" value={item.title} onChange={(v) => {
                      const items = [...c.internalMedItems];
                      items[i] = { ...item, title: v };
                      setContent({ ...c, internalMedItems: items });
                    }} />
                    <IconPickerField
                      label="Icône"
                      value={item.icon}
                      onChange={(v) => {
                        const items = [...c.internalMedItems];
                        items[i] = { ...item, icon: v };
                        setContent({ ...c, internalMedItems: items });
                      }}
                    />
                    <ContentField label="Description" value={item.description} onChange={(v) => {
                      const items = [...c.internalMedItems];
                      items[i] = { ...item, description: v };
                      setContent({ ...c, internalMedItems: items });
                    }} multiline wide />
                  </div>
                </div>
              ))}
            </div>
            <SaveBar saving={saving} onSave={() => save({ internal_medicine_section: c.internalMedicineSection }, { internal_med_item: c.internalMedItems })} />
          </ContentPanel>
        )}

        {activeTab === "contact" && (
          <>
            <ContentPanel title="Section contact" description="Formulaire de rendez-vous.">
              <div className="kt-admin__grid">
                <ContentField label="Surtitre" value={c.contactSection.eyebrow ?? ""} onChange={(v) => setContent({ ...c, contactSection: { ...c.contactSection, eyebrow: v } })} />
                <ContentField label="Titre" value={c.contactSection.title} onChange={(v) => setContent({ ...c, contactSection: { ...c.contactSection, title: v } })} />
                <ContentField label="Description" value={c.contactSection.description ?? ""} onChange={(v) => setContent({ ...c, contactSection: { ...c.contactSection, description: v } })} multiline wide />
                <ContentField label="Badge horaires" value={c.contactSection.hoursBadge} onChange={(v) => setContent({ ...c, contactSection: { ...c.contactSection, hoursBadge: v } })} />
                <ContentField label="Message de succès" value={c.contactSection.successMessage} onChange={(v) => setContent({ ...c, contactSection: { ...c.contactSection, successMessage: v } })} multiline />
              </div>
              <SaveBar saving={saving} onSave={() => save({ contact_section: c.contactSection })} label="Enregistrer contact" />
            </ContentPanel>

            <ContentPanel title="Urgences & formulaire" description="Bandeau urgence et options du select.">
              <ContentField label="Label bandeau urgence" value={c.emergencySection.label} onChange={(v) => setContent({ ...c, emergencySection: { ...c.emergencySection, label: v } })} />
              <p className="kt-content-panel__subhead">Services proposés dans le formulaire</p>
              <div className="kt-content-list">
                {c.appointmentServices.map((svc, i) => (
                  <ContentField
                    key={svc.id}
                    label={`Option ${i + 1}`}
                    value={svc.label}
                    onChange={(v) => {
                      const appointmentServices = [...c.appointmentServices];
                      appointmentServices[i] = { ...svc, label: v };
                      setContent({ ...c, appointmentServices });
                    }}
                  />
                ))}
              </div>
              <SaveBar
                saving={saving}
                onSave={() => save({ emergency_section: c.emergencySection }, { appointment_service: c.appointmentServices })}
              />
            </ContentPanel>
          </>
        )}

        {activeTab === "footer" && (
          <ContentPanel title="Footer & SEO" description="Pied de page et référencement Google.">
            <div className="kt-admin__grid">
              <ContentField label="Mission footer" value={c.footer.mission} onChange={(v) => setContent({ ...c, footer: { ...c.footer, mission: v } })} multiline />
              <ContentField label="Script tagline" value={c.footer.taglineScript} onChange={(v) => setContent({ ...c, footer: { ...c.footer, taglineScript: v } })} />
              <ContentField label="Titre SEO" value={c.seo.title} onChange={(v) => setContent({ ...c, seo: { ...c.seo, title: v } })} />
              <ContentField label="Description SEO" value={c.seo.description} onChange={(v) => setContent({ ...c, seo: { ...c.seo, description: v } })} multiline wide />
              <ImageUploadField
                label="Image Open Graph"
                value={c.seo.ogImage}
                onChange={(v) => setContent({ ...c, seo: { ...c.seo, ogImage: v } })}
                hint="Image partagée sur les réseaux — max. 5 Mo"
              />
            </div>
            <SaveBar saving={saving} onSave={() => save({ footer: c.footer, seo: c.seo })} />
          </ContentPanel>
        )}

        {activeTab === "navigation" && (
          <ContentPanel title="Navigation" description="Libellés du menu — les ancres (#accueil, etc.) sont fixes.">
            <div className="kt-content-list">
              {c.navLinks.map((link, i) => (
                <div key={link.id} className="kt-admin__grid kt-admin__grid--2">
                  <ContentField label={`Ancre #${link.id}`} value={link.id} onChange={() => undefined} readOnly />
                  <ContentField label="Libellé affiché" value={link.label} onChange={(v) => {
                    const navLinks = [...c.navLinks];
                    navLinks[i] = { ...link, label: v };
                    setContent({ ...c, navLinks });
                  }} />
                </div>
              ))}
            </div>
            <SaveBar saving={saving} onSave={() => save({}, { nav_link: c.navLinks })} />
          </ContentPanel>
        )}
      </div>
    </div>
  );
}
