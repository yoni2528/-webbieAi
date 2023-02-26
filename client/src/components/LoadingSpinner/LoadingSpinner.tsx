import React from "react";
import Lottie from "lottie-react";

import spinner from "../../assets/spinner.json";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const LoadingSpinner = () => {
  const isLoading = useSelector((state: RootState) => state.spinner.isLoading);

  return (
    <div
      className={`w-full h-[100vh] fixed top-0 backdrop-blur-lg flex items-center justify-center transition-all ${
        isLoading ? "z-[50] opacity-1 visible " : " z-0 opacity-0 invisible"
      }`}
    >
      <div>
        <Lottie className="w-[8rem]" animationData={spinner} loop={true} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
