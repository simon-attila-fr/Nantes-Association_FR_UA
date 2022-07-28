/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import GlobalContext from "../contexts/GlobalContext";
import Translate from "./Translate";
import Traduction from "./Traduction";
import compass from "../../assets/img/compass.png";
import logo from "../../assets/img/logo.png";

import "../../assets/styles/Header.css";
import MenuBurger from "./MenuBurger";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const { setLang } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "info",
      title: "module de paiement à venir",
      showConfirmButton: false,
      timer: 1500,
    });

  const handleShowLinks = () => {
    setShowLinks(!showLinks);

  };

  return (
    <nav className={`nav-main ${showLinks ? "show_nav" : null}  `}>
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
        <a href="" onClick={handleSubmit} className="gift-btn">
          <span className="gift-span-btn">
            <Traduction reference="other_button_gift" />
          </span>
        </a>
      </div>

      <div className="nav-translation">
        <div className="flag-btns">
          <Translate />
        </div>
      </div>

      <div className="nav-menu">
        <MenuBurger handleShowLinks={handleShowLinks} />

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
            <Traduction reference="other_page_name_home" />
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
            <Traduction reference="other_page_name_involve" />
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
