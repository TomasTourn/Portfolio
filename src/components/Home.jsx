import React from "react";
import Button from "./Button";
import LanguageButton from "./LanguageButton";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {

    const { language } = useLanguage();

    const content = {
        en: {
          greeting: "Hi, I'm Tomas Tourn",
          jobTitle: "Fullstack Web Developer",
          description: "University Technician in Computer Applications Development",
          resume: "Resume",
        },
        es: {
          greeting: "¡Hola! Soy Tomás Tourn",
          jobTitle: "Desarrollador Web Fullstack",
          description: "Técnico Universitario en Desarrollo de Aplicaciones Informáticas",
          resume: "Currículum",
        }
      };

      const t = content[language];

    return (
        <section className="font-gunterz text-center ">
            <LanguageButton />
            
            <div className="text-[var(--background)] flex flex-col items-center">
                <img
                    className="w-[250px] rounded-full mb-10"
                    src="src/assets/images/profile2.jpg"
                    alt="profile"
                />
                <h1 className="text-white/30 text-2xl lg:text-5xl mb-8">{t.greeting}</h1>
                <h1 className="text-3xl lg:text-7xl mb-10">{t.jobTitle}</h1>
            </div>
            <div className="text-red-500">
                <p className="font-gunterzBold lg:text-xl mb-10">
                   {t.description}
                </p>
            </div>
            <div className="grid  grid-cols-2 lg:flex lg:flex-row gap-4 justify-center">
                <Button
                    href="https://github.com/TomasTourn"
                    svg="src/assets/svg/github.svg"
                    title="Github"
                />
                <Button
                    href="https://www.linkedin.com/in/tomastourn/"
                    svg="src/assets/svg/linkedin.svg"
                    title="Linkedin"
                />
                <Button
                    href="mailto:tomytourn1@gmail.com"
                    svg="src/assets/svg/email.svg"
                    title="E-mail"
                />
                <Button
                    href="/resume"
                    svg="src/assets/svg/resume.svg"
                    title={t.resume}
                />
            </div>
        </section>
    );
};

export default Home;