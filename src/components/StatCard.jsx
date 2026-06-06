import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ title, value, trend, trendValue, icon: Icon, color }) {
  const isPositive = trend === 'up';

  return (
    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 card-gradient hover:border-primary/20 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 rounded-xl ${color.text} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
          }`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trendValue}%
        </div>
      </div>

      <div>
        <div className="text-sm font-medium text-on-surface-variant mb-1 uppercase tracking-wider">{title}</div>
        <div className="text-2xl font-bold text-on-surface font-mono tracking-tight">{value}</div>
      </div>

      <div className="mt-4 w-full bg-surface-container-lowest h-1 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color.main}`}
          style={{ width: `${Math.min(trendValue * 2, 100)}%` }}
        />
      </div>
    </div>
  );
}
