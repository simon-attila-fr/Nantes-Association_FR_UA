import { Routes, Route } from "react-router-dom";
import Header from "./frontuser/components/Header";
import Footer from "./frontuser/components/Footer";
import Home from "./frontuser/pages/Home";
import Involve from "./frontuser/pages/Involve";
import ContentHome from "./frontadmin/pages/ContentHome";
// import ContentInvolve from "./frontadmin/pages/ContentInvolve";
import Login from "./frontadmin/pages/Login";
import "./assets/styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/involve" element={<Involve />} />
        <Route path="/admin/" element={<Login />} />
        <Route path="/admin/content/home" element={<ContentHome />} />
        {/* <Route path="/admin/content/involve" element={<ContentInvolve/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
