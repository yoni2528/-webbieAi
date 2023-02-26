import React, { useState } from "react";
import StepHandler from "./Steps/StepHandler/StepHandler";
import IconWithBackground from "../Elements/Button/IconWithBackground";
import { Link } from "react-router-dom";
import { websiteSteps } from "./StepData";

const MultistepForm = () => {
  const [step, setStep] = useState<number>(0);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviusStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmitButton = () => {
    setStep(step + 1);
    setIsSubmited(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <Link to={"/websites"}>
        <p className="text-sm hover:text-[#555]">&larr; Go back to dashboard</p>
      </Link>
      <div className="flex items-center gap-4 mb-6 border-b-2 border-b-[#eee] pb-4">
        <IconWithBackground
          color="white"
          bgColor="#6366F1"
          Icon={websiteSteps[step].Icon}
        />
        <div className="flex flex-col justify-center gap-1 w-[85%]">
          <h2 className="text-title font-bold text-[1rem] sm:text-[1.4rem] lg:text-[1.4rem]">
            {websiteSteps[step].title}
          </h2>
          <p className="text-subtitle text-[0.7em] sm:text-[0.875rem]">
            {websiteSteps[step].subtitle}
          </p>
        </div>
      </div>
      <form className=" items-start w-full">
        <StepHandler
          handleNextStep={handleNextStep}
          handlePreviusStep={handlePreviusStep}
          handleSubmitButton={handleSubmitButton}
          isSubmited={isSubmited}
          step={step}
        />
        <div className="flex gap-4"></div>
      </form>
    </div>
  );
};

export default MultistepForm;
