import { Routes, Route } from "react-router-dom";
import Header from "./frontuser/components/Header";
import Footer from "./frontuser/components/Footer";
import Home from "./frontuser/pages/Home";
import Involve from "./frontuser/pages/Involve";
// import ContentHome from "./frontadmin/components/MenuSideBar/ContentHome";
// import ContentInvolve from "./frontadmin/components/MenuSideBar/ContentInvolve";
import ButtonDisconnect from "./frontadmin/components/MenuSideBar/ButtonDisconnect";
import "./assets/styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/involve" element={<Involve />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin/" element={<ButtonDisconnect />}>
          {/* <Route path="/admin/content/home" element={<ContentHome />} />
          <Route path="/admin/content/involve" element={<ContentInvolve />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
