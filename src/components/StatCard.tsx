interface StatCardProps {
  label: string;
  value: number | string;
  trend?: string;
  trendTone?: 'success' | 'warning' | 'danger';
}

export function StatCard({ label, value, trend, trendTone = 'success' }: StatCardProps) {
  return (
    <div className="stat-card">
      <p className="stat-card__label">{label}</p>
      <p className="stat-card__value">{value}</p>
      {trend ? (
        <span className={`stat-card__trend stat-card__trend--${trendTone}`}>
          {trend}
        </span>
      ) : null}
    </div>
  );
}
