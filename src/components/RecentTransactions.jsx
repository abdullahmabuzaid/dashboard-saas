import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

const transactions = [
  { id: 1, type: 'in', name: 'Premium Plan - Alex J.', amount: '+$599.00', date: '2 min ago', status: 'completed' },
  { id: 2, type: 'out', name: 'Server Infrastructure', amount: '-$1,200.00', date: '1 hour ago', status: 'pending' },
  { id: 3, type: 'in', name: 'Basic Plan - Sarah M.', amount: '+$99.00', date: '4 hours ago', status: 'completed' },
  { id: 4, type: 'in', name: 'Enterprise Custom', amount: '+$2,450.00', date: 'Yesterday', status: 'completed' },
  { id: 5, type: 'out', name: 'AWS Cloud Services', amount: '-$450.25', date: 'May 12, 2026', status: 'completed' },
];

export default function RecentTransactions() {
  return (
    <div className="bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden card-gradient flex flex-col h-full">
      <div className="p-6 border-b border-outline-variant/5 flex items-center justify-between">
        <h3 className="text-lg font-bold text-on-surface tracking-tight">Recent Activity</h3>
        <button className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">View All</button>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-3 text-left text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Transaction</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Amount</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Status</th>
              <th className="px-6 py-3 text-right text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-surface-container-high/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${t.type === 'in' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                      {t.type === 'in' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                    <span className="text-sm font-semibold text-on-surface">{t.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-sm font-medium text-on-surface">
                  {t.amount}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${t.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${t.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1.5 text-xs text-on-surface-variant">
                    <Clock className="w-3 h-3" />
                    {t.date}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
