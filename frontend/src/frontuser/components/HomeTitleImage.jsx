import HomeTitleImg from "../../assets/img/homeTitleImg.jpg";
import "../../assets/styles/Logo.css";

export default function HomeTitleImage() {
  return (
    <img
      className="homeTitleImg"
      src={HomeTitleImg}
      alt="Des mains tenantes un objet de fourme coeur aux couleurs de drapeau ukranien"
    />
  );
}
