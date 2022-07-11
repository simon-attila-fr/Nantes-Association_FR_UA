import HomeAdmin from "../components/MenuSideBar/HomeAdmin";
import DonsAdmin from "../components/MenuSideBar/DonsAdmin";
import ButtonDisconnect from "../components/MenuSideBar/ButtonDisconnect";
import "../../assets/styles/Welcome.css";
// eslint-disable-next-line import/order
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div className="welcome">
      <div className="sidebar">
        <HomeAdmin />
        <DonsAdmin />
        <ButtonDisconnect />
      </div>
      <Outlet />
    </div>
  );
}
