// Main.js
import React from "react";
import "./style/Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Main({ language }) {
  const renderGreeting = () => {
    if (language === "en") {
      return (
        <>
          <p className="bg-transparent font-poppins font-bold text-2xl select-none">Hi, my name is Felipe,</p>
          <div>
            <p className="font-poppins text-8xl font-bold bg-gradient-to-r from-primary_blue to-tirth_blue text-transparent bg-clip-text select-none">FULL STACK</p>
            <p className="font-poppins text-4xl font-black bg-gradient-to-r from-primary_blue to-tirth_blue text-transparent max-w-[40rem] bg-clip-text select-none" style={{ letterSpacing: '1.22em' }}>DEVELOPER</p>
          </div>
          <p className="bg-transparent font-poppins font-regular mt-[2rem] select-none">I am a fullstack developer <br />working with projects in Django, React, Typescript since 2021. <br />Seeking new opportunities in the area and always open to new horizons.</p>
        </>
      );
    } else {
      return (
        <>
          <p className="bg-transparent font-poppins font-bold text-2xl select-none">Oi, meu nome é Felipe,</p>
          <div>
            <p className="font-poppins text-8xl font-bold bg-gradient-to-r from-primary_blue to-tirth_blue text-transparent bg-clip-text select-none">FULL STACK</p>
            <p className="font-poppins text-4xl font-black bg-gradient-to-r from-primary_blue to-tirth_blue text-transparent max-w-[40rem] bg-clip-text select-none" style={{ letterSpacing: '1.22em' }}>DEVELOPER</p>
          </div>
          <p className="bg-transparent font-poppins font-regular mt-[2rem] select-none">Oi eu sou um desenvolvedor fullstack <br />Trabalhando em projetos com Django, React, Typescript desde 2021. <br />Procurando novas oportunidades na área e sempre aberto para novos horizontes.</p>
        </>
      );
    }
  };

  return (
    <div className="bg-transparent flex flex-col justify-left py-[3rem] h-[50rem] ">
      <div className="text-left ml-[5rem] mt-[6rem] w-fit h-fit">
        {renderGreeting()}
      </div>

      <div className="contact flex w-fit max-h-[4rem] mt-8 ml-[5rem]">
        <a href="https://github.com/felipeversiane" rel="noreferrer" target="_blank">
          <button className="bg-transparent transition duration-300 ease-in-out social-button  text-4xl hover:text-primary_blue">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/felipeversiane" rel="noreferrer" target="_blank">
          <button className="bg-transparent transition duration-300 ease-in-out social-button text-4xl hover:text-primary_blue ml-[5rem]">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </a>
        <a href="https://www.instagram.com/felipeffv_" rel="noreferrer" target="_blank">
          <button className="bg-transparent transition duration-300 ease-in-out social-button text-4xl hover:text-primary_blue ml-[5rem]">
            <FontAwesomeIcon icon={faInstagram} />
          </button>
        </a>
        <button className="select-none bg-gradient-to-r from-primary_blue ml-[9rem] to-tirth_blue text-white rounded-lg px-6 py-2 transition duration-300 ease-in-out mr-[3rem] font-montserrat font-bold hover:transform hover:scale-105">
          {language === "en" ? "SUMMARY" : "RESUMO"}
        </button>
      </div>
    </div>
  );
}

export default Main;
