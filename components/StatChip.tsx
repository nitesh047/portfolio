export default function StatChip({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bracket-frame px-4 py-3 bg-surface border hairline rounded-sm">
      <span className="bracket-tr" />
      <span className="bracket-br" />
      <div className="stat-value text-lg text-ink leading-none">{value}</div>
      <div className="eyebrow mt-1.5">{label}</div>
    </div>
  );
}
