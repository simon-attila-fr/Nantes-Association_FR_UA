/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../../assets/styles/Form.css";

export default function ContactForm() {
  const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="form-container">
      <div className="formrow formheader two">
        <h1 className="form-h1">NOUS CONTACTER</h1>
      </div>
      <div className="formbody">
        <form className="form-form">
          <ul className="form-ul">
            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="first_name">
                  Prénom
                </label>
                <input type="text" name="first_name" />
              </p>
              <p className="pull-right">
                <label className="form-label" htmlFor="last_name">
                  Nom
                </label>
                <input type="text" name="last_name" />
              </p>
            </li>

            <li className="form-li">
              <p className="stay-left">
                <label className="form-label" htmlFor="email">
                  email <span className="req">*</span>
                </label>
                <input type="email" name="email" />
              </p>
            </li>
            <li className="form-li">
              <label className="form-label" htmlFor="comments">
                Message <span className="req">*</span>
              </label>
              <textarea
                className="formtextarea"
                cols="46"
                rows="3"
                name="comments"
              />
            </li>

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
                <span>Envoyer</span>
              </button>

              {message && (
                <p className="contactFormMessage">
                  Nous avons bien reçu votre message
                </p>
              )}
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
