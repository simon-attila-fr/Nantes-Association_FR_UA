import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Involve from "../pages/Involve";
import News from "../pages/News";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Involve" element={<Involve />} />
      </Routes>
    </div>
  );
}
