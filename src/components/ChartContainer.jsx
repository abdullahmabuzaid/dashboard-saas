import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export default function ChartContainer({ title, subtitle, children }) {
  return (
    <div className="bg-surface-container rounded-2xl border border-outline-variant/10 flex flex-col h-full card-gradient">
      <div className="p-6 flex items-center justify-between border-b border-outline-variant/5">
        <div>
          <h3 className="text-lg font-bold text-on-surface tracking-tight">{title}</h3>
          <p className="text-sm text-on-surface-variant">{subtitle}</p>
        </div>
        <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 p-6 flex flex-col relative min-h-[300px]">
        {children || (
          <div className="flex-1 flex flex-col justify-end gap-2">
            <div className="flex items-end justify-between h-48 gap-3">
              {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95, 75, 55].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-lg relative group"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest px-2 py-1 rounded text-[10px] transition-opacity whitespace-nowrap border border-outline-variant/20">
                    ${h}k
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-tighter mt-4">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
