"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { fetchDraftContent, saveDraftContent, toggleMaintenance } from "@/lib/admin/client";

export default function AdminSettingsPage() {
  const [maintenance, setMaintenance] = useState(false);
  const [legalTitle, setLegalTitle] = useState("");
  const [legalBody, setLegalBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  const load = useCallback(async () => {
    const content = await fetchDraftContent();
    setMaintenance(content.maintenance.enabled);
    setLegalTitle(content.legal.title);
    setLegalBody(content.legal.body);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function saveLegal() {
    try {
      await saveDraftContent({
        settings: { legal: { title: legalTitle, body: legalBody } },
      });
      setMessage("Mentions légales enregistrées.");
    } catch {
      setMessage("Erreur.");
    }
  }

  async function handleMaintenance(checked: boolean) {
    try {
      await toggleMaintenance(checked);
      setMaintenance(checked);
      setMessage(checked ? "Mode maintenance activé." : "Mode maintenance désactivé.");
    } catch {
      setMessage("Erreur maintenance.");
    }
  }

  if (loading) return <AdminShell title="Paramètres"><p>Chargement…</p></AdminShell>;

  return (
    <AdminShell title="Paramètres">
      {message && <div className="kt-admin__success">{message}</div>}

      <div className="kt-admin__card">
        <h2>Mode maintenance</h2>
        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
          Active la page « Bientôt en ligne » pour tous les visiteurs. L&apos;admin reste accessible.
        </p>
        <label className="kt-admin__toggle">
          <input
            type="checkbox"
            checked={maintenance}
            onChange={(e) => handleMaintenance(e.target.checked)}
          />
          Maintenance {maintenance ? "activée" : "désactivée"}
        </label>
      </div>

      <div className="kt-admin__card">
        <h2>Mentions légales</h2>
        <div className="kt-admin__field">
          <label>Titre</label>
          <input value={legalTitle} onChange={(e) => setLegalTitle(e.target.value)} />
        </div>
        <RichTextEditor
          label="Contenu"
          value={legalBody}
          onChange={setLegalBody}
          minHeight={240}
        />
        <div className="kt-admin__actions">
          <button type="button" className="kt-admin__btn kt-admin__btn--primary" onClick={saveLegal}>
            Enregistrer brouillon
          </button>
        </div>
      </div>
    </AdminShell>
  );
}
