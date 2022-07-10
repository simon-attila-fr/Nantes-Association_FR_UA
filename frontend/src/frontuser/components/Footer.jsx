/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import data from "./data";
import Legal from "./Legal";
import "../../assets/styles/Footer.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import mail from "../../assets/mail.svg";
import tel from "../../assets/phone.svg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      // eslint-disable-next-line no-alert
      alert("Veuillez entrer votre email");
    }
  };

  return (
    <div className="footer fullwidth">
      <div className="gridrow">
        <div className="footerBorderBottom">
          <div className="footerSocial">
            <ul className="footerSocialList">
              <li>
                <a
                  href="https://m.facebook.com/Association-Avenir-Franco-Ukrainien-110917231562439/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="menuLinkIcon" src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/?next=/tryzubasso/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="menuLinkIcon"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:assoavenirukrfr@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="menuLinkIcon" src={mail} alt="mail" />
                </a>
              </li>
              <li>
                <a href="tel:(+33)0632414456" target="_blank" rel="noreferrer">
                  <img className="menuLinkIcon" src={tel} alt="tel" />
                </a>
              </li>
            </ul>
          </div>
          <h5 className="signupTitle">Inscrivez vous à la newsletter</h5>
          <div className="signupFormContainer">
            <form onSubmit={handleSubmit} className="newsletterSignup">
              <input
                className="newsletterEmail"
                id="email"
                name="email"
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="newsletterSubmit" type="submit" value="submit">
                Envoyer
              </button>
            </form>
          </div>
          <div className="legalMentionsContainer">
            <main>
              <div className="container">
                <h3 className="legalMentions" id="ancre1">
                  Mentions légales & Politique de Confidentialité
                </h3>
                <section className="info">
                  {questions.map((question) => (
                    <Legal key={question.id} {...question} />
                  ))}
                </section>
              </div>
            </main>
          </div>
        </div>
        <div className="copyrightContainer">
          <p className="copyright">
            {" "}
            &copy;{new Date().getFullYear()} Association Avenir Franco Ukrainien
          </p>
        </div>
      </div>
    </div>
  );
}
