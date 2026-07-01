export function AdminLoading({ label = "Chargement…" }: { label?: string }) {
  return (
    <div className="kt-admin__loading">
      <span className="kt-admin__spinner" aria-hidden />
      {label}
    </div>
  );
}
