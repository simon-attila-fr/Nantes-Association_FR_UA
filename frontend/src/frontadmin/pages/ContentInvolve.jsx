import React, { useState, useEffect } from "react";
import axios from "axios";
import InvolveForm from "../components/Form/InvolveForm";
import "../../assets/styles/ContentInvolve.css";

export default function ContentInvolve() {
  const [content, setContent] = useState([]);

  // Récupérer la donnée initial à afficher dans le formulaire
  async function getInitialData() {
    await axios
      .get("http://localhost:5000/content")
      .then((data) => setContent(data.data))
      .catch((error) => {
        console.error(error);
      });
  }

  // Récupérer la donnée au montage du composant
  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      <h1> Modifier la page de don, d'adhésion et de contact </h1>
      <InvolveForm content={content} />
    </div>
  );
}
