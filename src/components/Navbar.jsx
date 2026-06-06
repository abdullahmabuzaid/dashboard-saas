import { Search, Bell, ChevronDown, User, Menu } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
  return (
    <header className="h-20 border-b border-outline-variant/10 bg-surface/50 backdrop-blur-xl sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="lg:hidden p-2 rounded-xl bg-surface-container-low border border-outline-variant/10 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>

        <div className="flex-1 max-w-xl hidden sm:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary transition-colors" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search analytics..."
              aria-label="Search analytics"
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          aria-label="View notifications"
          className="relative p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
        >
          <Bell className="w-5 h-5" aria-hidden="true" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-surface shadow-[0_0_8px_rgba(207,188,255,0.6)]" />
        </button>

        <button 
          aria-label="User profile menu"
          className="flex items-center gap-3 p-1.5 pr-1.5 md:pr-3 rounded-xl hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant/10 group"
        >
          <div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center overflow-hidden">
            <User className="text-secondary w-5 h-5" aria-hidden="true" />
          </div>
          <div className="text-left hidden md:block">
            <div className="text-xs font-bold text-on-surface">Alex Thompson</div>
            <div className="text-[10px] text-on-surface-variant">Administrator</div>
          </div>
          <ChevronDown className="w-4 h-4 text-on-surface-variant group-hover:text-on-surface transition-colors hidden md:block" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
