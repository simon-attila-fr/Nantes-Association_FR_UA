/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Swal from "sweetalert2";
// import axios from "axios";
import "../../assets/styles/Form.css";

export default function JoinForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [contribution, setContribution] = useState("");
  const [newsletter, setNewsletter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !address || !contribution) {
      Swal.fire({
        position: "center",
        icon: "error",
        title:
          "Merci de renseigner vos prénom, nom, email, adresse et la cotisation choisie",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Votre demande d'adhésion a bien été envoyée",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // axios.post(`${import.meta.env.VITE_BACKEND_URL}/member, members`).then(
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Le contenu a bien été mis à jour",
    //   showConfirmButton: false,
    //   timer: 1500,
    // })
    // );
  };

  return (
    <div className="form-container">
      <div className="formrow formheader">
        <h1 className="form-h1">ADHERER</h1>
      </div>
      <div className="formbody">
        <form
          className="form-form"
          name="membre"
          method="post"
          onSubmit={handleSubmit}
        >
          <ul className="form-ul">
            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="firstname">
                  Prénom <span className="req">*</span>
                </label>
                <input
                  className="forminput"
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </p>
              <p className="stay-left">
                <label className="form-label" htmlFor="lastname">
                  Nom <span className="req">*</span>
                </label>
                <input
                  className="forminput"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </p>
            </li>

            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="email">
                  email <span className="req">*</span>
                </label>
                <input
                  className="forminput"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
            </li>
            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="phone">
                  Téléphone
                </label>
                <input
                  className="forminput"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </p>
            </li>
            <li className="form-li">
              <label className="form-label" htmlFor="address">
                Adresse <span className="req">*</span>
              </label>
              <textarea
                className="formtextarea"
                id="address"
                name="address"
                cols="35"
                rows="10"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </li>

            <div className="form-radio">
              <h4 className="form-h4">
                Choisissez votre cotisation <span className="req">*</span>
              </h4>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={contribution}
                    onChange={(e) => setContribution(e.target.value)}
                  />
                  <i className="helper" />
                  Adhérent : 18€
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={contribution}
                    onChange={(e) => setContribution(e.target.value)}
                  />
                  <i className="helper" />
                  Adhérent jeune : 8€
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={contribution}
                    onChange={(e) => setContribution(e.target.value)}
                  />
                  <i className="helper" />
                  Adhérent Bienfaiteur : 100€
                </label>
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                />
                <i className="helper" />
                Cochez pour vous inscrire à notre newsletter
              </label>
            </div>

            <li className="form-li">
              <div className="divider" />
            </li>
            <li className="form-li">
              <button
                className="custom-btn btn-12"
                type="submit"
                value="adhérer"
              >
                <span>Merci !</span>
                <span>Adhérer</span>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
