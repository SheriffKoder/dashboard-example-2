"use client"
import React from 'react'

interface ToggleButtonProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ToggleButton = ({ 
  enabled, 
  onChange, 
  label,
  className = "",
  size = 'md'
}: ToggleButtonProps) => {
  const sizeClasses = {
    sm: 'h-5 w-9',
    md: 'h-6 w-11',
    lg: 'h-7 w-14'
  };

  const thumbSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const thumbTranslateClasses = {
    sm: enabled ? 'translate-x-5' : 'translate-x-0.5',
    md: enabled ? 'translate-x-6' : 'translate-x-1',
    lg: enabled ? 'translate-x-8' : 'translate-x-1'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-foreground cursor-pointer" onClick={() => onChange(!enabled)}>
          {label}
        </label>
      )}
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex ${sizeClasses[size]} items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2 focus:ring-offset-transparent ${
          enabled ? 'bg-tertiary' : 'bg-white/20'
        }`}
        role="switch"
        aria-checked={enabled}
        aria-label={label || 'Toggle'}
      >
        <span
          className={`inline-block ${thumbSizeClasses[size]} transform rounded-full bg-white transition-transform duration-300 ${thumbTranslateClasses[size]}`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;

