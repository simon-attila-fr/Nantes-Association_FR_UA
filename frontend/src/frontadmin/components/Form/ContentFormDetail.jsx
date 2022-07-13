import React, { useState } from "react";
import { AiFillSave } from "react-icons/ai";
import PropTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContentFormDetail({ initialContent }) {
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/content/${content.id}`, content)
      .then(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Le contenu a bien été mis à jour",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  const handleChange = (e) => {
    setContent({ ...content, body: e.target.value });
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={content.ref}> {content.definition}</label>

        {content.type ? (
          <textarea
            value={content.body}
            onChange={handleChange}
            type="text"
            name={content.ref}
            id={content.ref}
          />
        ) : (
          <input
            value={content.body}
            onChange={handleChange}
            type="text"
            name={content.ref}
            id={content.ref}
          />
        )}
      </div>
      <div className="btn-form">
        <button type="submit" className="save">
          <AiFillSave />
        </button>
      </div>
    </form>
  );
}

ContentFormDetail.propTypes = {
  initialContent: PropTypes.shape({
    body: PropTypes.string,
    language_code: PropTypes.string,
    description: PropTypes.string,
  }),
};

ContentFormDetail.defaultProps = {
  initialContent: PropTypes.shape({
    body: "ceci est du contenu",
    language_code: "FR",
    description: "titre",
  }),
};
