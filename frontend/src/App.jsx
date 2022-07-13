/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalContext from "./frontuser/contexts/GlobalContext";
import Home from "./frontuser/pages/Home";
import Involve from "./frontuser/pages/Involve";
import Login from "./frontadmin/pages/Login";
import ContentHome from "./frontadmin/pages/ContentHome";
import "./assets/styles/App.css";
import LayoutAdmin from "./frontadmin/pages/Welcome";
import ContentInvolve from "./frontadmin/pages/ContentInvolve";

export default function App() {
  const [traduction, setTraduction] = useState({});
  const [lang, setLang] = useState("FR");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/traduction`)
      .then((response) => response.json())
      .then((data) => setTraduction(data));
  }, []);

  return (
    <div className="app">
      <GlobalContext.Provider value={{ traduction, lang, setLang }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/involve" element={<Involve />} />
          <Route path="/admin/" element={<LayoutAdmin />}>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/accueil" element={<ContentHome />} />
            <Route path="/admin/donation" element={<ContentInvolve />} />
          </Route>
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
}
