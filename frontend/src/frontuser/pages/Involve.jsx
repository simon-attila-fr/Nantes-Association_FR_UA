import "../../assets/styles/InvolveAdmin.css";

export default function Involve() {
  return (
    <div>
      <div className="donate_block">
        <form className="donate_fr">
          <label htmlFor="donate">
            Donner
            <input
              type="text"
              name="donate_title"
              id="donate_title"
              value=""
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="donate_text">
            Pourquoi il est important de donner...
            <textarea
              type="text"
              name="donate_text"
              id="donate_text"
              value=""
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" onClick="">
            Sauvegarder
          </button>
        </form>

        <form className="donate_uk">
          <label className="donate_title_uk" htmlFor="donate">
            Дайте
            <input
              type="text"
              name="donate_title"
              id="donate_title"
              value=""
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="donate_text_uk" htmlFor="donate_text">
            Чому важливо давати...
            <textarea
              type="text"
              name="donate_text"
              id="donate_text"
              value=""
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" onClick="">
            Для захисту
          </button>
        </form>
      </div>

      <div className="join_block">
        <form className="join_fr">
          <label className="join_title_fr" htmlFor="join">
            Adhérer
            <input
              type="text"
              name="join_title"
              id="join_title"
              value=""
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="join_text_fr" htmlFor="join_text">
            Pourquoi il est important d'adhérer...
            <textarea
              type="text"
              name="join_text"
              id="join_text"
              value=""
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" onClick="">
            Sauvegarder
          </button>
        </form>

        <form className="join_uk">
          <label className="join_title_uk" htmlFor="join">
            приєднатися
            <input
              type="text"
              name="join_title"
              id="join_title"
              value=""
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="join_text_uk" htmlFor="join_text">
            Ччому важливо приєднатися...
            <textarea
              type="text"
              name="join_text"
              id="join_text"
              value=""
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" onClick="">
            Для захисту
          </button>
        </form>
      </div>

      <div className="contact_block">
        <form className="contact_fr">
          <label htmlFor="contact">
            Contacter
            <input
              type="text"
              name="contact_title"
              id="conatct_title"
              value=""
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="conatct_text">
            Pourquoi nous contacter...
            <textarea
              type="text"
              name="contact_text"
              id="contact_text"
              value=""
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" onClick="">
            Sauvegarder
          </button>
        </form>

        <form className="contact_uk">
          <label htmlFor="contact">
            Контакти
            <input
              type="text"
              name="contact_title"
              id="contact_title"
              value=""
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="contact_text">
            Чому звертатися до нас...
            <textarea
              type="text"
              name="contact_text"
              id="contact_text"
              value=""
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" onClick="">
            Для захисту
          </button>
        </form>
      </div>
    </div>
  );
}
