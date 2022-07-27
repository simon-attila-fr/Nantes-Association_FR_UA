import HomeTitleImg from "../../assets/img/homeTitleImg.jpg";
import "../../assets/styles/HomeTitleImage.css";

export default function HomeTitleImage() {
  return (
    <div className="homeTitleImgContainer">
      <img
        className="homeTitleImg"
        src={HomeTitleImg}
        alt="Des mains tenantes un objet au forme coeur aux couleurs de drapeau ukranien"
      />
    </div>
  );
}
