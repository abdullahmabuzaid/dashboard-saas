'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import StatCard from '@/components/StatCard';
import ChartContainer from '@/components/ChartContainer';
import RecentTransactions from '@/components/RecentTransactions';
import {
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  ArrowUpRight,
  Download
} from 'lucide-react';
import dynamic from 'next/dynamic';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // تحميل المكون ديناميكياً مع تعطيل SSR له
  const BarChart = dynamic(() => import('../components/BarChart'), {
    ssr: false,
  });

  return (
    <div className="flex h-full min-h-screen bg-surface overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {/* Header Section */}
          <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8" aria-labelledby="dashboard-title">
            <div>
              <h1 id="dashboard-title" className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight mb-1">Project Overview</h1>
              <p className="text-on-surface-variant flex items-center gap-2 text-sm md:text-base">
                Monitor performance
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                  Live
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="Export dashboard data"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-surface-container border border-outline-variant/10 text-xs md:text-sm font-semibold hover:bg-surface-container-high transition-all text-on-surface"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Export
              </button>
              <button
                aria-label="Generate new report"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary text-xs md:text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Report
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8" aria-label="Quick Statistics">
            <h2 className="sr-only">Quick Statistics</h2>
            <StatCard
              title="Total Revenue"
              value="$124,592.00"
              trend="up"
              trendValue={12.5}
              icon={DollarSign}
              color={{ main: 'bg-primary', bg: 'bg-primary', text: 'text-primary' }}
            />
            <StatCard
              title="Active Users"
              value="42,891"
              trend="up"
              trendValue={8.2}
              icon={Users}
              color={{ main: 'bg-secondary', bg: 'bg-secondary', text: 'text-secondary' }}
            />
            <StatCard
              title="Total Orders"
              value="1,205"
              trend="down"
              trendValue={3.1}
              icon={ShoppingCart}
              color={{ main: 'bg-tertiary', bg: 'bg-tertiary', text: 'text-tertiary' }}
            />
            <StatCard
              title="Conversion Rate"
              value="4.82%"
              trend="up"
              trendValue={2.4}
              icon={Activity}
              color={{ main: 'bg-emerald-500', bg: 'bg-emerald-500', text: 'text-emerald-500' }}
            />
          </section>

          {/* Analytics & Transactions */}
          <section className="grid grid-cols-1 gap-6 mb-8" aria-label="Detailed Analytics">
            <h2 className="sr-only">Detailed Analytics and Transactions</h2>
            <div>
              <ChartContainer
                title="Revenue Growth"
                subtitle="Last 12 months"
              >
                <BarChart />
              </ChartContainer>
            </div>
            <div>
              <RecentTransactions />
            </div>
          </section>

          {/* Secondary Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6" aria-label="System Performance and Distribution">
            <h2 className="sr-only">System Performance and User Distribution</h2>
            <ChartContainer
              title="User Distribution"
              subtitle="Breakdown by region"
            >
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-xl border-outline-variant/10 relative flex items-center justify-center" role="img" aria-label="User distribution chart showing 82% retention">
                  <div className="absolute inset-0 rounded-full border-xl border-primary border-r-transparent border-b-transparent -rotate-45" />
                  <div className="absolute inset-0 rounded-full border-xl border-secondary border-l-transparent border-t-transparent rotate-12" />
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-on-surface">82%</div>
                    <div className="text-[8px] md:text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Retention</div>
                  </div>
                </div>
              </div>
            </ChartContainer>

            <article className="bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant/10 flex flex-col justify-center items-center text-center card-gradient">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                <Activity className="w-6 h-6 md:w-8 md:h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-on-surface mb-2">System Performance</h3>
              <p className="text-on-surface-variant text-xs md:text-sm max-w-xs mb-6">
                Peak efficiency. All services operational.
              </p>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-500 text-xs md:text-sm font-bold border border-emerald-500/20"
                role="status"
                aria-live="polite"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                99.9% Uptime
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
