import "../../assets/styles/MenuBurger.css";

export default function MenuBurger(props) {
  const { handleShowLinks } = props;

  return (
    <>
      <div>
        <ul className="navbar_links">
          <li className="navbar_item">
            <a href="" className="navbar_link">
              ACCUEIL
            </a>
          </li>
          <li className="navbar_item">
            <a href="" className="navbar_link">
              ACTUALITÉS
            </a>
          </li>
          <li className="navbar_item">
            <a href="" className="navbar_link">
              ADHÉRER, DONNER
            </a>
          </li>
        </ul>
      </div>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </>
  );
}