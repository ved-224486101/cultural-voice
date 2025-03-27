
import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import readAloudService from '@/utils/readAloud';

// Map language codes to speech synthesis language codes
const languageMap: Record<string, string> = {
  en: 'en-US',
  hi: 'hi-IN',
  mr: 'mr-IN',
  or: 'or-IN',
  // For Tulu, we might need to fallback to another Indian language
  // as it might not be directly supported by speech synthesis
  tu: 'kn-IN' 
};

export const useReadAloud = (elementRef: React.RefObject<HTMLElement>, text: string) => {
  const { isReadAloudEnabled } = useTheme();
  const { language } = useLanguage();
  const wasEnabledRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleFocus = () => {
      if (isReadAloudEnabled) {
        element.classList.add('read-aloud-focus');
        const langCode = languageMap[language] || 'en-US';
        readAloudService.speak(text, langCode);
      }
    };

    const handleBlur = () => {
      element.classList.remove('read-aloud-focus');
      if (isReadAloudEnabled) {
        readAloudService.stop();
      }
    };

    // Add event listeners for focus/hover based reading
    element.addEventListener('mouseenter', handleFocus);
    element.addEventListener('mouseleave', handleBlur);
    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);

    // Cleanup
    return () => {
      element.removeEventListener('mouseenter', handleFocus);
      element.removeEventListener('mouseleave', handleBlur);
      element.removeEventListener('focus', handleFocus);
      element.removeEventListener('blur', handleBlur);
      readAloudService.stop();
    };
  }, [isReadAloudEnabled, text, language, elementRef]);

  // For automatic reading of new content when navigating
  useEffect(() => {
    if (isReadAloudEnabled && !wasEnabledRef.current) {
      const langCode = languageMap[language] || 'en-US';
      readAloudService.speak(text, langCode);
    }
    
    wasEnabledRef.current = isReadAloudEnabled;
    
    return () => {
      if (isReadAloudEnabled) {
        readAloudService.stop();
      }
    };
  }, [isReadAloudEnabled, language, text]);
};
