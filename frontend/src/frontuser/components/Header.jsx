/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Don from "./Don";
import MenuBurger from "./MenuBurger";
import Translate from "./Translate";
import "../../assets/styles/Header.css";

export default function Header() {
  const { setLang } = useContext(GlobalContext);
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      <nav className={`navbar ${showLinks ? "show_nav" : null}  `}>
        <Don />
        <Translate />
        <MenuBurger handleShowLinks={handleShowLinks} />
      </nav>
    </div>
  );
}
