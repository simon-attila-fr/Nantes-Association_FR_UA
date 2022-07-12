import "../../assets/styles/Involve.css";
// import ContactForm from "../components/ContactForm";
import arrow from "../../assets/img/arrow.png";
import loveUK from "../../assets/img/loveUK.png";

export default function Involve() {
  return (
    <div className="container">
      <h1>
        <span>Engagez-vous !</span>
        <span>
          Avec un don, en devenant membre ou en participant à nos actions...
        </span>
      </h1>

      <div className="card-container">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <h2>Donnez !</h2>
              <p>
                Faire un don c'est nous permettre d'agir, en menant des actions
                d'aides humanitaires vers les civils ukrainiens victimes de la
                guerre, et de soutenir les réfugiés en France. Votre don est
                précieux, nous avons besoin de votre générosité pour intervenir
                en toute indépendance, afin de soutenir l'Ukraine.
              </p>
              <img className="arrow-icon" alt="arrow" src={arrow} />
            </div>
            <div className="card-back">
              <p>
                Votre don vous donne droit à une réduction d'impôts de 75% de
                son montant dans la limite de 1000 euros de dons (plafond 2020).
                Au-delà, la réduction d’impôt est de 66 % du montant dans la
                limite de 20 % de vos revenus nets imposables. Vous pouvez par
                la suite remplir vos coordonnées personnelles, elles sont
                indispensables pour que nous puissions traiter votre don et vous
                envoyer un reçu fiscal.
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <h2>Adhérez !</h2>
              <p>
                Adhérer à Avenir Franco-Ukrainien c'est soutenir l'Ukraine, en
                lui apportant un peu de votre temps et de vos compétences, c'est
                également contribuer au développement de l'association par les
                participations aux manifestations extérieures : marches pour la
                paix, expositions culturelles, missions de bénévolat.
              </p>
              <img className="arrow-icon" alt="arrow" src={arrow} />
            </div>
            <div className="card-back">
              <p>
                Le montant de votre cotisation sera fonction de votre statut de
                membre : adhérents (15€), adhérents jeunes (8€), ou encore
                adhérents bienfaiteurs, associations, collectivités publiques,
                et autres personnes morales ou membres honoraires (100€). Merci
                de votre engagement et à bientôt parmi nous !
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-front">
              <h2>Contactez-nous !</h2>
              <p>
                N'hésitez pas à prendre contact avec nous pour en savoir plus
                sur l'Association, son fonctionnement, devenir membre et
                participer à nos actions.
              </p>
              <img className="arrow-icon" alt="arrow" src={arrow} />
            </div>
            <div className="card-back">
              <img className="loveUK" alt="love" src={loveUK} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
