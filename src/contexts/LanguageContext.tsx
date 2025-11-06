import React, { createContext, useState, useContext, ReactNode } from 'react';
import en from '../translations/en.json';
import id from '../translations/id.json';

const translations = { en, id };

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Utility function to safely access nested properties
const getNestedValue = (obj: any, path: string): string | undefined => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, fallback?: string): string => {
    const currentLangTranslations = translations[language];
    const englishTranslations = translations.en;
    
    let translatedText = getNestedValue(currentLangTranslations, key);
    
    if (!translatedText) {
      translatedText = getNestedValue(englishTranslations, key);
    }
    
    return translatedText || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
};
