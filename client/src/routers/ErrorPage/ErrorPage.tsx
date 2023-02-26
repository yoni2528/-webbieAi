import React from "react";

import Lottie from "lottie-react";

import serverError from "../../assets/server-error.json";
import Button from "../../components/Elements/Button/Button";

import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  h-[100vh] flex items-center justify-center flex-col gap-4 animate-[fade_1s] absolute top-0 left-0 bg-[white]">
      <Lottie className="w-[20rem]" animationData={serverError} loop={true} />
      <h2 className="text-title text-lg">
        Oops, theres a server error, try again later!
      </h2>
      <Button
        color="#6366F1"
        text="Go Back To Prompt"
        onClick={() => {
          navigate("/prompts");
        }}
      ></Button>
    </div>
  );
};

export default ErrorPage;
