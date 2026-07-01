"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import type { TeamMemberItem } from "@/lib/content-types";
import { fetchDraftContent, saveDraftContent } from "@/lib/admin/client";

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMemberItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const load = useCallback(async () => {
    const content = await fetchDraftContent();
    setMembers(content.teamMembers);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function save() {
    setSaving(true);
    try {
      await saveDraftContent({ items: { team_member: members } });
      setMessage("Équipe enregistrée.");
    } catch {
      setMessage("Erreur.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <AdminShell title="Équipe"><p>Chargement…</p></AdminShell>;

  return (
    <AdminShell title="Équipe médicale">
      {message && <div className="kt-admin__success">{message}</div>}
      {members.map((member, i) => (
        <div key={member.id} className="kt-admin__list-item">
          <div className="kt-admin__list-head">
            <span>{member.name || "Sans nom"}</span>
            <button type="button" className="kt-admin__btn kt-admin__btn--danger" onClick={() => setMembers(members.filter((_, j) => j !== i))}>Supprimer</button>
          </div>
          <div className="kt-admin__grid kt-admin__grid--2">
            <div className="kt-admin__field"><label>Nom</label><input value={member.name} onChange={(e) => { const next = [...members]; next[i] = { ...member, name: e.target.value }; setMembers(next); }} /></div>
            <div className="kt-admin__field"><label>Titre / spécialité</label><input value={member.title} onChange={(e) => { const next = [...members]; next[i] = { ...member, title: e.target.value }; setMembers(next); }} /></div>
            <ImageUploadField
              label="Photo"
              value={member.photo}
              onChange={(v) => {
                const next = [...members];
                next[i] = { ...member, photo: v };
                setMembers(next);
              }}
              hint="JPG, PNG, WebP ou GIF — max. 5 Mo"
            />
            <div className="kt-admin__field"><label>Bio</label><textarea value={member.bio} onChange={(e) => { const next = [...members]; next[i] = { ...member, bio: e.target.value }; setMembers(next); }} /></div>
          </div>
        </div>
      ))}
      <div className="kt-admin__actions">
        <button type="button" className="kt-admin__btn kt-admin__btn--ghost" onClick={() => setMembers([...members, { id: `team-${Date.now()}`, name: "", title: "", photo: "", bio: "", sortOrder: members.length }])}>
          + Ajouter un membre
        </button>
        <button type="button" className="kt-admin__btn kt-admin__btn--primary" disabled={saving} onClick={save}>Enregistrer</button>
      </div>
    </AdminShell>
  );
}
