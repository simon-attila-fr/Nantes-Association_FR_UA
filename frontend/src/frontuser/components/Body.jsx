import { Routes, Route } from "react-router-dom";
import ContentHome from "../../frontadmin/pages/ContentHome";
import Home from "../pages/Home";
import News from "../pages/News";
import Involve from "../pages/Involve";

export default function Body() {
  return (
    <div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/involve" element={<Involve />} />
          <Route path="/admin/content/home" element={<ContentHome />} />
        </Routes>
      </div>
    </div>
  );
}
