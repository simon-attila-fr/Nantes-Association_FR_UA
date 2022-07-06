import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Involve from "../pages/Involve";
import InvolveAdmin from "../../frontadmin/components/InvolveAdmin";

export default function Body() {
  return (
    <div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/involve" element={<Involve />} />
        </Routes>
      </div>
      <InvolveAdmin />
    </div>
  );
}
