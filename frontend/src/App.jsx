import { Routes, Route } from "react-router-dom";
import Involve from "./frontuser/pages/Involve";
import Home from "./frontuser/pages/Home";
import HomeAdmin from "./frontadmin/components/MenuSideBar/HomeAdmin";
import "./assets/styles/App.css";
import ContentHome from "./frontadmin/pages/ContentHome";
import LayoutAdmin from "./frontadmin/pages/Welcome";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/involve" element={<Involve />} />
        </Route>
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route path="/admin/accueil" element={<HomeAdmin />} />
          <Route path="/admin/home" element={<ContentHome />} />
        </Route>
      </Routes>
    </div>
  );
}
