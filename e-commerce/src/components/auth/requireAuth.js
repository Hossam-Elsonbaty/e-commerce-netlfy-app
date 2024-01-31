import { useAuth } from "./authContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to= "/employee-login" replace state={{path: location.pathname}}/>
  };
  return (
    children
  )
}

export default RequireAuth;