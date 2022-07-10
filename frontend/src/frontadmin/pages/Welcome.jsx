import HomeAdmin from "../components/MenuSideBar/HomeAdmin";
import NewsAdmin from "../components/MenuSideBar/NewsAdmin";
import DonsAdmin from "../components/MenuSideBar/DonsAdmin";
import ButtonDisconnect from "../components/MenuSideBar/ButtonDisconnect";
import "../../assets/styles/Welcome.css";
// eslint-disable-next-line import/order
import { Outlet } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <div className="sidebar">
        <HomeAdmin />
        <NewsAdmin />
        <DonsAdmin />
        <ButtonDisconnect />
      </div>
      <Outlet />
    </div>
  );
}
