import React from "react";
import Language from "./Language";
import { useInView } from 'react-intersection-observer';
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Activar solo una vez
    threshold: 0,    // Disparar cuando el 10% de la sección sea visible
  });


  const { language } = useLanguage();


  const content = {
    en: {
      title: "Skills",
    },
    es: {
      title: "Habilidades",
    }
  };

  const t = content[language];

  return (

 
    <div
    ref={ref}
    className={`flex justify-center px-4 lg:px-0 transition-all  duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-64'}`}
  >
      <div className="flex flex-col items-center lg:items-start justify-center mb-20 relative w-full max-w-[1440px]">
        
        <div id="skills" className="w-full text-center lg:text-left mb-4">
          <h1 className="font-gunterz text-3xl lg:text-5xl">{t.title}</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-between bg-white/10 w-full rounded-md p-6 lg:p-8">
          
          <div className="lg:ml-10">
            <h3 className="font-gunterzBold mb-4 text-xl text-center">Back-End</h3>
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              <Language title="Java" icon="src/assets/images/java.png" />
              <Language title="SpringBoot" icon="src/assets/images/springboot.png" />
              <Language title="Php" icon="src/assets/images/php.png" />
              <Language title="MySQL" icon="src/assets/images/mysql.png" />
              <Language title="PostgreSQL" icon="src/assets/images/postgresql.png" />
            </div>
          </div>
          
          <div className="lg:mr-10">
            <h3 className="font-gunterzBold mb-4 text-xl text-center">Front-End</h3>
            <div className="grid  grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              <Language title="Html" icon="src/assets/images/html.png" />
              <Language title="Css" icon="src/assets/images/css.png" />
              <Language title="Javascript" icon="src/assets/images/javascript.png" />
              <Language title="React" icon="src/assets/images/react.png" />
              <Language title="Tailwind" icon="src/assets/images/tailwind.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
