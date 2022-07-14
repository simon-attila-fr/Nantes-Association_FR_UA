/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import logo from "../../assets/img/logo.png";
import FR from "../../assets/img/FR.png";
import UK from "../../assets/img/UK.png";
import Translate from "./Translate";
import compass from "../../assets/img/compass.png";
import "../../assets/styles/Header.css";

export default function Header() {
  const { setLang } = useContext(GlobalContext);

  return (
    <nav className="nav-main">
      <div className="nav-logo">
        <a
          href="#"
          className="nav-logo-link"
          aria-label="visit homepage"
          aria-current="page"
        >
          <img className="nav-logo-pic" src={logo} alt="logo-pic" />
        </a>
      </div>

      <div className="nav-translation">
        <a href="#" className="nav-flag" aria-label="translation">
          <img className="lang-flag" src={FR} alt="fench-icon" />
          <img className="lang-flag" src={UK} alt="ukrainian-icon" />
        </a>
        <div className="flag-btns">
          <Translate />
        </div>
      </div>

      <div className="nav-menu">
        <a href="#" className="menu-toggler" aria-label="page menu">
          <img className="menu-icon" src={compass} alt="menu-icon" />
        </a>
        <a href="#" className="menu-btn1">
          <span className="menu-span-btn1">Accueil</span>
        </a>
        <a href="#" className="menu-btn2">
          <span className="menu-span-btn2">Faites la différence !</span>
        </a>
      </div>
    </nav>
  );
}
