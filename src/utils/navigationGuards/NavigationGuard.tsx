
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"

const NavigationGuard = () => {

  const auth = useAuth();
  const location = useLocation();


  return auth.isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default NavigationGuard