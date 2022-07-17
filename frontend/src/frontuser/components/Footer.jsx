/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import Swal from "sweetalert2";
import data from "./data";
import Legal from "./Legal";
import "../../assets/styles/Footer.css";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import mail from "../../assets/img/mail.svg";
import tel from "../../assets/img/phone.svg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "e-mail obligatoire",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "e-mail enregistré",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="footer fullwidth">
      <div className="gridrow">
        <div className="footerBorderBottom">
          <div className="footerSocial">
            <ul className="footerSocialList">
              <li className="footerSocialChip">
                <a
                  className="footerLink"
                  href="https://m.facebook.com/Association-Avenir-Franco-Ukrainien-110917231562439/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="menuLinkIcon" src={facebook} alt="facebook" />
                </a>
              </li>
              <li className="footerSocialChip">
                <a
                  className="footerLink"
                  href="https://instagram.com/asso_avenirfrancoukrainien?igshid=YmMyMTA2M2Y="
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
              <li className="footerSocialChip">
                <a
                  className="footerLink"
                  href="mailto:assoavenirukrfr@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="menuLinkIcon" src={mail} alt="mail" />
                </a>
              </li>
              <li className="footerSocialChip">
                <a
                  className="footerLink"
                  href="tel:(+33)0632414456"
                  target="_blank"
                  rel="noreferrer"
                >
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
            <div className="container">
              <div className="legalMentions" id="ancre1" />
              <section className="info">
                {questions.map((question) => (
                  <Legal key={question.id} {...question} />
                ))}
              </section>
            </div>
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
