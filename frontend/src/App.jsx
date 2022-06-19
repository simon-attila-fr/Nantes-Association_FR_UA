import Header from "./frontuser/components/Header";
import Body from "./frontuser/components/Body";
import Footer from "./frontuser/components/Footer";
import Admin from "./frontadmin/components/Admin";

import "./assets/styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
      <Admin />
    </div>
  );
}
