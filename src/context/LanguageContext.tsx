
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '@/utils/translations';

export type Language = 'en' | 'hi' | 'mr' | 'tu' | 'or';

interface LanguageContextType {
  language: Language; // Export language property for use in hooks
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
    
    // For RTL languages (if needed in the future)
    // document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language: currentLanguage, // Add language property for hooks
      currentLanguage, 
      setLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
