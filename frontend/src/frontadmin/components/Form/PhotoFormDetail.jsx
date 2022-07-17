import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { AiFillSave } from "react-icons/ai";
import Swal from "sweetalert2";

export default function PhotoFormDetail({ initialContent }) {
  const [myfile, setMyfile] = useState(null);
  const photoName = initialContent.photo_name;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo_name", photoName);
    formData.append("myfile", myfile);

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/photo/upload/${initialContent.id}`,
        formData
      )
      .then(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Le contenu a bien été mis à jour.",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  const handleChange = (event) => {
    const value = event.target.files[0];
    setMyfile(value);
  };

  return (
    <form
      method="POST"
      action="uploadfile"
      encType="multipart/form-data"
      className="photoForm"
      onSubmit={handleSubmit}
    >
      <div className="admin-form">
        <h3 className="photoFormCardTitle">Photo n° {initialContent.id}</h3>
        <img src={initialContent.photo_url} alt={initialContent.photo_name} />
        <input type="file" name="myfile" onChange={handleChange} />
        <div className="btn-form">
          <button type="submit" className="save">
            <AiFillSave />
          </button>
        </div>
      </div>
    </form>
  );
}

PhotoFormDetail.propTypes = {
  initialContent: PropTypes.shape({
    id: PropTypes.number,
    photo_name: PropTypes.string,
    photo_url: PropTypes.string,
  }),
};

PhotoFormDetail.defaultProps = {
  initialContent: PropTypes.shape({
    id: 1,
    photo_name: "mosaic1",
    photo_url:
      "http://localhost:5000/assets/images/ProfilAttila.png1657924240178.png",
  }),
};
