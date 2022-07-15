/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Traduction({ reference }) {
  const { traduction, lang } = useContext(GlobalContext);
  return (
    <span>
      {traduction[reference]
        ? traduction[reference][lang]
        : "Chargement en cours..."}
    </span>
  );
}
