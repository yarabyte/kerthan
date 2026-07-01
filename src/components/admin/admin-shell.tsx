"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { AdminNav } from "@/components/admin/admin-nav";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import "@/styles/admin.css";

interface AdminShellProps {
  children: ReactNode;
  title: string;
  wide?: boolean;
}

export function AdminShell({ children, title, wide }: AdminShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="kt-admin">
      <AdminNav mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="kt-admin__workspace">
        <AdminTopbar title={title} onMenuOpen={() => setMobileOpen(true)} />
        <main className={`kt-admin__main${wide ? " kt-admin__main--wide" : ""}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
