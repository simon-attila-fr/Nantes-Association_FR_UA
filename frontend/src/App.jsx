import { Routes, Route } from "react-router-dom";
import Header from "./frontuser/components/Header";
import Footer from "./frontuser/components/Footer";
import Home from "./frontuser/pages/Home";
import "./assets/styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
