import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentForm from "../components/Form/ContentForm";
import "../../assets/styles/ContentAdmin.css";

export default function ContentOther() {
  const [content, setContent] = useState([]);

  // Récupérer la donnée initial à afficher dans le formulaire
  async function getInitialData() {
    await axios
      .get("http://localhost:5000/content/other")
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
      <h1> Modifier les autres données </h1>
      <ContentForm content={content} />
    </div>
  );
}
