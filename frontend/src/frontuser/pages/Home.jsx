import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/styles/Home.css";
import Traduction from "../components/Traduction";
import Mosaic from "../components/Mosaic";
import HomeH2Img from "../../assets/img/HomeH2Img.png1657639372003.png";

export default function Home() {
  return (
    <div className="HomePage">
      <Header />
      <div className="homeContent">
        <section className="homePresentationAssociation">
          <h2>
            <Traduction reference="home_presentation_title_section" />
          </h2>
          <div className="homeArticles">
            <article className="homePresentationArticle">
              <div className="homeSectionTitleZone">
                <img src={HomeH2Img} alt="a" />
                <h3>
                  <Traduction reference="home_presentation_title" />
                </h3>
              </div>
              <p>
                <Traduction reference="home_presentation_content" />
              </p>
            </article>
            <article className="homeMissionArticle">
              <div className="homeSectionTitleZone">
                <img src={HomeH2Img} alt="a" />
                <h3>
                  <Traduction reference="home_mission_title" />
                </h3>
              </div>
              <p>
                <Traduction reference="home_mission_content" />
              </p>
            </article>
            <article className="homeValuesArticle">
              <div className="homeSectionTitleZone">
                <img src={HomeH2Img} alt="a" />
                <h3>
                  <Traduction reference="home_values_title" />
                </h3>
              </div>
              <p>
                <Traduction reference="home_values_content" />
              </p>
            </article>
          </div>
        </section>
        <div className="homeMosaic">
          <Mosaic />
        </div>
      </div>
      <Footer />
    </div>
  );
}
