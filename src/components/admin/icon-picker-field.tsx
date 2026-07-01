"use client";

import { useMemo, useState } from "react";
import type { IconCategory } from "@/lib/icons";
import { PICKER_ICONS } from "@/lib/icons";

interface IconPickerFieldProps {
  label: string;
  value: string;
  onChange: (iconId: string) => void;
}

type Filter = "all" | IconCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "medical", label: "Médicales" },
  { id: "classic", label: "Classiques" },
];

export function IconPickerField({ label, value, onChange }: IconPickerFieldProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? PICKER_ICONS
        : PICKER_ICONS.filter((item) => item.category === filter),
    [filter],
  );

  const selected = PICKER_ICONS.find((item) => item.id === value);

  return (
    <div className="kt-admin__field kt-icon-picker">
      <label>{label}</label>
      {selected && (
        <p className="kt-icon-picker__current">
          Sélection : <strong>{selected.label}</strong>
        </p>
      )}

      <div className="kt-icon-picker__filters" role="tablist" aria-label="Filtrer les icônes">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={`kt-icon-picker__filter${filter === item.id ? " is-active" : ""}`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="kt-icon-picker__grid" role="listbox" aria-label={label}>
        {visible.map((item) => {
          const Icon = item.icon;
          const isActive = value === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="option"
              aria-selected={isActive}
              title={item.label}
              className={`kt-icon-picker__btn${isActive ? " is-active" : ""}`}
              onClick={() => onChange(item.id)}
            >
              <Icon size={22} strokeWidth={1.75} aria-hidden />
              <span className="kt-icon-picker__label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
