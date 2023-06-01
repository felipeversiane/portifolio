import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Main() {
    return (
        <div className="flex flex-col justify-left">
            <div className="text-left ml-[5rem] mt-[6rem] w-fit h-fit">
                <p className="font-poppins font-bold text-2xl select-none">Hi, my name is Felipe,</p>
                <div>
                <p className="font-poppins text-8xl font-bold bg-gradient-to-r
                 from-primary_blue to-tirth_blue text-transparent bg-clip-text select-none">FULL STACK</p>
                <p className="font-poppins text-4xl font-bold bg-gradient-to-r
                 from-primary_blue to-tirth_blue text-transparent  max-w-[40rem] bg-clip-text select-none" style={{ letterSpacing: '1.22em' }}>DEVELOPER</p>
                </div>
                <p className="font-poppins font-regular mt-[2rem] select-none">I am a fullstack developer <br />
                 working with projects in Django, React, Typescript since 2021. <br />
                 Seeking new opportunities in the area and always open to new horizons.</p>
            </div>
            
            <div className="contact  mt-6 ml-[5rem]">
                <a href="https://github.com/felipeversiane" rel="noreferrer" target="_blank">
                <button className="transition duration-300 ease-in-out social-button  text-4xl hover:text-primary_blue">
                    <FontAwesomeIcon icon={faGithub} />
                </button>
                </a>
                <a href="https://www.linkedin.com/in/seu-usuario-do-linkedin" rel="noreferrer" target="_blank">
                <button className="transition duration-300 ease-in-out social-button text-4xl hover:text-primary_blue ml-[5rem]">
                    <FontAwesomeIcon icon={faLinkedin} />
                </button>
                </a>
                <a href="https://www.instagram.com/felipeffv_" rel="noreferrer" target="_blank">
                <button className="transition duration-300 ease-in-out social-button text-4xl hover:text-primary_blue ml-[5rem]">
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
                </a>
                <button className="summary-button font-poppins font-bold text-lg bg-white bg-clip-text 
                    text-transparent bg-gradient-to-r from-primary_blue to-tirth_blue 
                    shadow-thirt_blue hover:scale-105 transform transition-all duration-300 
                    border border-primary_blue rounded-lg py-2 px-4 ml-[6rem]">
                    SUMMARY
                </button>
            </div>

        </div>
    );
  }
  export default Main;
  