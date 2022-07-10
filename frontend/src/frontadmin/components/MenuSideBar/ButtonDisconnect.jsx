import { Link } from "react-router-dom";

export default function ButtonDisconnect() {
  return (
    <button type="button">
      <Link to="/admin/login"> Se déconnecter </Link>
    </button>
  );
}
