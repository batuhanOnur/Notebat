
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetUserQuery } from '../../features/api/authSlice'

const NavigationGuard = () => {

  const location = useLocation();

  const { isError } = useGetUserQuery();

  return (
    <div>
       {
        isError 
        ? <Navigate to="/login" state={{ from: location }} />
        : <Outlet />
       }
    </div>
  )
}

export default NavigationGuard