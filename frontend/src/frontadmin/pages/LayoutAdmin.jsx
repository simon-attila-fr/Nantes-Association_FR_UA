import { Outlet } from "react-router-dom";
import NavAdmin from "../components/NavAdmin";
import "../../assets/styles/NavAdmin.css";
import "../../assets/styles/Layout.css";

export default function LayoutAdmin() {
  return (
    <div className="layout">
      <NavAdmin />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
