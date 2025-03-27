
class ReadAloudService {
  private speechSynthesis: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private isInitialized: boolean = false;
  private activeUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.initVoices();
  }

  private initVoices() {
    // Load voices
    this.voices = this.speechSynthesis.getVoices();
    
    if (this.voices.length === 0) {
      // Voice list not loaded yet, wait for the voiceschanged event
      window.speechSynthesis.addEventListener('voiceschanged', () => {
        this.voices = this.speechSynthesis.getVoices();
        this.isInitialized = true;
      });
    } else {
      this.isInitialized = true;
    }
  }

  public speak(text: string, lang: string = 'en-US'): void {
    if (!this.isInitialized) {
      console.warn('Speech synthesis not initialized yet');
      setTimeout(() => this.speak(text, lang), 100);
      return;
    }

    // Cancel any ongoing speech
    this.stop();

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find a voice matching the language
    const voice = this.voices.find(v => v.lang.includes(lang.substring(0, 2)) && !v.localService);
    
    if (voice) {
      utterance.voice = voice;
    }
    
    utterance.lang = lang;
    utterance.rate = 1;
    utterance.pitch = 1;
    
    this.activeUtterance = utterance;
    this.speechSynthesis.speak(utterance);
  }

  public stop(): void {
    if (this.activeUtterance) {
      this.speechSynthesis.cancel();
      this.activeUtterance = null;
    }
  }

  public pause(): void {
    if (this.activeUtterance) {
      this.speechSynthesis.pause();
    }
  }

  public resume(): void {
    if (this.activeUtterance) {
      this.speechSynthesis.resume();
    }
  }
}

// Singleton instance
const readAloudService = new ReadAloudService();
export default readAloudService;
