
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, ZoomIn, Volume2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const ThemeSettings = () => {
  const { themeMode, isReadAloudEnabled, setThemeMode, toggleReadAloud } = useTheme();

  return (
    <div className="fixed top-16 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 w-64">
      <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sun size={18} className="text-saf-orange" />
            <Label htmlFor="theme-light">Light Mode</Label>
          </div>
          <Switch 
            id="theme-light"
            checked={themeMode === 'light'}
            onCheckedChange={() => setThemeMode('light')}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Moon size={18} className="text-saf-indigo" />
            <Label htmlFor="theme-dark">Dark Mode</Label>
          </div>
          <Switch 
            id="theme-dark"
            checked={themeMode === 'dark'}
            onCheckedChange={() => setThemeMode('dark')}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ZoomIn size={18} className="text-saf-teal" />
            <Label htmlFor="high-contrast">High Contrast</Label>
          </div>
          <Switch 
            id="high-contrast"
            checked={themeMode === 'high-contrast'}
            onCheckedChange={() => setThemeMode('high-contrast')}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Volume2 size={18} className="text-saf-saffron" />
            <Label htmlFor="read-aloud">Read Aloud</Label>
          </div>
          <Switch 
            id="read-aloud"
            checked={isReadAloudEnabled}
            onCheckedChange={toggleReadAloud}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
