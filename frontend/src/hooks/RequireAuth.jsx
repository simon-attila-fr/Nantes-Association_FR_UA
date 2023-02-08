import { useLocation, Navigate, Outlet } from "react-router-dom";
import propTypes from "prop-types";
import useAuth from "./useAuth";

function RequireAuth({ allowedStatuses }) {
  const { auth } = useAuth();
  const location = useLocation();

  // eslint-disable-next-line no-nested-ternary
  return auth?.status?.find((status) => allowedStatuses.includes(status)) ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/admin/login" state={{ from: location }} replace />
  );
}

RequireAuth.propTypes = {
  allowedStatuses: propTypes.arrayOf(propTypes.string).isRequired,
};

export default RequireAuth;
