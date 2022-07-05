import "../../assets/styles/JoinForm.css";

export default function JoinForm() {
  return (
    <div className="container">
      <form id="contact" action="" method="post">
        <h3>Formulaire d'Adhésion</h3>
        <h4>
          Adhérez aujourd'hui et vous obtiendrez un retour de notre part dans
          les 48H
        </h4>
        <fieldset>
          <input
            placeholder="Vos nom et prénom"
            type="text"
            tabIndex="a"
            required
          />
        </fieldset>
        <fieldset>
          <input placeholder="Votre Email" type="email" tabIndex="b" required />
        </fieldset>
        <fieldset>
          <input
            placeholder="Votre numéro de téléphone"
            type="tel"
            tabIndex="c"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Votre adresse"
            type="text"
            tabIndex="d"
            required
          />
          <input
            placeholder="Votre code postal"
            type="text"
            tabIndex="e"
            required
          />
          <input placeholder="Votre ville" type="text" tabIndex="e" required />
        </fieldset>
        <fieldset>
          <label htmlFor="newsletter" className="checkbox">
            <div className="newsletter">
              Cochez si vous voulez recevoir la newsletter
              <input
                type="checkbox"
                className="newsletter-checkbox"
                name="checkbox"
                id=""
              />
            </div>
          </label>
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Si vous voulez nous joindre un message"
            tabIndex="f"
            required
          />
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            ADHERER
          </button>
        </fieldset>
      </form>
    </div>
  );
}
