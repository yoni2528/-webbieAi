import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { authActions } from "./store/Reducers/AuthReducer/AuthReducer";

import ProtectedRoute from "./navigator/ProtectedRoute";

import { LoadingSpinner, ErrorHandler } from "./components/index";
import {
  LoadingWebsite,
  ErrorPage,
  Prompts,
  Builder,
  Websites,
  TemplateRouter,
  Login,
  Signup,
} from "./routers/index";

function App() {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    dispatch(authActions.login());
  }, [isLogin]);

  return (
    <>
      <LoadingWebsite />
      <Routes>
        <Route
          path="/websites"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <Websites />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/builder"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <Builder />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/website/:id/edit" element={<TemplateRouter />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
        <Route path="/prompts" element={<Prompts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Navigate to={"/login"} />}></Route>
        <Route path="*" element={<Navigate to={"/login"} />}></Route>
      </Routes>
      <LoadingSpinner />
      <ErrorHandler />
    </>
  );
}

export default App;
