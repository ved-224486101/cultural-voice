
import React, { ReactNode, useState } from 'react';
import Navigation from './Navigation';
import VoiceControl from './VoiceControl';
import LanguageSelector from './LanguageSelector';
import ThemeSettings from './ThemeSettings';
import { useIsMobile } from '@/hooks/use-mobile';
import { Settings } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const [showSettings, setShowSettings] = useState(false);
  const { themeMode } = useTheme();

  // Define theme-based pattern classes
  const getPatternClass = () => {
    switch (themeMode) {
      case 'dark':
        return 'dark-pattern';
      case 'high-contrast':
        return 'high-contrast-pattern';
      default:
        return 'rangoli-pattern';
    }
  };

  return (
    <div className={`min-h-screen ${getPatternClass()} transition-colors duration-300`}>
      <header className="sticky top-0 z-30 w-full backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/971eb36e-63fb-4676-a953-4fadd22545c9.png" 
              alt="Shiva Aradhya Logo" 
              className="w-8 h-8"
            />
            {!isMobile && (
              <h1 className="text-xl font-semibold">Shiva Aradhya</h1>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Accessibility Settings"
            >
              <Settings size={20} className="text-saf-indigo" />
            </button>
          </div>
        </div>
      </header>
      
      {showSettings && <ThemeSettings />}
      
      <main className="transition-colors duration-300">
        {children}
      </main>
      
      <VoiceControl />
      <Navigation />
    </div>
  );
};

export default Layout;
