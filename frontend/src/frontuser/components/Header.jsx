/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";
import logo from "../../assets/img/logo.png";
import Translate from "./Translate";
import compass from "../../assets/img/compass.png";
import "../../assets/styles/Header.css";

export default function Header() {
  const { setLang } = useContext(GlobalContext);

  return (
    <nav className="nav-main">
      <div>
        <Link to="/">
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
        </Link>
      </div>

      <div className="nav-gift-btn">
        <a href="" className="gift-btn">
          <span className="gift-span-btn">Donner</span>
        </a>
      </div>

      <div className="nav-translation">
        <div className="flag-btns">
          <Translate />
        </div>
      </div>

      <div className="nav-menu">
        <a href="#" className="menu-toggler" aria-label="page menu">
          <img className="menu-icon" src={compass} alt="menu-icon" />
        </a>

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
          <button className="spin circle" type="button">
            Accueil
          </button>
        </NavLink>

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
          <button className="spin circle" type="button">
            Participer
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
