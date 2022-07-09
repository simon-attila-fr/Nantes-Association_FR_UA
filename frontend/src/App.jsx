import { Routes, Route } from "react-router-dom";
import Header from "./frontuser/components/Header";
import Footer from "./frontuser/components/Footer";
import Home from "./frontuser/pages/Home";
import Involve from "./frontuser/pages/Involve";
import HomeAdmin from "./frontadmin/components/MenuSideBar/HomeAdmin";
import NewsAdmin from "./frontadmin/components/MenuSideBar/NewsAdmin";
import DonsAdmin from "./frontadmin/components/MenuSideBar/DonsAdmin";
import ButtonDisconnect from "./frontadmin/components/MenuSideBar/ButtonDisconnect";
import "./assets/styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/involve" element={<Involve />} />
        <Route path="/admin/" element={<ButtonDisconnect />} />
        <Route path="/admin/accueil" element={<HomeAdmin />} />
        <Route path="/admin/actualites" element={<NewsAdmin />} />
        <Route path="/admin/donation" element={<DonsAdmin />} />
      </Routes>
      <Footer />
    </div>
  );
}
