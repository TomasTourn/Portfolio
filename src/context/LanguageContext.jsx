// LanguageContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const LanguageContext = createContext();

// Crear un hook para usar el contexto
export const useLanguage = () => useContext(LanguageContext);

// Crear el proveedor del contexto
export const LanguageProvider = ({ children }) => {
  // Estado que guarda el idioma
  const [language, setLanguage] = useState('en');  // Idioma inicial

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}  {/* Todo lo que esté dentro de este componente tendrá acceso al contexto */}
    </LanguageContext.Provider>
  );
};
