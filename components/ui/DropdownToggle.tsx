"use client"
import React, { useState, useRef, useEffect } from 'react'
import { LucideIcon } from 'lucide-react'

interface DropdownItem {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  onClick?: () => void;
}

interface DropdownToggleProps {
  icon: LucideIcon;
  items: DropdownItem[];
  badgeCount?: number;
  className?: string;
  headerTitle?: string;
  tooltip?: string;
}

const DropdownToggle = ({ icon: Icon, items, badgeCount, className = "", headerTitle, tooltip }: DropdownToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        title={tooltip}
        className={`h-full px-3 py-2 rounded-sm cursor-pointer
        transition-all duration-300 text-md relative ${className}
        ${isOpen ? 'bg-white/10 text-foreground/50' : 'bg-white/0 text-foreground/30 hover:bg-white/10 hover:text-foreground/50'}`}
      >
        <Icon className="w-5 h-5 stroke-2" />
        {badgeCount && badgeCount > 0 && (
          <span className="absolute top-0 right-0 bg-tertiary text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
            {badgeCount > 9 ? '9+' : badgeCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[320px] bg-[#2d293f] backdrop-blur-xl rounded-lg border border-white/20 shadow-lg z-50 overflow-hidden">
          {headerTitle && (
            <div className="px-4 py-3 border-b border-white/10">
              <h3 className="text-sm font-semibold text-foreground">{headerTitle}</h3>
            </div>
          )}
          <div className="max-h-[400px] overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                className="px-4 py-3 hover:bg-white/10 transition-all duration-200 cursor-pointer border-b border-white/5 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                      {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 bg-tertiary/20 text-tertiary rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-foreground/60">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownToggle;

