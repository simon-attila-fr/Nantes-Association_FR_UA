import { Route, Routes } from "react-router-dom";
import Login from "./frontadmin/pages/Login";
import Logout from "./frontadmin/pages/Logout";

export default function AppAdmin() {
  return (
    <div>
      <div className="admin">
        <Routes>
          <Route path="/admin/" element={<Login />} />
          <Route path="/admin/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}
