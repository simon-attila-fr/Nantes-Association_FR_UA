import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Involve from "../pages/Involve";

export default function Body() {
  return (
    <div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/involve" element={<Involve />} />
        </Routes>
      </div>
    </div>
  );
}
