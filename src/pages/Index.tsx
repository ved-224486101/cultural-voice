
import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useReadAloud } from '@/hooks/use-read-aloud';
import { ArrowRight, Calendar, Users, BookOpen, Paintbrush, AlignJustify } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();
  const { themeMode } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Use read aloud for hero section
  useReadAloud(heroRef, t('home.welcome') + ' ' + t('home.subtitle') + ' ' + t('home.mission.text'));

  // Recent activities data (would be dynamic in a real app)
  const activities = [
    {
      id: 1,
      title: 'Cultural Workshop',
      date: '15 Sep 2023',
      participants: '45+',
      icon: <Paintbrush size={24} />,
      description: 'An immersive workshop on traditional art forms led by master artisans. Participants learned techniques of Madhubani painting and created their own artworks.'
    },
    {
      id: 2,
      title: 'Yoga & Meditation Camp',
      date: '28 Aug 2023',
      participants: '120+',
      icon: <AlignJustify size={24} />,
      description: 'A three-day retreat focusing on ancient yoga practices and meditation techniques. Participants experienced the profound benefits of mindfulness and proper breathing.'
    },
    {
      id: 3,
      title: 'Heritage Preservation Drive',
      date: '10 Aug 2023',
      participants: '65+',
      icon: <BookOpen size={24} />,
      description: 'A community initiative to document and preserve local cultural heritage. Volunteers collected oral histories from elders and helped restore a historical temple.'
    }
  ];

  // Card background based on theme
  const getCardBg = () => {
    switch (themeMode) {
      case 'dark':
        return 'bg-gray-800/80 backdrop-blur-sm border-gray-700';
      case 'high-contrast':
        return 'bg-black border-yellow-400 text-white';
      default:
        return 'bg-white/80 backdrop-blur-sm border-gray-100';
    }
  };

  return (
    <div className="page-container sacred-geometry-bg">
      {/* Hero Section with enhanced styling */}
      <section className="mb-12 text-center" ref={heroRef}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-saf-orange to-saf-rust bg-clip-text text-transparent">
            {t('home.welcome')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-mukta">
            {t('home.subtitle')}
          </p>
          
          <div className={`max-w-3xl mx-auto mb-8 p-6 rounded-2xl shadow-sm ${getCardBg()} transform hover:scale-102 transition-all duration-300`}>
            <h2 className="text-2xl font-semibold mb-3">{t('home.mission')}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('home.mission.text')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button asChild className="py-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              <Link to="/volunteer">
                {t('home.join.us')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 py-6 shadow-sm hover:shadow-md transition-all duration-300">
              <Link to="/about">
                {t('home.learn.more')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Recent Activities with new design */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('home.recent.activities')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const activityRef = useRef<HTMLDivElement>(null);
            useReadAloud(activityRef, `${activity.title}. ${activity.description} Held on ${activity.date} with ${activity.participants} participants.`);
            
            return (
              <div 
                key={activity.id} 
                ref={activityRef}
                className="activity-card float-animation" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="activity-icon">
                  {activity.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {activity.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Users size={14} className="mr-1" />
                  <span>{activity.participants} participants</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;
