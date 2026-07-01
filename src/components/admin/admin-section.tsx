import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AdminSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AdminSection({ title, description, children, defaultOpen }: AdminSectionProps) {
  return (
    <details className="kt-admin__section" open={defaultOpen}>
      <summary className="kt-admin__section-head">
        <span>
          <strong>{title}</strong>
          {description && <small>{description}</small>}
        </span>
        <ChevronDown size={18} className="kt-admin__section-chevron" aria-hidden />
      </summary>
      <div className="kt-admin__section-body">{children}</div>
    </details>
  );
}
