/* eslint-disable react/prop-types */
import "../../assets/styles/MenuBurger.css";

export default function MenuBurger(props) {
  const { handleShowLinks } = props;

  return (
    <>
      <div>
        <ul className="navbar_links">
          <li className="navbar_item">
            <p className="navbar_link">ACCUEIL</p>
          </li>
          <li className="navbar_item">
            <p className="navbar_link">ACTUALITÉS</p>
          </li>
          <li className="navbar_item">
            <p className="navbar_link">ADHÉRER, DONNER</p>
          </li>
        </ul>
      </div>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </>
  );
}
