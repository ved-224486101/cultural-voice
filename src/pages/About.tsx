
import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useReadAloud } from '@/hooks/use-read-aloud';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, BookOpen } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const About = () => {
  const { t } = useLanguage();
  const { themeMode } = useTheme();
  const historyRef = useRef<HTMLDivElement>(null);
  
  // Use read aloud for history section
  useReadAloud(historyRef, "Founded in 2010, the Shiva Aradhya Foundation began as a small group of dedicated individuals committed to preserving Indian cultural heritage. What started as local cultural workshops has grown into a nationwide movement with centers across multiple states. Our journey has been guided by the principles of respect for tradition, service to community, and adaptation to changing times. Today, we work at the intersection of cultural preservation and modern education, creating innovative programs that make ancient wisdom accessible to new generations.");
  
  // Team members with updated information
  const teamMembers = [
    {
      name: 'Balaji Rode',
      role: 'Leader',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Ved Raut',
      role: 'Member',
      image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
      name: 'Shubham Shetty',
      role: 'Member',
      image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
      name: 'Rahul Tarai',
      role: 'Member',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  ];
  
  // Our values (would be dynamic in a real app)
  const values = [
    {
      title: 'Cultural Preservation',
      description: 'Safeguarding traditional arts, languages and practices',
      icon: <BookOpen className="h-6 w-6 text-saf-teal" />
    },
    {
      title: 'Community Service',
      description: 'Supporting those in need through compassionate seva',
      icon: <Heart className="h-6 w-6 text-saf-orange" />
    },
    {
      title: 'Educational Excellence',
      description: 'Promoting knowledge and wisdom through quality education',
      icon: <Award className="h-6 w-6 text-saf-indigo" />
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
    <div className="page-container">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-saf-orange to-saf-rust bg-clip-text text-transparent">{t('about.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{t('about.subtitle')}</p>
      </section>
      
      {/* History Section with texture and artistic placement */}
      <section className="mb-12" ref={historyRef}>
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.history')}</h2>
        <div className={`rounded-2xl shadow-sm ${getCardBg()} p-6 relative overflow-hidden transform transition-all duration-300 hover:shadow-md`}>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-saf-orange/10 z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-saf-teal/10 z-0"></div>
          
          <div className="relative z-10">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Founded in 2010, the Shiva Aradhya Foundation began as a small group of dedicated individuals committed to preserving Indian cultural heritage. What started as local cultural workshops has grown into a nationwide movement with centers across multiple states.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our journey has been guided by the principles of respect for tradition, service to community, and adaptation to changing times. Today, we work at the intersection of cultural preservation and modern education, creating innovative programs that make ancient wisdom accessible to new generations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section with enhanced styling */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.values')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const valueRef = useRef<HTMLDivElement>(null);
            useReadAloud(valueRef, `${value.title}. ${value.description}`);
            
            return (
              <Card 
                key={index} 
                ref={valueRef}
                className={`border transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in overflow-hidden`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 z-0"></div>
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-background to-secondary">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      
      {/* Team Section with artistic placement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.team')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => {
            const memberRef = useRef<HTMLDivElement>(null);
            useReadAloud(memberRef, `${member.name}, ${member.role}`);
            
            return (
              <div 
                key={index} 
                ref={memberRef}
                className="text-center team-member-card animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 mx-auto mb-3 overflow-hidden team-member-image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
