import { redirect } from "next/navigation";
import { SitePage } from "@/components/site/site-page";
import { getDraftSiteContent } from "@/lib/content";
import { getAdminSession } from "@/lib/auth/guards";

export default async function AdminPreviewPage() {
  const session = await getAdminSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const content = await getDraftSiteContent();

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9999,
          background: "#f5e6a3",
          padding: "0.5rem 1rem",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "0.875rem",
        }}
      >
        Prévisualisation du brouillon — non visible par les visiteurs
      </div>
      <SitePage content={content} preview />
    </>
  );
}
