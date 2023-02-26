import React, { useRef, useState } from "react";
import { StepOneType } from "../StepHandler/StepHandler";
import Button from "../../../Elements/Button/Button";

export type Props = {
  handleNextStep: () => void;
  onDataSubmit: (StepOneType: StepOneType) => void;
  isVisible: boolean;
};

const StepOne: React.FC<Props> = ({
  onDataSubmit,
  isVisible,
  handleNextStep,
}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const workRef = useRef<HTMLInputElement>(null);
  const webToneRef = useRef<HTMLInputElement>(null);

  const [formIsValid, setFormIsValid] = useState<boolean>(true);

  const handleStepSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !nameRef.current?.value ||
      !workRef.current?.value ||
      !webToneRef.current?.value
    ) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    onDataSubmit({
      name: nameRef.current?.value,
      work: workRef.current?.value,
      email: webToneRef.current?.value,
    });
    handleNextStep();
  };

  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } flex flex-col gap-8 items-start animate-[fadeIn_0.5s]`}
    >
      <div className="flex flex-col 2xl:flex-row gap-4 w-full ">
        <div className="flex flex-col sm:flex-row sm:items-end  gap-4">
          <p className="font-medium">My name is</p>
          <input
            ref={nameRef}
            className={`border-b-2 w-auto px-1 `}
            placeholder="John Doe"
          ></input>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mt-4 sm:mt-0">
          <p className="font-medium">I work as a </p>
          <input
            ref={workRef}
            className="border-b-2 w-auto px-1"
            placeholder="Dog Trainer"
          ></input>
        </div>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center w-full ">
        <p className="font-medium">My Email is </p>
        <input
          placeholder="Email"
          ref={webToneRef}
          className="border-b-2 w-auto px-1"
        ></input>
      </div>
      <p className="text-[#f57474]">
        {!formIsValid && "Please fill all of the fields"}
      </p>
      <Button
        onClick={handleStepSubmit}
        customCss="px-10"
        text="next"
        color="#6366F1"
      />
    </div>
  );
};

export default StepOne;
