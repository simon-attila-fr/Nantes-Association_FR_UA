import { Route, Routes, Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";

export default function Admin() {
  return (
    <div>
      <div className="admin">
        <nav>
          <ul>
            <li>
              <Link to="/admin/login">Login</Link>
            </li>
            <li>
              <Link to="/admin/register">Register</Link>
            </li>
            <li>
              <Link to="/admin/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}
