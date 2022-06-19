import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Involve from "../pages/Involve";

export default function Body() {
  return (
    <div>
      <div className="body">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/involve">Involve</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/involve" element={<Involve />} />
        </Routes>
      </div>
    </div>
  );
}
