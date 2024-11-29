import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Card from './components/Card'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/footer'
import { LanguageProvider, useLanguage } from './context/LanguageContext'



function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

function MainApp() {

   const { language } = useLanguage();

  const technologiesGeneral = [
    { title:"Html" },
    { title:"Css" },
    { title:"Javascript" },
  ];
  const technologiesConnect4 = [
    { title:"Html" },
    {title:"Canvas"},
    { title:"Javascript" }
    
  ];

  
  const translations = {

    en: {

      card1:{
        bigTitle: "Some of my projects",
        title: "Game Hub",
        description: "Mini-games webpage focused on delivering a clean and engaging design. The project allowed me to refine my skills in creating visually appealing layouts and explore interactive elements like carousels, improving my understanding of transitions and animations for a better user experience."
      },
      card2:{
        title: "Number Blocks",
        description: "A carefully designed, pixel-perfect website with parallax animations, created to match precise client requirements. This project taught me the importance of balancing visual appeal with smooth performance and gave me a deeper understanding of implementing animations that feel natural and engaging."
      },
      card3:{
        title: "Connect 4",
        description: "Built using JavaScript and HTML5 Canvas. Players take turns to align four discs in a row while the game dynamically updates the grid. I implemented game logic for win detection and turn management, offering a smooth, interactive experience. This project improved my skills in handling game state, event handling, and graphical rendering."
      }
      },
      es:{
        card1:{
          bigTitle:"Algunos de mis proyectos",
          title: "Game Hub",
          description: "Página web de mini-juegos centrada en ofrecer un diseño limpio y atractivo. El proyecto me permitió perfeccionar mis habilidades en la creación de diseños visualmente atractivos y explorar elementos interactivos como carruseles, mejorando mi comprensión de las transiciones y animaciones para una mejor experiencia de usuario."
        },
        card2:{
          title: "Number Blocks",
          description: "Un sitio web cuidadosamente diseñado y pixel-perfect, con animaciones parallax, creado para satisfacer los requisitos específicos del cliente. Este proyecto me enseñó la importancia de equilibrar el atractivo visual con un buen rendimiento, y me proporcionó una comprensión más profunda de cómo implementar animaciones que sean naturales y cautivadoras."
      },
      card3:{
        title: "4 en Línea",
        description:"Hecho con JavaScript y HTML5 Canvas. Los jugadores se turnan para alinear cuatro fichas en línea mientras el juego actualiza dinámicamente la cuadrícula. Implementé la lógica del juego para la detección de victorias y la gestión de turnos. Este proyecto mejoró mis habilidades en el manejo del estado del juego, el manejo de eventos y la representación gráfica."
      }
    }

  }

  const currentTranslations = translations[language];

  return (
    <>


      <div className="min-h-screen flex flex-col justify-start items-center  lg:justify-center mt-[50px]">
        <Home></Home>
      </div>

        <Skills></Skills>

        <Card image="src/assets/images/gamehub2.png"
            title={currentTranslations.card1.title}
            description={currentTranslations.card1.description}
            technologies={technologiesGeneral}
            link="https://tomastourn.github.io/interfaces-grupo-47/TP4/EntregaFinal/"
            presentation={currentTranslations.card1.bigTitle}></Card>

        <Card image="src/assets/images/numberblocks1080.png"
            title={currentTranslations.card2.title}
            description={currentTranslations.card2.description}
            technologies={technologiesGeneral}
            link="https://tomastourn.github.io/interfaces-grupo-47/TP4/EntregaFinal/NumberBlocks/"></Card>

        <Card image="src/assets/images/connect4.png"
            title={currentTranslations.card3.title}
            description={currentTranslations.card3.description}
            technologies={technologiesConnect4}
            link="https://tomastourn.github.io/interfaces-grupo-47/TP4/EntregaFinal/game.html"></Card>
          
        <About></About>
        
        <Footer></Footer>

    </>
  )
}

export default App
