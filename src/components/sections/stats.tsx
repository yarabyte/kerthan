import { StatCard } from "@/components/ui/brand";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { StatItem } from "@/lib/content-types";

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="kt-stats">
      <div className="kt-container">
        <ScrollReveal stagger className="kt-stats__row">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              tone={stat.tone}
              align="center"
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
