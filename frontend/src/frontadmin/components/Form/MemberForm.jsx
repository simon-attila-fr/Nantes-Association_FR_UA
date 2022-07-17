/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../../assets/styles/memberform.css";

export default function MemberForm() {
  const [members, setMembers] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    cotisation: "",
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
    <div className="memberadmin">
      <form
        className="form_memberadmin"
        name="membre"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor={members.name}>Prénom</label>
        <input type="text" name="name" onChange={changeName} />

        <label htmlFor={members.lastName}>Nom</label>
        <input type="text" name="lastName" onChange={changeLastname} />

        <label htmlFor={members.email}>Email</label>
        <input type="text" name="email" onChange={changeEmail} />

        <label htmlFor={members.address}>Adresse</label>
        <input type="text" name="adress" onChange={changeAddress} />

        <label htmlFor={members.phone}>Téléphone</label>
        <input type="number" name="telephone" onChange={changePhone} />

        <label htmlFor={members.cotisation}>Cotisation</label>
        <input type="number" name="cotisation" onChange={changeCotisation} />

        <label htmlFor={members.newsletter}>
          Inscription à la newsletter
          <input
            className="inputCheck"
            type="checkbox"
            checked={isChecked}
            onChange={checkHandler}
          />
        </label>

        <button className="btn-addmember" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
