import "../../assets/styles/Involve.css";
import Don from "../components/Don";

export default function Involve() {
  return (
    <div className="involve-section">
      <div className="donate-block">
        <h2 className="donate-title">Donnez !</h2>
        <div className="donate-content">
          <p className="donate-content-text">
            Faire un don c'est nous permettre d'agir, en menant des actions
            d'aides humanitaires vers les civils ukrainiens victimes de la
            guerre, et de soutenir les réfugiés en France. Votre don est
            précieux, nous avons besoin de votre générosité pour intervenir en
            toute indépendance, afin de soutenir l'Ukraine.
          </p>
        </div>
        <div className="donate-bonus">
          <p className="donate-bonus-text">
            <strong>Bon à savoir :</strong> Votre don vous donne droit à une
            réduction d'impôts de 75% de son montant dans la limite de 1000
            euros de dons (plafond 2020). Au-delà, la réduction d’impôt est de
            66 % du montant dans la limite de 20 % de vos revenus nets
            imposables. Vous pouvez par la suite remplir vos coordonnées
            personnelles, elles sont indispensables pour que nous puissions
            traiter votre don et vous envoyer un reçu fiscal.
          </p>
          <div className="don-button">
            <Don />
          </div>
        </div>
      </div>

      <div className="join-block">
        <h2 className="join-title">Adhérez !</h2>
        <div className="join-content">
          <p className="join-content-text">
            Adhérer à Avenir Franco-Ukrainien c'est soutenir l'Ukraine, en lui
            apportant un peu de votre temps et de vos compétences, c'est
            également contribuer au développement de l'association par les
            participations aux manifestations extérieures : marches pour la
            paix, expositions culturelles, missions de bénévolat.
          </p>
        </div>
        <div className="join-bonus">
          <p className="join-bonus-text">
            <strong>Bon à savoir :</strong> Le montant de votre cotisation sera
            fonction de votre statut de membre : adhérents (15€), adhérents
            jeunes (8€), ou encore adhérents bienfaiteurs, associations,
            collectivités publiques, et autres personnes morales ou membres
            honoraires (100€). Merci de votre engagement et à bientôt parmi nous
            !
          </p>
        </div>
        <div className="join-form">
          <p className="join-form-text">
            Remplissez le formulaire ci-dessous en complétant bien tous les
            champs afin de devenir adhérent de l'Association. Nous reviendrons
            vers vous dès que votre adhésion sera enregistrée pour le réglement
            de votre cotisation et l'envoi de votre reçu fiscal.
          </p>
        </div>
        <button className="join-button" type="button">
          <a href="formulaire d'adhésion.pdf" download>
            Télécharger notre formulaire d'adhésion
          </a>
        </button>
      </div>

      <div className="contact-block">
        <h2 className="contact-title">Ecrivez-nous !</h2>
        <div className="contact-content">
          <p className="contact-content-text">
            N'hésitez pas à prendre contact avec nous pour en savoir plus sur
            l'Association, son fonctionnement, devenir membre et participer à
            nos actions.
          </p>
        </div>
      </div>
    </div>
  );
}
