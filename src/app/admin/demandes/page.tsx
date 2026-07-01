"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, Inbox, Phone } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminLoading } from "@/components/admin/admin-loading";

interface Submission {
  id: string;
  name: string;
  phone: string;
  service: string | null;
  message: string | null;
  createdAt: string;
  readAt: string | null;
}

export default function AdminSubmissionsPage() {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/submissions");
    if (res.ok) {
      const data = (await res.json()) as Submission[];
      setItems(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function markRead(id: string) {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  if (loading) {
    return (
      <AdminShell title="Demandes de contact">
        <AdminLoading />
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Demandes de contact">
      {items.length === 0 ? (
        <div className="kt-admin__empty">
          <Inbox size={40} strokeWidth={1.5} aria-hidden />
          <p>Aucune demande pour le moment.</p>
        </div>
      ) : (
        <div className="kt-admin__table-wrap">
          <table className="kt-admin__table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>Téléphone</th>
                <th>Service</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className={!item.readAt ? "is-unread" : undefined}>
                  <td>{new Date(item.createdAt).toLocaleString("fr-FR")}</td>
                  <td>{item.name}</td>
                  <td>
                    <a href={`tel:${item.phone}`} className="kt-admin__phone-link">
                      <Phone size={14} aria-hidden />
                      {item.phone}
                    </a>
                  </td>
                  <td>{item.service ?? "—"}</td>
                  <td>{item.message ? item.message.slice(0, 60) + (item.message.length > 60 ? "…" : "") : "—"}</td>
                  <td>
                    {!item.readAt && (
                      <button
                        type="button"
                        className="kt-admin__btn kt-admin__btn--ghost kt-admin__btn--sm"
                        onClick={() => markRead(item.id)}
                      >
                        <Check size={14} aria-hidden />
                        Lu
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
