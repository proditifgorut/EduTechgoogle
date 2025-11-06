import React from 'react';
import { useTranslations } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslations();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage} 
      className="flex w-full items-center justify-center space-x-2 text-gray-300 hover:bg-white/20 hover:text-white transition-colors px-4 py-2 rounded-md bg-white/10 text-sm font-medium"
      aria-label="Switch language"
    >
      <Globe size={18} />
      <span className="font-medium">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
