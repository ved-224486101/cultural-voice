
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Volunteer = () => {
  const { t } = useLanguage();
  
  // Volunteer opportunities (would be dynamic in a real app)
  const opportunities = [
    {
      title: 'Cultural Event Coordinator',
      location: 'Multiple Locations',
      commitment: '5-10 hours/week',
      description: 'Help organize and run cultural events and workshops'
    },
    {
      title: 'Teaching Assistant',
      location: 'Mumbai & Delhi',
      commitment: '3-8 hours/week',
      description: 'Assist in teaching traditional arts and language classes'
    },
    {
      title: 'Digital Content Creator',
      location: 'Remote',
      commitment: 'Flexible hours',
      description: 'Create content for our social media and website'
    }
  ];
  
  // Upcoming events (would be dynamic in a real app)
  const events = [
    {
      title: 'Diwali Celebration',
      date: '12 Nov 2023',
      location: 'Mumbai Cultural Center',
      image: 'https://images.unsplash.com/photo-1574355855543-3361ce2b8b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Sanskrit Language Workshop',
      date: '25 Oct 2023',
      location: 'Delhi Community Hall',
      image: 'https://images.unsplash.com/photo-1601911164256-78707acd237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];
  
  // Seva badges (would be dynamic in a real app)
  const badges = [
    { name: 'First Step', description: 'Complete your first volunteer activity', unlocked: true },
    { name: 'Team Player', description: 'Participate in 5 group events', unlocked: true },
    { name: 'Cultural Guide', description: 'Lead a workshop or tour', unlocked: false },
    { name: 'Dedicated Sevak', description: 'Volunteer for 100+ hours', unlocked: false }
  ];

  return (
    <div className="page-container">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">{t('volunteer.title')}</h1>
        <p className="text-xl text-gray-600 mb-6">{t('volunteer.subtitle')}</p>
        <Button className="bg-saf-orange hover:bg-saf-orange/90 text-white">
          {t('volunteer.join.now')}
        </Button>
      </section>
      
      {/* Opportunities Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('volunteer.opportunities')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{opportunity.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <MapPin size={14} className="mr-1" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={14} className="mr-1" />
                  <span>{opportunity.commitment}</span>
                </div>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <Button variant="outline" className="border-saf-orange text-saf-orange hover:bg-saf-orange/10 w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Seva Badges Section */}
      <section className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-6">{t('volunteer.seva.badge')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`text-center p-4 rounded-lg border ${badge.unlocked ? 'bg-white' : 'bg-gray-50 opacity-70'}`}
            >
              <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${badge.unlocked ? 'bg-saf-orange/10 text-saf-orange' : 'bg-gray-200 text-gray-400'}`}>
                {index + 1}
              </div>
              <h3 className="font-semibold">{badge.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
              {badge.unlocked && (
                <Badge variant="outline" className="mt-2 bg-saf-teal/10 text-saf-teal border-saf-teal/20">
                  Unlocked
                </Badge>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">{t('volunteer.upcoming.events')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={14} className="mr-1" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
