
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetUserQuery } from '../../features/api/authSlice'

const NavigationGuard = () => {

  const location = useLocation();

  const { isError } = useGetUserQuery();

    
  if(isError) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return (
    <Outlet />
  )
}

export default NavigationGuard