import React, { useState } from "react";
import "../../assets/styles/ContactForm.css";

export default function ContactForm() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contactFormFormContainer">
      <form className="contactFormForm" onSubmit={handleSubmit}>
        <input
          className="inputContact"
          type="text"
          minLength={8}
          placeholder="Votre nom ou raison sociale"
          required
        />
        <input
          className="inputContact"
          type="text"
          min={5}
          placeholder="Objet de la demande"
          required
        />
        <input
          className="inputContact"
          type="email"
          placeholder="exemple@email.fr"
          required
        />
        <textarea name="message" minLength="16" cols="30" rows="10" required />
        <input
          onClick={() => setMessage(!message)}
          className="contactFormSubmit"
          type="submit"
          value="Envoyer"
        />
        {message && (
          <p className="contactFormMessage">
            Nous avons bien reçu votre message
          </p>
        )}
      </form>
    </div>
  );
}
