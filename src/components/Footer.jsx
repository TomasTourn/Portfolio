import React from "react";
import { useLanguage } from "../context/LanguageContext";
const Footer = () => {
    const { language } = useLanguage();

    const content = {
        en: {
          p: "© 2024 Tomás Tourn Made with React and Tailwind CSS",
        },
        es: {
          p: "© 2024 Tomás Tourn Hecho con React y Tailwind CSS",
        }
      };
    
      const t = content[language];
    return (
        <footer className="bg-black text-white py-6 mt-20">
            <div className="container mx-auto flex justify-center text-zinc-800/90 dark:text-zinc-200/90">
                <p className="text-center mb-2">{t.p}</p>    
            </div>
        </footer>
    );
};

export default Footer;