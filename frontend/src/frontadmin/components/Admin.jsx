import { Route, Routes, Link } from "react-router-dom";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Logout from "../pages/Logout";

export default function Admin() {
  return (
    <div>
      <div className="admin">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/logout">Disconnect</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}
