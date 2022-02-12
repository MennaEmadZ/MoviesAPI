import React, { useContext } from "react";
import { LanguageContext } from "./../Context/languageContext";
import './Navbar.css';

export default function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(LanguageContext);

  return (
    <div>
      <button
        className="btn btn-secondary-outline lang"
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
      >
        {contextLang}
      </button>
    </div>
  );
}
