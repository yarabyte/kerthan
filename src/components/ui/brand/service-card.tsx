import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icon";

type ServiceTone = "green" | "gold" | "red";

export interface ServiceCardProps extends HTMLAttributes<HTMLElement> {
  icon?: IconName | string | ReactNode;
  title: string;
  description?: string;
  tone?: ServiceTone;
  href?: string;
  moreLabel?: string;
}

export function ServiceCard({
  icon = "stethoscope",
  title,
  description,
  tone = "green",
  href,
  moreLabel = "En savoir plus",
  className = "",
  ...rest
}: ServiceCardProps) {
  const cls = ["kt-service", `kt-service--${tone}`, href ? "kt-service--link" : "", className]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="kt-service__icon">
        {typeof icon === "string" ? <Icon name={icon} size={26} /> : icon}
      </span>
      <h3 className="kt-service__title">{title}</h3>
      {description && <p className="kt-service__desc">{description}</p>}
      {href && (
        <span className="kt-service__more">
          {moreLabel} <Icon name="arrow-right" size={15} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as object)}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={cls} {...rest}>
      {inner}
    </div>
  );
}
