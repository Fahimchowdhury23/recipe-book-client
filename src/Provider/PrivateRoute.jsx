import React, { use } from "react";
import Loader from "../Components/Loader";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
