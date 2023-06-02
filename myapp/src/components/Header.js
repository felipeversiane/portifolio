import React from "react";
import "./Header.css";


function Header() {
    return (
        <header>
          <div className="w-all h-[5rem] flex items-center justify-between ">
          <div className="w-fit h-fit">
              <a
                href="#home"
                className="select-none ml-[2rem] text-2xl font-poppins font-bold transition duration-300 ease-in-out hover:text-gray-700">
                felipeversiane.
              </a>
          </div>
            <nav className="">
              <a
                href="#About"
                className="selection-none select-none mr-[4rem] font-montserrat font-medium relative overflow-hidden"
              >
                <span className="text-black">About</span>
                <span className="bar"></span>
              </a>

              <a
                href="#Projetos"
                className="selection-none mr-[4rem]  select-none font-montserrat relative font-medium overflow-hidden"
              >
                <span className="text-black">Projects</span>
                <span className="bar"></span>
              </a>

              <a
                href="#Skills"
                className="selection-none select-none font-montserrat relative font-medium overflow-hidden"
              >
                <span className="text-black select-none">Skills</span>
                <span className="bar"></span>
              </a>
              
            </nav>
            <div class="button w-fit h-fit">
              <button className="select-none bg-gradient-to-r from-primary_blue to-tirth_blue text-white rounded-lg px-6 py-1 transition duration-300 ease-in-out mr-[3rem] font-montserrat font-bold hover:transform hover:scale-105 ">
                LET'S TALK
              </button>
            </div>
          </div>
        </header>
    );
  }
  export default Header;
  