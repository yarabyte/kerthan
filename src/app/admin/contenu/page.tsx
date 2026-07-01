import { AdminShell } from "@/components/admin/admin-shell";
import { ContentEditor } from "@/components/admin/content-editor/index";

export default function AdminContentPage() {
  return (
    <AdminShell title="Contenu du site" wide>
      <p className="kt-admin__hint kt-content-editor__intro">
        Choisissez une section à gauche, modifiez, puis <strong>Enregistrer</strong>.
        Pensez à <strong>Publier</strong> (en haut) pour mettre le site en ligne.
      </p>
      <ContentEditor />
    </AdminShell>
  );
}
