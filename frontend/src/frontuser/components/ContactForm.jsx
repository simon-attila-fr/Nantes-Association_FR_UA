/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Swal from "sweetalert2";
import Traduction from "./Traduction";
import "../../assets/styles/Form.css";
import like from "../../assets/img/like.png";

export default function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/sendmail`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ firstname, lastname, email, subject, message }),
    }).then((response) => response.json());

    if (!email || !message) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "email et message obligatoires",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Votre message a bien été envoyé",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="form-container">
      <div className="formrow formheader two">
        <h1 className="form-h1">
          <Traduction reference="involve_contactform_title" />
        </h1>
      </div>
      <div className="formbody">
        <form className="form-form" onSubmit={handleSubmit}>
          <ul className="form-ul">
            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="firstname">
                  <Traduction reference="involve_contactform_label_firstname" />
                </label>
                <input
                  className="forminput"
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </p>
              <p className="stay-left">
                <label className="form-label" htmlFor="lastname">
                  <Traduction reference="involve_contactform_label_lastname" />
                </label>
                <input
                  className="forminput"
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </p>
            </li>

            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="email">
                  <Traduction reference="involve_contactform_label_email" />{" "}
                  <span className="req">*</span>
                </label>
                <input
                  className="forminput"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p className="stay-left">
                <label className="form-label" htmlFor="subject">
                  <Traduction reference="involve_contactform_label_subject" />
                </label>
                <input
                  className="forminput"
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </p>
            </li>
            <li className="form-li">
              <label className="form-label" htmlFor="message">
                <Traduction reference="involve_contactform_label_message" />{" "}
                <span className="req">*</span>
              </label>
              <textarea
                className="formtextarea"
                id="message"
                name="message"
                cols="35"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </li>

            <li className="form-li">
              <div className="divider" />
            </li>
            <li className="form-li">
              <button
                className="custom-btn btn-12"
                type="submit"
                value="envoyer"
              >
                <span>
                  <img className="like-icon" src={like} alt="like-icon" />
                </span>
                <span>
                  <Traduction reference="other_button_contact" />
                </span>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
