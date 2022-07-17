import JoinForm from "../components/JoinForm";
import ContactForm from "../components/ContactForm";
import "../../assets/styles/Involve.css";
import corner from "../../assets/img/corner.png";
import hand1 from "../../assets/img/hand1.png";
import hand2 from "../../assets/img/hand2.png";
import hand3 from "../../assets/img/hand3.png";
import heart from "../../assets/img/heart.png";

export default function Involve() {
  return (
    <div className="involve-container">
      <p className="involve-title">
        <span className="involve-span-title">Choisissez la Paix,</span>
      </p>
      <p className="involve-title">
        <span className="involve-span-title">soutenez l'Ukraine ! </span>
      </p>

      <div className="card-container">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <img className="involve-pic" alt="hand1" src={hand1} />
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <h2 className="involve-h2">Donnez !</h2>
              <p className="involve-p">
                Faire un don c'est nous permettre d'agir, en menant des actions
                d'aides humanitaires vers les civils ukrainiens victimes de la
                guerre, et de soutenir les réfugiés en France. Votre don est
                précieux, nous avons besoin de votre générosité pour intervenir
                en toute indépendance, afin de soutenir l'Ukraine.
              </p>
              <img className="corner-icon" alt="corner" src={corner} />
            </div>
            <div className="card-back">
              <div>
                <p className="involve-p">
                  Votre don vous donne droit à une réduction d'impôts de 75% de
                  son montant dans la limite de 1000 euros de dons (plafond
                  2020). Au-delà, la réduction d’impôt est de 66 % du montant
                  dans la limite de 20 % de vos revenus nets imposables. Vous
                  pouvez par la suite remplir vos coordonnées personnelles,
                  elles sont indispensables pour que nous puissions traiter
                  votre don et vous envoyer un reçu fiscal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <img className="involve-pic" alt="hand2" src={hand2} />
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <h2 className="involve-h2">Adhérez !</h2>
              <p className="involve-p">
                Adhérer à Avenir Franco-Ukrainien c'est soutenir l'Ukraine, en
                lui apportant un peu de votre temps et de vos compétences, c'est
                également contribuer au développement de l'association par les
                participations aux manifestations extérieures : marches pour la
                paix, expositions culturelles, missions de bénévolat.
              </p>
              <img className="corner-icon" alt="corner" src={corner} />
            </div>
            <div className="card-back">
              <div>
                <p className="involve-p">
                  Le montant de votre cotisation sera fonction de votre statut
                  de membre : adhérents (15€), adhérents jeunes (8€), ou encore
                  adhérents bienfaiteurs, associations, collectivités publiques,
                  et autres personnes morales ou membres honoraires (100€).
                  Merci de votre engagement et à bientôt parmi nous !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <img className="involve-pic" alt="hand3" src={hand3} />
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <h2 className="involve-h2">Participez !</h2>
              <p className="involve-p">
                Nous sommes toujours à la recherche de bonnes volontés pour
                participer à nos actions de collecte, de chargement/déchargement
                de camion, de convoyage ou d'aide aux réfugiés. N'hésitez pas à
                venir vers nous pour nous proposer votre soutien.
              </p>
              <img className="corner-icon" alt="corner" src={corner} />
            </div>
            <div className="card-back">
              <img className="involve-pic" alt="heart" src={heart} />
            </div>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="join-form">
          <JoinForm />
        </div>
        <div className="contact-form">
          <ContactForm />
          <div className="upload-btn-form">
            <a href="../../assets/adhesion.pdf" download className="upload-btn">
              <span className="upload-span-btn">
                Télécharger le formulaire d'adhésion
              </span>
            </a>
          </div>
          <div className="gift-btn-form">
            <a href="crédit mutuel" className="gift-btn">
              <span className="gift-span-btn">Faire un don</span>
            </a>
          </div>
        </div>
      </div>
      <div className="final-img">
        <div id="stripped">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1062">
            <polyline
              points="0,154 131,0 0,348 269,0 0,562 437,0 
	0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
