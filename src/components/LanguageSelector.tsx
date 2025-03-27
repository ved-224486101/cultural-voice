
import React, { useState } from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
    { code: 'tu', name: 'ತುಳು' },
    { code: 'or', name: 'ଓଡ଼ିଆ' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 shadow-sm text-sm text-gray-700 border border-gray-200"
          aria-label="Select language"
        >
          <Globe size={16} />
          <span className="font-medium hidden md:inline">{t('language.name')}</span>
          <ChevronDown size={14} className="opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-white/90 backdrop-blur-lg border border-gray-200">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center justify-between ${currentLanguage === lang.code ? 'bg-gray-100' : ''}`}
            onClick={() => setLanguage(lang.code)}
          >
            <span>{lang.name}</span>
            {currentLanguage === lang.code && <Check size={16} className="text-saf-orange" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
