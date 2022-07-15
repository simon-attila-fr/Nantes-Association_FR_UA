import React, { useState } from "react";
import axios from 'axios';

export default function PhotoFormDetail({ initialContent }) {
  const [myfile, setMyfile] = useState(null);
  const [photoName, setPhotoName] = useState(initialContent.photo_name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo_name", photoName);
    formData.append("myfile", myfile);
    console.log(formData);

    axios.put(`${import.meta.env.VITE_BACKEND_URL}/photo/upload/${initialContent.id}`, formData)

  };

  const handleChange = (event) => {
    const value = event.target.files[0];
    setMyfile(value);
  }

  return (
    <form
      method="POST"
      action="uploadfile"
      encType="multipart/form-data"
      className="photoForm"
      onSubmit={handleSubmit}
    >
      <div className="adminPhotoCardContainer">
        <h3 className="photoFormCardTitle">Photo n° {initialContent.id}</h3>
        <img src={initialContent.photo_url} alt={initialContent.photo_name} />
        <input type="file" name="myfile" onChange={handleChange}></input>
        <input type="submit"></input>
      </div>
    </form>
  );
}
