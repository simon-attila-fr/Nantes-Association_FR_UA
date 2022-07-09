/* eslint-disable no-unused-vars */
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Translate() {
  const { setLang } = useContext(GlobalContext);
  return (
    <div className="lang-choice">
      <button type="button" onClick={(e) => setLang("FR")}>
        Français
      </button>
      <button type="button" onClick={(e) => setLang("UK")}>
        українська
      </button>
    </div>
  );
}
