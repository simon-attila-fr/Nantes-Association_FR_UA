import "../../assets/styles/Involve.css";

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
            <strong>Bon à savoir :</strong> Votre don vous donne droit à une réduction d'impôts
            de 75% de son montant dans la limite de 1000 euros de dons (plafond
            2020). Au-delà, la réduction d’impôt est de 66 % du montant dans la
            limite de 20 % de vos revenus nets imposables. Vous pouvez par la
            suite remplir vos coordonnées personnelles, elles sont
            indispensables pour que nous puissions traiter votre don et vous
            envoyer un reçu fiscal.
          </p>
        </div>
      </div>
      <div className="join-block">
        <h2 className="join-title">Adhérez !</h2>
        <div className="join-content">
          <p className="join-content-text">
            Faire un don c'est nous permettre d'agir, en menant des actions
            d'aides humanitaires vers les civils ukrainiens victimes de la
            guerre, et de soutenir les réfugiés en France. Votre don est
            précieux, nous avons besoin de votre générosité pour intervenir en
            toute indépendance, afin de soutenir l'Ukraine.
          </p>
        </div>
        <div className="join-bonus">
          <p className="join-bonus-text">
            <strong>Bon à savoir :</strong> Le montant de votre cotisation sera fonction de votre
            statut de membre : adhérents (15€), adhérents jeunes (8€), ou encore
            adhérents bienfaiteurs, associations, collectivités publiques, et
            autres personnes morales ou membres honoraires (100€). Merci de
            votre engagement et à bientôt parmi nous
          </p>
        </div>
        <div className="join-form">
          <p className="join-form-text">
            Remplissez le formulaire ci-dessous en complétant bien tous les
            champs afin de devenir adhérent de l'Association. Nous reviendrons
            vers vous dès que votre adhésion sera enregistrée pour le réglement
            de votre cotisation et l'envoi de votre reçu fiscal.
          </p>
          <form>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
      <div className="contact-block">
        <h2 className="contact-title">Contactez-nous !</h2>
        <div className="contact-content">
          <p className="contact-content-text">
            N'hésitez pas à prendre contact avec nous pour en savoir plus sur
            l'Association, son fonctionnement, devenir membre et participer à
            nos actions.
          </p>
          <form>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
      <div className="infos-block">
        <h2 className="infos-title">Restez en contact !</h2>
        <div className="donate-content">
          <p className="donate-content-text">
            N'hésitez pas à nous appeler si vous préférez vous entretenir de
            vive-voix avec nous :
            <ul>
              <li>Julia Lambert 06.71.73.83.49</li>
              <li>Oleksandra Rouxel 06.32.41.44.56</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
