import "../../assets/styles/Home.css";
import Traduction from "../components/Traduction";

export default function Home() {
  return (
    <div>
      <Traduction reference="website_title" />
      <Traduction reference="website_subtitle" />
    </div>
  );
}
