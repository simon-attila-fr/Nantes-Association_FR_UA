import separator from "../../assets/img/MotifKalinaDesktop.svg";
import "../../assets/styles/Separator.css";

export default function Separator() {
  return (
    <img
      className="separator"
      src={separator}
      alt="Separateur d'espace inspiré par le folklore ukranien."
    />
  );
}
