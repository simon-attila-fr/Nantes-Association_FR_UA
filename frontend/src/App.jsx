/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalContext from "./frontuser/contexts/GlobalContext";
import Header from "./frontuser/components/Header";
import Footer from "./frontuser/components/Footer";
import Home from "./frontuser/pages/Home";
import Involve from "./frontuser/pages/Involve";
import Login from "./frontadmin/pages/Login";
import ContentHome from "./frontadmin/pages/ContentHome";
// import ContentInvolve from "./frontadmin/pages/ContentInvolve";
import "./assets/styles/App.css";

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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/involve" element={<Involve />} />
          <Route path="/admin/" element={<Login />} />
          <Route path="/admin/content/home" element={<ContentHome />} />
          {/* <Route path="/admin/content/involve" element={<ContentInvolve />} /> */}
        </Routes>
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}
