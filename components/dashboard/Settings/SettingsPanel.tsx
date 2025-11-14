"use client"
import React, { useState } from 'react'
import ToggleButton from '@/components/ui/ToggleButton'

interface SettingOption {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  onChange?: (enabled: boolean) => void;
}

interface SettingsPanelProps {
  settings: SettingOption[];
}

const SettingsPanel = ({ settings: initialSettings }: SettingsPanelProps) => {
  const [settings, setSettings] = useState<SettingOption[]>(initialSettings);

  const handleToggle = (id: string, enabled: boolean) => {
    setSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id
          ? { ...setting, enabled }
          : setting
      )
    );
    
    const setting = settings.find(s => s.id === id);
    if (setting) {
      setting.onChange?.(enabled);
    }
  };

  return (
    <div className="bg-white/5 rounded-xl w-full overflow-hidden relative backdrop-blur-xl border border-white/4">
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">Settings</h2>
        
        <div className="flex flex-col gap-4">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="flex items-start justify-between p-4 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex-1 pr-4">
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {setting.title}
                </h3>
                <p className="text-xs text-foreground/60">
                  {setting.description}
                </p>
              </div>
              
              <ToggleButton
                enabled={setting.enabled}
                onChange={(enabled) => handleToggle(setting.id, enabled)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;

