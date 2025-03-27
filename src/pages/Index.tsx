
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();

  // Recent activities data (would be dynamic in a real app)
  const activities = [
    {
      id: 1,
      title: 'Cultural Workshop',
      date: '15 Sep 2023',
      participants: '45+',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Yoga & Meditation Camp',
      date: '28 Aug 2023',
      participants: '120+',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Heritage Preservation Drive',
      date: '10 Aug 2023',
      participants: '65+',
      image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="page-container sacred-geometry-bg">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">{t('home.welcome')}</h1>
        <p className="text-xl text-gray-600 mb-8">{t('home.subtitle')}</p>
        
        <div className="max-w-3xl mx-auto mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3">{t('home.mission')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('home.mission.text')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Button asChild className="bg-saf-orange hover:bg-saf-orange/90 text-white py-6">
            <Link to="/volunteer">
              {t('home.join.us')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-saf-orange text-saf-orange hover:bg-saf-orange/10 py-6">
            <Link to="/about">
              {t('home.learn.more')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Recent Activities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('home.recent.activities')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users size={14} className="mr-1" />
                  <span>{activity.participants} participants</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
