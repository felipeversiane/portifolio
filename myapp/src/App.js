// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./components/style/App.css";
import Skills from "./components/Skills";

function App() {
  const [language, setLanguage] = useState("pt");

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <div className="bg-svg">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Main language={language} />
      <Skills language={language}/>
    </div>
  );
}

export default App;
