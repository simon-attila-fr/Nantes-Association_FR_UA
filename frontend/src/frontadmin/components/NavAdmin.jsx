import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEdit, AiOutlineHeart } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";

export default function NavAdmin() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(
        setAuth({
          id: "",
          email: "",
          status: [""],
          loggedIn: false,
        })
      )
      .then(navigate("/admin/", { replace: true }))
      .catch((error) => console.error(error));
  }

  return (
    <aside className="sidebar">
      <div>
        <NavLink to="/admin">
          <div className="espace-admin">Espace Administrateur</div>
        </NavLink>
        <nav>
          <ul>
            <li className="nav-category">
              <NavLink to="/admin/accueil">
                <h4>
                  <span>
                    <AiOutlineEdit />
                  </span>
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
                <li className="nav-detail">
                  <NavLink to="/admin/other"> Autre contenu </NavLink>
                </li>
                <li className="nav-detail">
                  <NavLink to="/admin/photos"> Photos </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-category">
              <NavLink to="">
                <h4>
                  <span>
                    <AiOutlineHeart />
                  </span>
                  Gérer les membres
                </h4>
              </NavLink>
              <ul>
                <li className="nav-detail">
                  <NavLink to="/admin/membre">Tous les membres</NavLink>
                </li>
                <li className="nav-detail">
                  <NavLink to="/admin/addmembre">Ajouter un membre</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={auth.loggedIn === true ? "disconnect" : "disconnect-hidden"}
      >
        <button type="submit" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
    </aside>
  );
}
