/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../../assets/styles/Form.css";

export default function JoinForm() {
  const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="form-container">
      <div className="formrow formheader">
        <h1 className="form-h1">ADHERER</h1>
      </div>
      <div className="formbody">
        <form className="form-form">
          <ul className="form-ul">
            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="firstname">
                  Prénom <span className="req">*</span>
                </label>
                <input className="forminput" type="text" name="firstname" />
              </p>
              <p className="stay-left">
                <label className="form-label" htmlFor="lastname">
                  Nom <span className="req">*</span>
                </label>
                <input className="forminput" type="text" name="lastname" />
              </p>
            </li>

            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="email">
                  email <span className="req">*</span>
                </label>
                <input className="forminput" type="email" name="email" />
              </p>
            </li>
            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="phone">
                  Téléphone
                </label>
                <input className="forminput" type="text" name="phone" />
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
              />
            </li>

            <div className="form-radio">
              <h4 className="form-h4">
                Choisissez votre cotisation <span className="req">*</span>
              </h4>
              <div className="radio">
                <label>
                  <input type="radio" name="radio" />
                  <i className="helper" />
                  Adhérent : 18€
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="radio" />
                  <i className="helper" />
                  Adhérent jeune : 8€
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="radio" />
                  <i className="helper" />
                  Adhérent Bienfaiteur : 100€
                </label>
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" />
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
                type="button"
                value="adhérer"
                onClick={() => setMessage(!message)}
              >
                <span>Merci !</span>
                <span>Adhérer</span>
              </button>
              {message && (
                <p className="contactFormMessage">
                  Nous avons bien reçu votre demande d'adhésion
                </p>
              )}
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
