import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Mosaic() {
  const [mosaic, setMosaic] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/photo`)
      .then((response) => response.data)
      .then((data) => setMosaic(data));
  }, []);

  return mosaic.map((e) => <img key={e.id} src={e.photo_url} alt={e.photo_name} />);
}
