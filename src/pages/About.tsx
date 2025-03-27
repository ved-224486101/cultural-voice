
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, BookOpen } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  
  // Team members data (would be dynamic in a real app)
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & President',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Ananya Sharma',
      role: 'Cultural Director',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Vikram Singh',
      role: 'Outreach Coordinator',
      image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'Education Lead',
      image: 'https://randomuser.me/api/portraits/women/26.jpg'
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

  return (
    <div className="page-container">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">{t('about.title')}</h1>
        <p className="text-xl text-gray-600 mb-6">{t('about.subtitle')}</p>
      </section>
      
      {/* History Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.history')}</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2010, the Shiva Aradhya Foundation began as a small group of dedicated individuals committed to preserving Indian cultural heritage. What started as local cultural workshops has grown into a nationwide movement with centers across multiple states.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our journey has been guided by the principles of respect for tradition, service to community, and adaptation to changing times. Today, we work at the intersection of cultural preservation and modern education, creating innovative programs that make ancient wisdom accessible to new generations.
          </p>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.values')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border border-gray-100 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.team')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-saf-orange p-1">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover" 
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
