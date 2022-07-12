import { NavLink } from "react-router-dom";
import { AiOutlineEdit, AiOutlineHeart } from "react-icons/ai";

export default function NavAdmin() {
  return (
    <aside className="sidebar">
      <div>
        <div className="espace-admin">Espace Administrateur</div>
        <nav>
          <ul>
            <li className="nav-category">
              <NavLink to="/admin/accueil">
                {" "}
                <h4>
                  <span>
                    {" "}
                    <AiOutlineEdit />{" "}
                  </span>{" "}
                  Editer le contenu
                </h4>
              </NavLink>
              <ul>
                <li className="nav-detail">
                  <NavLink to="/admin/accueil"> Page accueil </NavLink>
                </li>
                <li className="nav-detail">
                  <NavLink to="/admin/donation"> Page engagement </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-category">
              <NavLink to="">
                {" "}
                <h4>
                  <span>
                    {" "}
                    <AiOutlineHeart />
                  </span>
                  Gérer les membres
                </h4>
              </NavLink>
              <ul>
                <li className="nav-detail">
                  <NavLink to="/admin/logout">Tous les membres</NavLink>
                </li>
                <li className="nav-detail">
                  <NavLink to="/admin/logout">Ajouter un membre</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="disconnect"> Se déconnecter</div>
    </aside>
  );
}
