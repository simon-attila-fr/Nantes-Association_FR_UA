import { Routes, Route } from "react-router-dom";
import Header from "./frontuser/components/Header";
import Footer from "./frontuser/components/Footer";
import Home from "./frontuser/pages/Home";
import Involve from "./frontuser/pages/Involve";
import HomeAdmin from "./frontadmin/components/MenuSideBar/HomeAdmin";
import NewsAdmin from "./frontadmin/components/MenuSideBar/NewsAdmin";
import DonsAdmin from "./frontadmin/components/MenuSideBar/DonsAdmin";
import "./assets/styles/App.css";
import Welcome from "./frontadmin/pages/Welcome";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/involve" element={<Involve />} />
        </Route>
        <Route path="/admin/" element={<Welcome />}>
          <Route path="/admin/accueil" element={<HomeAdmin />} />
          <Route path="/admin/actualites" element={<NewsAdmin />} />
          <Route path="/admin/donation" element={<DonsAdmin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
