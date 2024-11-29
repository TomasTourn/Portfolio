import React from "react";
import Language from "./Language";
import { useInView } from 'react-intersection-observer';
import { useLanguage } from "../context/LanguageContext";

import Java from "../assets/images/java.png";
import SpringBoot from "../assets/images/springboot.png";
import Php from "../assets/images/php.png";
import MySQL from "../assets/images/mysql.png";
import PostgreSQL from "../assets/images/postgresql.png";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Javascript from "../assets/images/javascript.png";
import ReactIcon from "../assets/images/react.png";
import Tailwind from "../assets/images/tailwind.png";


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
              <Language title="Java" icon={Java} />
              <Language title="SpringBoot" icon={SpringBoot} />
              <Language title="Php" icon={Php} />
              <Language title="MySQL" icon={MySQL} />
              <Language title="PostgreSQL" icon={PostgreSQL} />
            </div>
          </div>
          
          <div className="lg:mr-10">
            <h3 className="font-gunterzBold mb-4 text-xl text-center">Front-End</h3>
            <div className="grid  grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              <Language title="Html" icon={Html} />
              <Language title="Css" icon={Css} />
              <Language title="Javascript" icon={Javascript} />
              <Language title="React" icon={ReactIcon} />
              <Language title="Tailwind" icon={Tailwind} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
