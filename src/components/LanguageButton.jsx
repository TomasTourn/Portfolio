import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button 
      className="text-white font-sans text-sm absolute top-4 right-4 p-2 rounded-md ring-1 ring-white  transition-colors pr-4 pl-4"
      onClick={toggleLanguage}
    >
      {language === 'en' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageButton;
