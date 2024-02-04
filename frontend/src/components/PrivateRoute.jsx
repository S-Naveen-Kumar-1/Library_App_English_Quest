import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isAUTH } = useSelector((store) => store.authReducer);
  console.log(isAUTH, "isauth");
  return isAUTH ? (
    children
  ) : (
    <Navigate state={location.pathname} replace={true} to={"/login"} />
  );
};
