"use client";

import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  CreditCard,
  Layers,
  HelpCircle,
  LogOut,
  Sparkles,
  X
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/', active: true },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: Users, label: 'Customers', href: '#' },
  { icon: CreditCard, label: 'Transactions', href: '#' },
  { icon: Layers, label: 'Reports', href: '#' },
];

const secondaryNavItems = [
  { icon: Settings, label: 'Settings', href: '#' },
  { icon: HelpCircle, label: 'Help Center', href: '#' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      <aside className={`fixed top-0 left-0 z-[70] h-full w-64 bg-surface-container-lowest border-r border-outline-variant/10 flex flex-col transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="p-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
              <Sparkles className="text-primary w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-on-surface tracking-tight">Dashboard</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto" aria-label="Main Navigation">
          <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-[0.15em] mb-4 ml-2">
            Main Menu
          </div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={`Go to ${item.label}`}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${item.active
                ? 'bg-primary/10 text-primary'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              onClick={() => { if (window.innerWidth < 1024) onClose(); }}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface'}`} aria-hidden="true" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}

          <div className="pt-8 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-[0.15em] mb-4 ml-2">
            Configuration
          </div>
          {secondaryNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={`Go to ${item.label}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 group"
              onClick={() => { if (window.innerWidth < 1024) onClose(); }}
            >
              <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-on-surface" aria-hidden="true" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-surface-container-high/50 rounded-2xl p-4 border border-outline-variant/5 mb-4">
            <div className="text-xs font-semibold text-primary uppercase mb-1">pro plan</div>
            <div className="text-sm text-on-surface font-medium mb-3">Unlimited Analytics</div>
            <button
              aria-label="Upgrade to Pro Plan"
              className="w-full py-2 bg-primary text-on-primary rounded-xl text-xs font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10"
            >
              Upgrade Now
            </button>
          </div>

          <button
            aria-label="Sign Out"
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-on-surface-variant hover:bg-rose-500/10 hover:text-rose-500 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
