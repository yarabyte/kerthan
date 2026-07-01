import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icon";

type ContactTone = "green" | "gold" | "light";

export interface ContactItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconName | string | ReactNode;
  label?: string;
  value: string;
  href?: string;
  tone?: ContactTone;
}

export function ContactItem({
  icon = "phone",
  label,
  value,
  href,
  tone = "green",
  className = "",
  ...rest
}: ContactItemProps) {
  const cls = ["kt-contact", `kt-contact--${tone}`, className].filter(Boolean).join(" ");

  return (
    <div className={cls} {...rest}>
      <span className="kt-contact__icon">
        {typeof icon === "string" ? <Icon name={icon} size={20} /> : icon}
      </span>
      <div>
        {label && <p className="kt-contact__label">{label}</p>}
        {href ? (
          <Link className="kt-contact__value" href={href}>
            {value}
          </Link>
        ) : (
          <p className="kt-contact__value">{value}</p>
        )}
      </div>
    </div>
  );
}
