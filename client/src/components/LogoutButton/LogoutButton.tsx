import React from "react";
import Button from "../Elements/Button/Button";

import { useDispatch } from "react-redux";
import { authActions } from "../../store/Reducers/AuthReducer/AuthReducer";

import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Button
      onClick={handleLogout}
      text="Logout"
      color="transparent"
      customCss="text-white"
    ></Button>
  );
};

export default LogoutButton;
