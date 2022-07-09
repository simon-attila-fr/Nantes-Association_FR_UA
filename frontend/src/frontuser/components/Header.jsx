import React, { useState } from "react";
import "../../assets/styles/Header.css";
import Don from "./Don";
import MenuBurger from "./MenuBurger";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : null}  `}>
      <Don />
      <div className="lang-choice">
        <button type="button">Français</button>
        <button type="button">українська</button>
      </div>
      <MenuBurger handleShowLinks={handleShowLinks} />
    </nav>
  );
}
