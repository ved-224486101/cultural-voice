
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
        return 'bg-gradient-to-br from-gray-900 to-saf-deepblue pattern-grid-lg pattern-slate-800 pattern-opacity-10 pattern-offset-x-2 pattern-offset-y-2';
      case 'high-contrast':
        return 'bg-black pattern-zigzag-lg pattern-yellow-500 pattern-opacity-5 pattern-offset-x-2 pattern-offset-y-1';
      default:
        return 'bg-gradient-to-br from-saf-offwhite to-white pattern-topography-lg pattern-saf-ochre pattern-opacity-5';
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
