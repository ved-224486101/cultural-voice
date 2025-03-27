
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';

const Donate = () => {
  const { t } = useLanguage();
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleDonate = () => {
    // In a real app, this would process the payment
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };
  
  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  return (
    <div className="page-container">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{t('donate.title')}</h1>
        <p className="text-xl text-gray-600 mb-6">{t('donate.subtitle')}</p>
      </section>
      
      {/* Donation Type Toggle */}
      <section className="mb-8 max-w-md mx-auto">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <Label>{t('donate.one.time')}</Label>
            <Switch 
              checked={donationType === 'monthly'}
              onCheckedChange={(checked) => setDonationType(checked ? 'monthly' : 'one-time')}
            />
            <Label>{t('donate.monthly')}</Label>
          </div>
        </div>
      </section>
      
      {/* Donation Cards */}
      <section className="mb-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Small Donation */}
          <div 
            className={`donation-card cursor-pointer ${selectedAmount === 1000 ? 'ring-2 ring-saf-orange' : ''}`}
            onClick={() => {
              setSelectedAmount(1000);
              setCustomAmount('');
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{t('donate.card.small')}</h3>
              {selectedAmount === 1000 && (
                <span className="text-saf-orange bg-saf-orange/10 p-1 rounded-full">
                  <Check size={16} />
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{t('donate.card.small.impact')}</p>
          </div>
          
          {/* Medium Donation */}
          <div 
            className={`donation-card popular cursor-pointer ${selectedAmount === 5000 ? 'ring-2 ring-saf-orange' : ''}`}
            onClick={() => {
              setSelectedAmount(5000);
              setCustomAmount('');
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{t('donate.card.medium')}</h3>
              {selectedAmount === 5000 && (
                <span className="text-saf-orange bg-saf-orange/10 p-1 rounded-full">
                  <Check size={16} />
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{t('donate.card.medium.impact')}</p>
            <div className="absolute top-2 right-2">
              <span className="text-xs font-medium text-white transform rotate-45 origin-top-right inline-block mt-5 mr-5">
                {t('donate.popular.choice')}
              </span>
            </div>
          </div>
          
          {/* Large Donation */}
          <div 
            className={`donation-card cursor-pointer ${selectedAmount === 10000 ? 'ring-2 ring-saf-orange' : ''}`}
            onClick={() => {
              setSelectedAmount(10000);
              setCustomAmount('');
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{t('donate.card.large')}</h3>
              {selectedAmount === 10000 && (
                <span className="text-saf-orange bg-saf-orange/10 p-1 rounded-full">
                  <Check size={16} />
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{t('donate.card.large.impact')}</p>
          </div>
        </div>
      </section>
      
      {/* Custom Amount */}
      <section className="mb-10 max-w-md mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <Label htmlFor="custom-amount" className="block mb-2">{t('donate.custom.amount')}</Label>
          <div className="flex items-center">
            <span className="text-xl mr-2">₹</span>
            <Input
              id="custom-amount"
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
        </div>
      </section>
      
      {/* Donation Summary & Button */}
      <section className="mb-8 text-center max-w-md mx-auto">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            {donationType === 'one-time' ? 'One-time donation:' : 'Monthly donation:'}
          </h3>
          <p className="text-3xl font-bold text-saf-orange">
            ₹{finalAmount.toLocaleString('en-IN')}
          </p>
        </div>
        
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
      </section>
    </div>
  );
};

export default Donate;
