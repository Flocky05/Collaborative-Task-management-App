import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();
    if (user?.uid) return children;
  
    return <Navigate state={{ pathname }} to={"/login"} replace></Navigate>;
    // navigated from pathname
    // passing a props named state
  };