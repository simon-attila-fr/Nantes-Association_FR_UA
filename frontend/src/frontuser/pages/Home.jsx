import "../../assets/styles/Home.css";
import Traduction from "../components/Traduction";

export default function Home() {
  return (
    <div>
      <Traduction reference="home_website_title" />
      <Traduction reference="home_website_subtitle" />
    </div>
  );
}
