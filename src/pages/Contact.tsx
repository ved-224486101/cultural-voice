
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    console.log('Form submitted');
  };

  return (
    <div className="page-container">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{t('contact.title')}</h1>
        <p className="text-xl text-gray-600 mb-6">{t('contact.subtitle')}</p>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Form */}
        <section>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-6">
                <div>
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea id="message" rows={5} placeholder="How can we help you?" required />
                </div>
              </div>
              <Button type="submit" className="w-full bg-saf-orange hover:bg-saf-orange/90 text-white">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </section>
        
        {/* Contact Information */}
        <section>
          <div className="grid gap-6">
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 mt-1 bg-saf-orange/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-saf-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.address')}</h3>
                  <p className="text-gray-600">
                    123 Cultural Avenue, <br />
                    Heritage District, <br />
                    Mumbai 400001, <br />
                    Maharashtra, India
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 mt-1 bg-saf-orange/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-saf-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.email')}</h3>
                  <p className="text-gray-600">
                    info@shivaaradhya.org <br />
                    support@shivaaradhya.org
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 mt-1 bg-saf-orange/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-saf-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.phone')}</h3>
                  <p className="text-gray-600">
                    +91 22 1234 5678 <br />
                    +91 98765 43210 (WhatsApp)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
