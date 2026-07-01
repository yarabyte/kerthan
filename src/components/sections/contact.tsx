"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Alert, Badge, Button, Card } from "@/components/ui/core";
import { ContactItem, SectionHeading } from "@/components/ui/brand";
import { Checkbox, Input, Select } from "@/components/ui/forms";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { AppointmentServiceItem, ContactSectionContent, SiteInfo } from "@/lib/content-types";

interface ContactSectionProps {
  site: SiteInfo;
  section: ContactSectionContent;
  appointmentServices: AppointmentServiceItem[];
}

export function ContactSection({ site, section, appointmentServices }: ContactSectionProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        throw new Error(json.error ?? "Une erreur est survenue.");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  const serviceOptions = appointmentServices.map((s) => s.label);

  return (
    <section id="contact" className="kt-section kt-appt">
      <div className="kt-container kt-appt__grid">
        <ScrollReveal>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <div className="kt-appt__contacts">
            <ContactItem
              icon="phone"
              label="Standard"
              value={site.phone}
              href={site.phoneHref}
            />
            <ContactItem
              icon="phone-call"
              label="Second numéro"
              value={site.phoneSecondary}
              href={site.phoneSecondaryHref}
              tone="gold"
            />
            <ContactItem icon="map-pin" label="Adresse" value={site.address} />
            <ContactItem
              icon="globe"
              label="Site web"
              value={site.website}
              href={site.websiteHref}
            />
          </div>
          <div className="kt-appt__hours">
            <Badge tone="green" dot>
              {section.hoursBadge}
            </Badge>
            <span>{site.hours}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <Card className="kt-appt__form">
            {sent ? (
              <div className="kt-appt__sent">
                <Alert tone="success" title={section.successTitle}>
                  {section.successMessage}
                </Alert>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSent(false);
                    setError(null);
                  }}
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <Alert tone="danger" title="Envoi impossible">
                    {error}
                  </Alert>
                )}
                <div className="kt-form__row">
                  <Input
                    name="name"
                    label="Nom complet"
                    placeholder="Votre nom"
                    icon="user-round"
                    required
                    disabled={loading}
                  />
                  <Input
                    name="phone"
                    label="Téléphone"
                    type="tel"
                    placeholder="+237 6XX XX XX XX"
                    icon="phone"
                    required
                    disabled={loading}
                  />
                </div>
                <Select
                  name="service"
                  label="Service souhaité"
                  placeholder="Choisir un service"
                  options={serviceOptions}
                  disabled={loading}
                />
                <Input
                  name="message"
                  label="Message (optionnel)"
                  multiline
                  placeholder="Décrivez brièvement le motif de votre consultation…"
                  disabled={loading}
                />
                <Checkbox
                  name="consent"
                  label="J'accepte d'être recontacté(e) par téléphone ou SMS."
                  defaultChecked
                  required
                  disabled={loading}
                />
                <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
                  {loading ? "Envoi en cours…" : "Envoyer ma demande"}
                </Button>
              </form>
            )}
          </Card>
        </ScrollReveal>
      </div>
      <Image
        src="/assets/motif-heartbeat.svg"
        alt=""
        width={1200}
        height={40}
        className="kt-appt__motif"
        aria-hidden
      />
    </section>
  );
}
