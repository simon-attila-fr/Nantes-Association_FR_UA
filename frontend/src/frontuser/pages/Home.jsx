import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/styles/Home.css";
import Traduction from "../components/Traduction";
import Mosaic from "../components/Mosaic";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="homeContent">
        <section className="homePresentationAssociation">
          <h3>
            <Traduction reference="home_presentation_title" />
          </h3>
          <h2>
            <Traduction reference="home_presentation_title_section" />
          </h2>
          <p>
            <Traduction reference="home_presentation_content" />
          </p>
          <h3>
            <Traduction reference="home_mission_title" />
          </h3>
          <p>
            <Traduction reference="home_mission_content" />
          </p>
          <h3>
            <Traduction reference="home_values_title" />
          </h3>
          <p>
            <Traduction reference="home_values_content" />
          </p>
        </section>
        <div className="homeMosaic">
          <Mosaic />
        </div>
      </div>
      <Footer />
    </div>
  );
}
