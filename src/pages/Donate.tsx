
import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useReadAloud } from '@/hooks/use-read-aloud';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Heart, Shield, FileText, CreditCard, Gift, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Donate = () => {
  const { t } = useLanguage();
  const { themeMode } = useTheme();
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  useReadAloud(titleRef, t('donate.title') + ' - ' + t('donate.subtitle'));
  
  const impactRef = useRef<HTMLDivElement>(null);
  useReadAloud(impactRef, t('donate.impact.title') + ' - ' + t('donate.impact.description'));
  
  const handleDonate = () => {
    // In a real app, this would process the payment
    setShowConfirmation(true);
    toast({
      title: t('donate.thank.you'),
      description: `${t('donate.amount')}: ₹${finalAmount.toLocaleString('en-IN')}`,
    });
    setTimeout(() => {
      setShowConfirmation(false);
      // Navigate back to home after successful donation
      // navigate('/');
    }, 3000);
  };
  
  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  // Function to get card styling based on theme
  const getCardStyle = (isSelected: boolean) => {
    let baseStyle = "transition-all duration-300 h-full";
    
    if (isSelected) {
      switch (themeMode) {
        case 'dark':
          return `${baseStyle} bg-saf-indigo/20 border-saf-saffron ring-2 ring-saf-saffron`;
        case 'high-contrast':
          return `${baseStyle} bg-black border-yellow-400 text-white ring-2 ring-yellow-400`;
        default:
          return `${baseStyle} bg-white border-saf-orange ring-2 ring-saf-orange`;
      }
    } else {
      switch (themeMode) {
        case 'dark':
          return `${baseStyle} bg-gray-800 border-gray-700 hover:border-saf-saffron`;
        case 'high-contrast':
          return `${baseStyle} bg-black border-gray-600 text-white hover:border-yellow-400`;
        default:
          return `${baseStyle} bg-white border-gray-200 hover:border-saf-orange`;
      }
    }
  };

  return (
    <div className="page-container">
      <section className="mb-8 text-center max-w-3xl mx-auto">
        <h1 ref={titleRef} className="text-4xl font-bold mb-2 bg-gradient-to-r from-saf-orange to-saf-rust bg-clip-text text-transparent">{t('donate.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t('donate.subtitle')}</p>
        
        {/* Impact section */}
        <div ref={impactRef} className="mb-8 p-6 rounded-xl bg-gradient-to-r from-saf-ochre/10 to-saf-saffron/10 dark:from-saf-ochre/20 dark:to-saf-indigo/20">
          <h2 className="text-2xl font-semibold mb-2">{t('donate.impact.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t('donate.impact.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
              <Shield className="text-saf-teal" size={20} />
              <span>{t('donate.secure.payment')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
              <FileText className="text-saf-indigo" size={20} />
              <span>{t('donate.tax.deductible')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
              <Heart className="text-saf-orange" size={20} />
              <span>{t('donate.impact')}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Type Toggle */}
      <section className="mb-8 max-w-md mx-auto">
        <div className="flex items-center justify-center space-x-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm">
          <div className="flex items-center space-x-3">
            <CreditCard size={18} className="text-saf-indigo" />
            <Label>{t('donate.one.time')}</Label>
            <Switch 
              checked={donationType === 'monthly'}
              onCheckedChange={(checked) => setDonationType(checked ? 'monthly' : 'one-time')}
            />
            <Label>{t('donate.monthly')}</Label>
            <Gift size={18} className="text-saf-saffron" />
          </div>
        </div>
      </section>
      
      {/* Donation Cards */}
      <section className="mb-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Small Donation */}
          <Card 
            className={getCardStyle(selectedAmount === 1000)}
            onClick={() => {
              setSelectedAmount(1000);
              setCustomAmount('');
            }}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {t('donate.card.small')}
                {selectedAmount === 1000 && (
                  <span className="text-saf-orange bg-saf-orange/10 p-1 rounded-full">
                    <Check size={16} />
                  </span>
                )}
              </CardTitle>
              <CardDescription>{donationType === 'monthly' ? t('donate.monthly') : t('donate.one.time')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{t('donate.card.small.impact')}</p>
            </CardContent>
          </Card>
          
          {/* Medium Donation */}
          <Card 
            className={`${getCardStyle(selectedAmount === 5000)} relative`}
            onClick={() => {
              setSelectedAmount(5000);
              setCustomAmount('');
            }}
          >
            <div className="absolute -top-2 -right-2">
              <span className="bg-saf-orange text-white text-xs px-2 py-1 rounded-full flex items-center">
                <Star size={12} className="mr-1" />
                {t('donate.popular.choice')}
              </span>
            </div>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {t('donate.card.medium')}
                {selectedAmount === 5000 && (
                  <span className="text-saf-orange bg-saf-orange/10 p-1 rounded-full">
                    <Check size={16} />
                  </span>
                )}
              </CardTitle>
              <CardDescription>{donationType === 'monthly' ? t('donate.monthly') : t('donate.one.time')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{t('donate.card.medium.impact')}</p>
            </CardContent>
          </Card>
          
          {/* Large Donation */}
          <Card 
            className={getCardStyle(selectedAmount === 10000)}
            onClick={() => {
              setSelectedAmount(10000);
              setCustomAmount('');
            }}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {t('donate.card.large')}
                {selectedAmount === 10000 && (
                  <span className="text-saf-orange bg-saf-orange/10 p-1 rounded-full">
                    <Check size={16} />
                  </span>
                )}
              </CardTitle>
              <CardDescription>{donationType === 'monthly' ? t('donate.monthly') : t('donate.one.time')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{t('donate.card.large.impact')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Custom Amount */}
      <section className="mb-10 max-w-md mx-auto">
        <Card className={`${getCardStyle(selectedAmount === null && customAmount !== '')}`}>
          <CardHeader>
            <CardTitle>{t('donate.custom.amount')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-xl mr-2">₹</span>
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="text-lg"
              />
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Donation Summary & Button */}
      <section className="mb-12 text-center max-w-md mx-auto">
        <Card className="bg-gradient-to-r from-saf-ochre/5 to-saf-saffron/5 dark:from-saf-indigo/10 dark:to-saf-saffron/10 border-0">
          <CardHeader>
            <CardTitle>
              {donationType === 'one-time' ? t('donate.one.time') : t('donate.monthly')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-saf-orange">
              ₹{finalAmount.toLocaleString('en-IN')}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              onClick={handleDonate}
              disabled={!finalAmount}
              className="w-full py-6 text-lg bg-saf-orange hover:bg-saf-orange/90 text-white relative overflow-hidden"
            >
              {showConfirmation ? (
                <span className="flex items-center">
                  <Check className="mr-2" size={20} />
                  {t('donate.thank.you')}
                </span>
              ) : (
                t('donate.proceed')
              )}
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Donate;
