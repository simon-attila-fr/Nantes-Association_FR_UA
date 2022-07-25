/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Traduction from "./Traduction";
import "../../assets/styles/Form.css";
import like from "../../assets/img/like.png";

export default function JoinForm() {
  const [members, setMembers] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    cotisation: 0,
    newsletter: 0,
  });

  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setMembers({ ...members, newsletter: 0 });
    } else {
      setMembers({ ...members, newsletter: 1 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/member`, members).then(
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Le contenu a bien été mis à jour",
        showConfirmButton: false,
        timer: 1500,
      })
    );
  };
  const changeName = (e) => {
    setMembers({ ...members, name: e.target.value });
  };

  const changeLastname = (e) => {
    setMembers({ ...members, lastName: e.target.value });
  };
  const changeEmail = (e) => {
    setMembers({ ...members, email: e.target.value });
  };
  const changeAddress = (e) => {
    setMembers({ ...members, address: e.target.value });
  };
  const changePhone = (e) => {
    setMembers({ ...members, phone: e.target.value });
  };
  const changeCotisation = (e) => {
    setMembers({ ...members, cotisation: e.target.value });
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
                  onChange={changeName}
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
                  onChange={changeLastname}
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
                  onChange={changeEmail}
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
                  onChange={changePhone}
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
                onChange={changeAddress}
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
                    name="cotisation"
                    value="18"
                    onChange={changeCotisation}
                  />
                  <i className="helper" />
                  <Traduction reference="involve_joinform_label_contribution_adherent" />
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="cotisation"
                    value="8"
                    onChange={changeCotisation}
                  />
                  <i className="helper" />
                  <Traduction reference="involve_joinform_label_contribution_adherentjeune" />
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="cotisation"
                    value="100"
                    onChange={changeCotisation}
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
                  checked={isChecked}
                  onChange={checkHandler}
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
