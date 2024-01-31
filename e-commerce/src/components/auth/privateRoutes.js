import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./authContext";

const PrivateRoutes = ()=>{
  const auth = useAuth();
  const location = useLocation();
  return(
    auth.user ? <Outlet/> : <Navigate to= "/employee-login" replace state={{path: location.pathname}}/>
  )
}
export default PrivateRoutes;