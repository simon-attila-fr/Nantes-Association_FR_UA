import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/styles/Home.css";
import Traduction from "../components/Traduction";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <h1>Home</h1>
        <p>
          I'm baby ramps etsy pinterest, lyft plaid taxidermy sustainable DSA
          raw denim direct trade shabby chic pour-over. Crucifix hella
          microdosing heirloom messenger bag, tofu slow-carb. Banh mi 8-bit
          hammock man braid mixtape microdosing polaroid put a bird on it
          cardigan tacos fashion axe. Adaptogen pickled plaid poutine church-key
          pour-over flannel biodiesel yes plz. Prism freegan migas messenger bag
          truffaut pok pok fashion axe wolf farm-to-table. Banh mi live-edge
          tacos woke, leggings keffiyeh blue bottle wayfarers normcore. Dummy
          text? More like dummy thicc text, amirite?
        </p>
        <div>
          <Traduction reference="website_title" />
          <Traduction reference="website_subtitle" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
