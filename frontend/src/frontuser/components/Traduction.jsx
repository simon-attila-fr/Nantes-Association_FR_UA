/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Traduction({ reference }) {
  const { traduction, lang } = useContext(GlobalContext);
  return (
    <>
      {traduction[reference]
        ? traduction[reference][lang]
        : "Chargement en cours..."}
    </>
  );
}
