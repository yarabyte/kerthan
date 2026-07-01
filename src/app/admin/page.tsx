import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { countUnreadSubmissions, hasUnpublishedChanges } from "@/lib/db/queries/content";
import {
  FileText,
  Images,
  Mail,
  PenLine,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

export default async function AdminDashboardPage() {
  let unread = 0;
  let hasDraft = false;
  try {
    [unread, hasDraft] = await Promise.all([
      countUnreadSubmissions(),
      hasUnpublishedChanges(),
    ]);
  } catch {
    /* db unavailable */
  }

  const quickLinks = [
    {
      href: "/admin/contenu",
      icon: FileText,
      title: "Modifier le contenu",
      description: "Textes, services, contact, footer et SEO du site.",
    },
    {
      href: "/admin/slider",
      icon: SlidersHorizontal,
      title: "Slider hero",
      description: "Ajouter, réordonner ou supprimer les slides d'accueil.",
    },
    {
      href: "/admin/demandes",
      icon: Mail,
      title: "Demandes de rendez-vous",
      description: "Consulter les messages reçus via le formulaire contact.",
    },
    {
      href: "/admin/parametres",
      icon: Settings,
      title: "Paramètres",
      description: "Mode maintenance, mentions légales et configuration.",
    },
  ];

  return (
    <AdminShell title="Tableau de bord">
      <div className="kt-admin__dash-grid">
        <div className="kt-admin__stat">
          <span className="kt-admin__stat-icon kt-admin__stat-icon--red">
            <Mail size={18} />
          </span>
          <span className="kt-admin__stat-value">{unread}</span>
          <span className="kt-admin__stat-label">demande(s) non lue(s)</span>
        </div>
        <div className="kt-admin__stat">
          <span className="kt-admin__stat-icon kt-admin__stat-icon--gold">
            <PenLine size={18} />
          </span>
          <span className="kt-admin__stat-value">{hasDraft ? "Oui" : "Non"}</span>
          <span className="kt-admin__stat-label">brouillon en attente</span>
        </div>
        <div className="kt-admin__stat">
          <span className="kt-admin__stat-icon kt-admin__stat-icon--green">
            <Images size={18} />
          </span>
          <span className="kt-admin__stat-value">Manuel</span>
          <span className="kt-admin__stat-label">gestion des images via Git</span>
        </div>
      </div>

      <h2 className="kt-admin__title" style={{ fontSize: "1rem", marginBottom: "0.85rem" }}>
        Accès rapide
      </h2>
      <div className="kt-admin__quick-grid">
        {quickLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="kt-admin__quick-card">
              <h3>
                <Icon size={18} color="var(--green-700)" aria-hidden />
                {item.title}
              </h3>
              <p>{item.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="kt-admin__card" style={{ marginTop: "1.5rem" }}>
        <h2>Workflow de publication</h2>
        <p>
          <strong>1.</strong> Modifiez le contenu dans les sections — vos changements sont
          enregistrés en <em>brouillon</em>.
          <br />
          <strong>2.</strong> Cliquez <strong>Prévisualiser</strong> pour voir le résultat avant
          mise en ligne.
          <br />
          <strong>3.</strong> Cliquez <strong>Publier</strong> en haut à droite pour rendre les
          modifications visibles sur le site public.
        </p>
        <p className="kt-admin__hint">
          Images : cliquez <strong>Choisir une image</strong> sur les champs photo du backoffice.
          Les fichiers sont enregistrés dans <code>public/assets/uploads/</code>.
        </p>
      </div>
    </AdminShell>
  );
}
