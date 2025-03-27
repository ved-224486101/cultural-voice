
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark' | 'high-contrast';

interface ThemeContextType {
  themeMode: ThemeMode;
  isReadAloudEnabled: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleReadAloud: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [isReadAloudEnabled, setIsReadAloudEnabled] = useState(false);

  // Apply theme class to document when theme changes
  useEffect(() => {
    document.documentElement.classList.remove('light-mode', 'dark-mode', 'high-contrast-mode');
    document.documentElement.classList.add(`${themeMode}-mode`);
  }, [themeMode]);

  const toggleReadAloud = () => {
    setIsReadAloudEnabled(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ 
      themeMode, 
      isReadAloudEnabled, 
      setThemeMode, 
      toggleReadAloud
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
