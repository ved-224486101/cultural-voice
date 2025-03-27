
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mic, Volume2 } from 'lucide-react';

const VoiceControl = () => {
  const { t } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [showWaves, setShowWaves] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // Show animation when activated
      setShowWaves(true);
      // In a full implementation, this would activate voice recognition
      setTimeout(() => {
        setShowWaves(false);
        setIsListening(false);
      }, 3000);
    } else {
      setShowWaves(false);
    }
  };

  return (
    <button 
      className="voice-orb" 
      onClick={toggleListening}
      aria-label={isListening ? t('voice.listening') : t('voice.commands')}
    >
      <div className="voice-orb-inner">
        {showWaves ? (
          <div className="voice-waves-container">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="voice-wave" 
                style={{ 
                  height: `${Math.random() * 12 + 4}px`,
                  animationDelay: `${i * 0.1}s`
                }} 
              />
            ))}
          </div>
        ) : (
          <span className="lotus-icon">
            {isListening ? <Volume2 size={18} /> : <Mic size={18} />}
          </span>
        )}
      </div>
    </button>
  );
};

export default VoiceControl;
