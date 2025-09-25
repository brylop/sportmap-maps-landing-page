interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl text-center p-4">
      <div className="text-2xl font-bold text-sport-primary mb-1">{value}</div>
      <div className="text-sport-text/70 text-sm">{label}</div>
    </div>
  );
}