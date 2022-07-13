import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentForm from "../components/Form/ContentForm";
import "../../assets/styles/ContentAdmin.css";

export default function ContentHome() {
  const [content, setContent] = useState([]);

  // Récupérer la donnée initial à afficher dans le formulaire
  async function getInitialData() {
    await axios
      .get("http://localhost:5000/content/home")
      .then((data) => setContent(data.data))
      .then()
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
      <h1> Modifier la page d'accueil </h1>
      <ContentForm content={content} />
    </div>
  );
}
