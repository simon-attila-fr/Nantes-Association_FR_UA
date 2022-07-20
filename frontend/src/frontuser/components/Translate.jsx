/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import "../../assets/styles/Translate.css";
import FR from "../../assets/img/FR.png";
import UK from "../../assets/img/UK.png";

export default function Translate() {
  const { setLang } = useContext(GlobalContext);
  return (
    <div className="lang-choice">
      <div onClick={(e) => setLang("FR")}>
        <img className="lang-flag" src={FR} alt="fench-icon" />
      </div>
      <div onClick={(e) => setLang("UK")}>
        <img className="lang-flag" src={UK} alt="ukrainian-icon" />
      </div>
    </div>
  );
}
