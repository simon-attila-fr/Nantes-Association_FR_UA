import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentForm from "../components/Form/ContentForm";

export default function ContentInvolve() {
  const [content, setContent] = useState([]);

  // Récupérer la donnée initial à afficher dans le formulaire
  async function getInitialData() {
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/content/involve`)
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
    <div className="admin-content">
      <h1> Modifier la page "Donnez, Adhérez, Contactez-nous" </h1>
      <ContentForm content={content} />
    </div>
  );
}
