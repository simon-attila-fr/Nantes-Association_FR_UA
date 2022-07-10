/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import "../../assets/styles/Footer.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import mail from "../../assets/mail.svg";
import tel from "../../assets/phone.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

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
            <div id="div-accordion" className="container-accordions">
              <section className="juridique">
                <h5 className="legalMentions" id="ancre1">
                  Mentions légales & Politique de Confidentialité
                </h5>
                <button className="accordion active" type="button">
                  Mentions légales
                </button>
                <div className="panel">
                  <p>
                    L’adresse du site est : https://www. Contact : Marianne –
                    Nantes – assoavenirukrfr@gmail.com Hébergeur : 1&1 IONOS SE
                    – Elgendorfer Str. 57 – 56410 Montabaur – Allemagne +49 (0)
                    721 170 555
                  </p>
                </div>
                <button className="accordion active" type="button">
                  Politique de Confidentialité
                </button>
                <div className="panel">
                  <p>
                    Le site n’utilise aucun cookie, ne contient aucune
                    publicité, aucun traceur, aucune statistique. Aucune
                    information n’est collectée sur les visiteurs du site. Les
                    seules informations collectées le sont par l’hébergeur et
                    concernent les fichiers journaux légaux et obligatoires des
                    accès au site. Biensûr, lorsque vous adhérez à
                    l'association, nous collectons les informations que vous
                    nous avez volontairement transmises à cette fin. Ces données
                    ne seront utilisées que dans le cadre stricte de
                    l'association pour gérer l'adhésion mais elles ne seront pas
                    données ou vendues à des entités tierces. En outre, vous
                    disposez d'un droit d'accès et de rectification sur vos
                    données en prenant contact à l'adresse mail suivante :
                    <a
                      href="mailto:assoavenirukrfr@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className="copyrightContainer">
            <p className="copyright">
              {" "}
              &copy;{new Date().getFullYear()} Association Avenir Franco
              Ukrainien
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
