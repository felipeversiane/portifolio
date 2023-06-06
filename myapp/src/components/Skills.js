// Main.js
import React from "react";
import "./style/Skills.css";

function Skills({ language }) {
      return (
        <div className="">
          <h1 className="font-poppins font-bold text-4xl ">{language === "en" ? "skills." : "habilidades."}</h1>
        </div>
  );
}
export default Skills;
