// Settings configuration data

export interface SettingOption {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  onChange?: (enabled: boolean) => void;
}

export const settingsData: SettingOption[] = [
  {
    id: 'notifications',
    title: 'Email Notifications',
    description: 'Receive email alerts for price changes and portfolio updates',
    enabled: true,
    onChange: (enabled) => console.log('Email notifications:', enabled),
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode',
    description: 'Enable dark theme for better viewing in low light conditions',
    enabled: true,
    onChange: (enabled) => console.log('Dark mode:', enabled),
  },
  {
    id: 'auto-refresh',
    title: 'Auto Refresh Data',
    description: 'Automatically update dashboard data every 30 seconds',
    enabled: false,
    onChange: (enabled) => console.log('Auto refresh:', enabled),
  },
  {
    id: 'analytics',
    title: 'Analytics Tracking',
    description: 'Allow collection of usage analytics to improve the dashboard',
    enabled: true,
    onChange: (enabled) => console.log('Analytics:', enabled),
  },
];

