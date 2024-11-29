import React from "react";
import Tech from "./Tech";
import { useInView } from "react-intersection-observer";
const Card = ({ image, title, description, technologies,link,presentation }) => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0,   // Trigger when 10% of the card is visible
});

  return (


    <div id="projects" className="flex justify-center ">
            <div
        ref={ref}
        className={`flex flex-col justify-center mb-4 relative transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-64"
        }`}
      >
        <h1 className=" text-2xl text-center lg:text-left lg:text-4xl font-gunterz mb-4 ml-4">{presentation}</h1>
          <a className="relative block" href={link} target="_blank">

              <div className="relative card-container flex flex-col lg:flex-row lg:justify-between rounded-md   bg-white/10 w-full lg:w-[1440px] lg:h-[500px] p-[40px]">
              
                <div className="mb-6">
                  <h1 className="text-center lg:text-left font-gunterzBold mb-7 text-3xl text-red-500">{title}</h1>
                  <p className=" sm:text-base lg:w-[450px]  pb-6 lg:pb-0">{description}</p>
                  <div className="flex  absolute bottom-[215px] lg:bottom-10">
                      {technologies.map((tech,index)=>(
                        <Tech key={index} title={tech.title}></Tech>
                      ))}
                  </div>

                </div>
                <img className=" rounded-xl w-full lg:min-h-[400px] lg:min-w-[750px] object-cover lg:max-w-[750px]" src={image} alt="" />
              </div>

          </a>
      </div>
    </div>
  );
};

export default Card;
