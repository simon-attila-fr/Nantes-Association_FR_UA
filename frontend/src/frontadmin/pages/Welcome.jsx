import { Route, Routes } from "react-router-dom";
import HomeAdmin from "../components/MenuSideBar/HomeAdmin";
import NewsAdmin from "../components/MenuSideBar/NewsAdmin";
import DonsAdmin from "../components/MenuSideBar/DonsAdmin";
import ButtonDisconnect from "../components/MenuSideBar/ButtonDisconnect";
import "../../assets/styles/Welcome.css";

export default function Welcome() {
  return (
    <div className="sidebar">
      <Routes>
        <Route path="/admin/accueil" element={<HomeAdmin />} />
        <Route path="/admin/actualites" element={<NewsAdmin />} />
        <Route path="/admin/donation" element={<DonsAdmin />} />
        <Route path="/admin/login" element={<ButtonDisconnect />} />
      </Routes>
    </div>
  );
}
