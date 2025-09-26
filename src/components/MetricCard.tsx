interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl text-center p-3 sm:p-4">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-sport-primary mb-1">{value}</div>
      <div className="text-sport-text/70 text-xs sm:text-sm md:text-base">{label}</div>
    </div>
  );
}