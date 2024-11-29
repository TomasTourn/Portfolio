import React from "react";
import { useInView } from 'react-intersection-observer';
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Activar solo una vez
    threshold: 0, // Disparar cuando el 10% de la sección sea visible
  });

  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      text1: [
        "Hello! I’m Tomás Tourn. I studied a University Technical Degree in Application Development at UNICEN in Tandil, Argentina. My studies emphasized problem-solving through ",
        { text: "logic", highlight: true },
        ", UI/UX Design, ",
        { text: "data structures", highlight: true },
        ", and efficient ",
        { text: "database management", highlight: true },
        ".",
      ],
      text2: [
        "I am passionate about building applications that are ",
        { text: "robust", highlight: true },
        ", ",
        { text: "efficient", highlight: true },
        ", and ",
        { text: "user-friendly", highlight: true },
        ". I focus on creating solutions that seamlessly integrate functionality with performance, delivering results that exceed client expectations.",
      ],
      text3: [
        "As a professional, I prioritize ",
        { text: "scalability", highlight: true },
        ", ",
        { text: "reliability", highlight: true },
        ", and the use of ",
        { text: "innovative technologies", highlight: true },
        ". My fluency in both English and Spanish enables me to communicate effectively across multicultural teams and adapt to global challenges.",
      ],
    },
    es: {
      title: "Sobre Mí",
      text1: [
        "¡Hola! Soy Tomás Tourn. Estudié una Tecnicatura Universitaria en Desarrollo de Aplicaciones en la UNICEN en Tandil, Argentina. Mis estudios se enfocaron en la resolución de problemas a través de la ",
        { text: "lógica", highlight: true },
        ", el diseño de UI/UX, las ",
        { text: "estructuras de datos", highlight: true },
        ", y la gestión eficiente de ",
        { text: "bases de datos", highlight: true },
        ".",
      ],
      text2: [
        "Me apasiona construir aplicaciones que sean ",
        { text: "robustas", highlight: true },
        ", ",
        { text: "eficientes", highlight: true },
        " y ",
        { text: "fáciles de usar", highlight: true },
        ". Me enfoco en crear soluciones que integren funcionalidad con buen rendimiento, entregando resultados que superan las expectativas del cliente.",
      ],
      text3: [
        "Como profesional, priorizo la ",
        { text: "escalabilidad", highlight: true },
        ", la ",
        { text: "confiabilidad", highlight: true },
        " y el uso de ",
        { text: "tecnologías innovadoras", highlight: true },
        ". Mi fluidez en inglés y español me permite comunicarme eficazmente en equipos multiculturales y adaptarme a desafíos globales.",
      ],
    },
  };

  const t = content[language];

  return (
    <div
      ref={ref}
      id="about"
      className={`flex justify-center transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-64'}`}
    >
      <div className="flex flex-col p-2">
        <h1 className="font-gunterzBold text-4xl mb-4 text-center lg:text-left">{t.title}</h1>

        <div className="flex flex-col md:flex-row items-center bg-white/10 rounded-md max-w-[1440px] mx-auto p-6 lg:p-10 lg:pl-20 lg:pr-20 justify-between gap-10">
          <div className="order-1 md:order-2 md:max-w-[280px]">
            <img
              className="object-cover p-1 lg:p-2 w-full aspect-square rounded-2xl ring-2 ring-white/20"
              src="src/assets/images/profile2.jpg"
              alt="Profile"
            />
          </div>
          <div className="order-2 md:order-1 lg:w-2/3">
            {Object.keys(t).slice(1).map((key, index) => (
              <p key={index} className="mb-6">
                {t[key].map((part, idx) =>
                  part.highlight ? (
                    <span key={idx} className="text-highlight">{part.text}</span>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
