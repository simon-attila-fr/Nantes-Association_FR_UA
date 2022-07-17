/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
          href=""
          className="nav-logo-link"
          aria-label="visit homepage"
          aria-current="page"
        >
          <img className="nav-logo-pic" src={logo} alt="logo-pic" />
        </a>
      </div>

      <div className="nav-gift-btn">
        <a href="" className="gift-btn">
          <span className="gift-span-btn">Donner</span>
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
        <button className="spin circle" type="button">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#ffc330",
                    textDecoration: "underline",
                  }
                : { textDecoration: "none", hover: "#0073db" }
            }
          >
            Accueil
          </NavLink>
        </button>
        <button className="spin circle" type="button">
          <NavLink
            to="/involve"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#ffc330",
                    textDecoration: "underline",
                  }
                : { color: "black", textDecoration: "none" }
            }
          >
            Participer
          </NavLink>
        </button>
      </div>
    </nav>
  );
}
