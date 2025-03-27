
import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import VoiceControl from './VoiceControl';
import LanguageSelector from './LanguageSelector';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 rangoli-pattern">
      <header className="sticky top-0 z-30 w-full bg-white/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/971eb36e-63fb-4676-a953-4fadd22545c9.png" 
              alt="Shiva Aradhya Logo" 
              className="w-8 h-8"
            />
            {!isMobile && (
              <h1 className="text-xl font-semibold text-gray-900">Shiva Aradhya</h1>
            )}
          </div>
          <LanguageSelector />
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <VoiceControl />
      <Navigation />
    </div>
  );
};

export default Layout;
