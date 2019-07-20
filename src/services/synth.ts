
type SynthServiceSpeakConfig = {
  text: string;
  lang: string;
  rate: number;
  pitch: number;
};

class SynthService {
  private static synth: SpeechSynthesis = window.speechSynthesis;

  static getVoices(): SpeechSynthesisVoice[] {
    return SynthService.synth.getVoices();
  }

  static getVoice(lang: string): SpeechSynthesisVoice | undefined {
    return SynthService.getVoices().find(voice => Object.is(voice.lang, lang));
  }

  static speak(config: SynthServiceSpeakConfig): void {
    if (SynthService.synth.speaking) {
      console.error('Already speaking');
      return;
    }

    const textToSpeak = new SpeechSynthesisUtterance(config.text);
    
    textToSpeak.onend = () => console.log('Done speaking');

    textToSpeak.onerror = () => console.error('Something went wrong');

    const voice = SynthService.getVoice(config.lang);

    voice && (textToSpeak.voice = voice);

    textToSpeak.rate = config.rate;
    textToSpeak.pitch = config.pitch;

    SynthService.synth.speak(textToSpeak);
  }
};

export default SynthService;