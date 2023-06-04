import React, { useState } from "react";
import "./style/Header.css";
import brazilFlag from "../images/brazilFlag.png";
import usaFlag from "../images/usaFlag.png";

function Header() {
  const [language, setLanguage] = useState("pt");

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <header>
      <div className="bg-transparent w-all h-[5rem] flex items-center justify-between">
        <div className="bg-transparent w-fit h-fit">
          <a
            href="#home"
            className="bg-transparent select-none ml-[2rem] text-2xl font-poppins font-bold transition duration-300 ease-in-out hover:text-gray-700"
          >
            felipeversiane.
          </a>
        </div>
        <nav className="">
          <a
            href="#About"
            className="bg-transparent selection-none select-none mr-[4rem] font-montserrat font-medium relative overflow-hidden"
          >
            <span className="text-black">{language === "en" ? "About" : "Sobre"}</span>
            <span className="bar"></span>
          </a>

          <a
            href="#Projetos"
            className="bg-transparent selection-none mr-[4rem]  select-none font-montserrat relative font-medium overflow-hidden"
          >
            <span className="text-black">{language === "en" ? "Projects" : "Projetos"}</span>
            <span className="bar"></span>
          </a>

          <a
            href="#Skills"
            className="bg-transparent selection-none select-none font-montserrat relative font-medium overflow-hidden"
          >
            <span className="text-black select-none">{language === "en" ? "Skills" : "Habilidades"}</span>
            <span className="bar"></span>
          </a>
        </nav>
        <div className="flex items-center">
          <button
            className="select-none bg-transparent rounded-full w-10 h-10 flex items-center justify-center ml-[2rem] transition duration-300 ease-in-out hover:bg-gray-200"
            onClick={handleLanguageChange}
          >
            <img
              src={language === "en" ? brazilFlag : usaFlag}
              alt={language === "en" ? "Brazil Flag" : "USA Flag"}
              className="w-[2rem] h-[2rem] mr-6 filter grayscale transition duration-[500ms] ease-in-out hover:filter-none"
            />
          </button>
          <button className="select-none bg-gradient-to-r max-w-[9rem] max-h-[2rem] h-[2rem] from-primary_blue to-tirth_blue text-white rounded-lg px-6 py-1 transition duration-300 ease-in-out mr-[3rem] font-montserrat font-bold hover:transform hover:scale-105">
            {language === "en" ? "LET'S TALK" : "CONTATO"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
