import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Involve from "../pages/Involve";
import InvolveAdmin from "../../frontadmin/components/InvolveAdmin";

export default function Body() {
  return (
    <div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/involve" element={<Involve />} />
        </Routes>
      </div>
      <InvolveAdmin />
    </div>
  );
}
