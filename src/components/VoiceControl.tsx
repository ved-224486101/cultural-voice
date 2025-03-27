
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { Mic, Volume2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const VoiceControl = () => {
  const { t, setLanguage } = useLanguage();
  const { themeMode, setThemeMode, toggleReadAloud } = useTheme();
  const [isListening, setIsListening] = useState(false);
  const [showWaves, setShowWaves] = useState(false);
  const navigate = useNavigate();

  const processVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    // Navigation commands
    if (lowerCommand.includes('go to home') || lowerCommand.includes('home page')) {
      navigate('/');
      toast({ title: t('voice.navigating'), description: 'Home' });
      return true;
    } else if (lowerCommand.includes('go to about') || lowerCommand.includes('about us')) {
      navigate('/about');
      toast({ title: t('voice.navigating'), description: 'About Us' });
      return true;
    } else if (lowerCommand.includes('go to volunteer') || lowerCommand.includes('volunteer page')) {
      navigate('/volunteer');
      toast({ title: t('voice.navigating'), description: 'Volunteer' });
      return true;
    } else if (lowerCommand.includes('go to donate') || lowerCommand.includes('donation')) {
      navigate('/donate');
      toast({ title: t('voice.navigating'), description: 'Donate' });
      return true;
    } else if (lowerCommand.includes('go to contact') || lowerCommand.includes('contact us')) {
      navigate('/contact');
      toast({ title: t('voice.navigating'), description: 'Contact' });
      return true;
    }
    
    // Theme commands
    else if (lowerCommand.includes('dark mode') || lowerCommand.includes('switch to dark')) {
      setThemeMode('dark');
      toast({ title: t('voice.theme.changed'), description: 'Dark Mode' });
      return true;
    } else if (lowerCommand.includes('light mode') || lowerCommand.includes('switch to light')) {
      setThemeMode('light');
      toast({ title: t('voice.theme.changed'), description: 'Light Mode' });
      return true;
    } else if (lowerCommand.includes('high contrast') || lowerCommand.includes('contrast mode')) {
      setThemeMode('high-contrast');
      toast({ title: t('voice.theme.changed'), description: 'High Contrast Mode' });
      return true;
    }
    
    // Accessibility commands
    else if (lowerCommand.includes('read aloud') || lowerCommand.includes('text to speech')) {
      toggleReadAloud();
      toast({ 
        title: t('voice.accessibility'), 
        description: t('voice.read.aloud.toggled') 
      });
      return true;
    }
    
    // Language commands
    else if (lowerCommand.includes('english') || lowerCommand.includes('switch to english')) {
      setLanguage('en');
      toast({ title: t('voice.language.changed'), description: 'English' });
      return true;
    } else if (lowerCommand.includes('hindi') || lowerCommand.includes('switch to hindi')) {
      setLanguage('hi');
      toast({ title: t('voice.language.changed'), description: 'हिंदी' });
      return true;
    } else if (lowerCommand.includes('marathi') || lowerCommand.includes('switch to marathi')) {
      setLanguage('mr');
      toast({ title: t('voice.language.changed'), description: 'मराठी' });
      return true;
    }
    
    return false;
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // Show animation when activated
      setShowWaves(true);
      
      // Simulate voice recognition (in a real app, this would use the Web Speech API)
      const recognition = startVoiceRecognition();
      
      // For demo, we'll simulate a command after 3 seconds
      setTimeout(() => {
        setShowWaves(false);
        setIsListening(false);
        
        // Simulate getting a command (in a real app, this would come from the recognition result)
        const simulatedCommands = [
          'go to home',
          'switch to dark mode',
          'go to donate'
        ];
        const randomCommand = simulatedCommands[Math.floor(Math.random() * simulatedCommands.length)];
        
        processVoiceCommand(randomCommand);
      }, 3000);
    } else {
      setShowWaves(false);
    }
  };

  // This is a placeholder function for voice recognition
  // In a real app, you would implement the Web Speech API here
  const startVoiceRecognition = () => {
    // This would be actual implementation with the Web Speech API
    // For now, we're just returning null
    return null;
  };

  const getOrbClass = () => {
    switch (themeMode) {
      case 'dark':
        return 'bg-saf-indigo/70';
      case 'high-contrast':
        return 'bg-yellow-500';
      default:
        return 'bg-saf-indigo/70';
    }
  };

  return (
    <button 
      className={`voice-orb ${getOrbClass()}`}
      onClick={toggleListening}
      aria-label={isListening ? t('voice.listening') : t('voice.commands')}
    >
      <div className="voice-orb-inner">
        {showWaves ? (
          <div className="voice-waves-container">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="voice-wave bg-white" 
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
