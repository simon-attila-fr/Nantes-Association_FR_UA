/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
// import Swal from "sweetalert2";
// import axios from "axios";
import Traduction from "./Traduction";
import "../../assets/styles/Form.css";
import like from "../../assets/img/like.png";

export default function JoinForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [adherent, setAdherent] = useState(null);
  const [adherentJeune, setAdherentJeune] = useState(null);
  const [adherentBienfaiteur, setAdherentBienfaiteur] = useState(null);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //   if (!firstname || !lastname || !email || !address || !contribution) {
    //     Swal.fire({
    //       position: "center",
    //       icon: "error",
    //       title:
    //         "Merci de renseigner vos prénom, nom, email, adresse et la cotisation choisie",
    //       showConfirmButton: false,
    //       timer: 2000,
    //     });
    //   } else {
    //     axios.post(`${import.meta.env.VITE_BACKEND_URL}/member, members`).then(
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Le contenu a bien été mis à jour",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       })
    //     );
    //   }
  };

  return (
    <div className="form-container">
      <div className="formrow formheader">
        <h1 className="form-h1">
          <Traduction reference="involve_joinform_title" />
        </h1>
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
                  <Traduction reference="involve_joinform_label_firstname" />
                  <span className="req">*</span>
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
                  <Traduction reference="involve_joinform_label_lastname" />
                  <span className="req">*</span>
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
                  <Traduction reference="involve_joinform_label_email" />
                  <span className="req">*</span>
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
                  <Traduction reference="involve_joinform_label_phone" />
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
                <Traduction reference="involve_joinform_label_address" />{" "}
                <span className="req">*</span>
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
                <Traduction reference="involve_joinform_label_contribution_title" />{" "}
                <span className="req">*</span>
              </h4>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={adherent}
                    onChange={(e) => setAdherent(e.target.value)}
                  />
                  <i className="helper" />
                  <Traduction reference="involve_joinform_label_contribution_adherent" />
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={adherentJeune}
                    onChange={(e) => setAdherentJeune(e.target.value)}
                  />
                  <i className="helper" />
                  <Traduction reference="involve_joinform_label_contribution_adherentjeune" />
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={adherentBienfaiteur}
                    onChange={(e) => setAdherentBienfaiteur(e.target.value)}
                  />
                  <i className="helper" />
                  <Traduction reference="involve_joinform_label_contribution_adherentbienfaiteur" />
                </label>
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                />
                <i className="helper" />
                <Traduction reference="involve_joinform_label_newsletter" />
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
                <span>
                  <img className="like-icon" src={like} alt="like-icon" />
                </span>
                <span>
                  <Traduction reference="other_button_join" />
                </span>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
