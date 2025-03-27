
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Home, Info, Heart, Gift, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: t('nav.about'), path: '/about', icon: Info },
    { name: t('nav.volunteer'), path: '/volunteer', icon: Heart },
    { name: t('nav.donate'), path: '/donate', icon: Gift },
    { name: t('nav.contact'), path: '/contact', icon: MessageCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-lg z-40">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
          >
            <item.icon size={24} className={isActive(item.path) ? 'text-saf-orange' : 'text-gray-500'} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
