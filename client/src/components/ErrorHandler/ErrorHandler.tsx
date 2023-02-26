import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../../store/Reducers/ErrorHandlerReducer/ErrorHandlerReducer";
import { RootState } from "../../store/store";
import Button from "../Elements/Button/Button";

const ErrorHandler = () => {
  const Error = useSelector((state: RootState) => state.error);

  const dispatch = useDispatch();

  const handleCleanError = () => {
    dispatch(errorActions.removeError());
  };

  return (
    <div
      onClick={handleCleanError}
      className={`w-full h-[100vh]  fixed top-0  flex items-center justify-center transition-all ${
        Error.isError ? "visible" : "invisible"
      }`}
    >
      <div
        className={`w-[350px] shadow-lg  px-8 h-[250px] bg-[white] rounded-lg flex items-start flex-col justify-center gap-4 transition-all ${
          Error.isError ? "scale-100" : "scale-0"
        }`}
      >
        <h3 className="text-xl font-medium">{Error.title}</h3>
        <p className="text-md">{Error.content}</p>
        <Button onClick={handleCleanError} text="Got it" color="#6366F1" />
      </div>
    </div>
  );
};

export default ErrorHandler;
