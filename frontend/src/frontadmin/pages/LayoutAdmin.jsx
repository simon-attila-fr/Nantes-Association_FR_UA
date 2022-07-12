import { Outlet } from "react-router-dom";
import "../../assets/styles/Welcome.css";
import NavAdmin from "../components/NavAdmin";
import "../components/NavAdmin.css";

export default function LayoutAdmin() {
  return (
    <div className="welcome">
      <NavAdmin />
      <div style={{ marginLeft: "17rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
