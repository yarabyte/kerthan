"use client";

import type { SiteContent } from "@/lib/content-types";

export async function fetchDraftContent(): Promise<SiteContent> {
  const res = await fetch("/api/admin/content");
  if (!res.ok) throw new Error("Impossible de charger le contenu.");
  return res.json() as Promise<SiteContent>;
}

export async function saveDraftContent(body: {
  settings?: Record<string, unknown>;
  items?: Record<string, unknown[]>;
}): Promise<SiteContent> {
  const res = await fetch("/api/admin/content", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Échec de l'enregistrement.");
  return res.json() as Promise<SiteContent>;
}

export async function publishContent(): Promise<void> {
  const res = await fetch("/api/admin/publish", { method: "POST" });
  if (!res.ok) throw new Error("Échec de la publication.");
}

export async function uploadAdminImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);

  const res = await fetch("/api/admin/upload", {
    method: "POST",
    body: form,
  });

  const data = (await res.json()) as { url?: string; error?: string };
  if (!res.ok || !data.url) {
    throw new Error(data.error ?? "Échec de l'envoi.");
  }
  return data.url;
}

export async function toggleMaintenance(enabled: boolean): Promise<void> {
  const res = await fetch("/api/admin/settings/maintenance", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled }),
  });
  if (!res.ok) throw new Error("Échec du changement de mode maintenance.");
}
