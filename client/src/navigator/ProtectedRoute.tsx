import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {
  children: React.ReactNode;
  isLogin: boolean;
};

const ProtectedRoute: React.FC<Props> = ({ children, isLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) return;
    navigate("/login");
  }, []);

  return <>{isLogin ? children : null}</>;
};

export default ProtectedRoute;
