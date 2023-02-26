import React, { useRef, useState } from "react";
import Button from "../../../Elements/Button/Button";

import { IoColorWandOutline } from "react-icons/io5";

type Props = {
  handleNextStep: () => void;
  handlePreviusStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDataSubmit: (data: Array<string>) => void;
  isVisible: boolean;
};

const StepTwo: React.FC<Props> = ({
  isVisible,
  onDataSubmit,
  handleNextStep,
  handlePreviusStep,
}) => {
  const advtange1 = useRef<HTMLInputElement>(null);
  const advtange2 = useRef<HTMLInputElement>(null);
  const advtange3 = useRef<HTMLInputElement>(null);

  const [formIsValid, setFormIsValid] = useState<boolean>(true);

  const handleStepSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !advtange1.current?.value ||
      !advtange2.current?.value ||
      !advtange3.current?.value
    ) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    onDataSubmit([
      advtange1.current?.value,
      advtange2.current?.value,
      advtange3.current?.value,
    ]);
    handleNextStep();
  };

  const handleGTPMagicCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDataSubmit(["make one", "make one", "make one"]);
    handleNextStep();
  };

  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } flex flex-col gap-8 w-full animate-[fadeIn_0.5s] `}
    >
      <div className="flex flex-col gap-4 w-full">
        <p className="font-medium">Name 3 advtanges of your bussiness</p>
        <input
          ref={advtange1}
          className="border-b-2 w-auto p-2"
          placeholder="advantage 1"
        ></input>
        <input
          ref={advtange2}
          className="border-b-2 w-auto p-2"
          placeholder="advantage 2"
        ></input>
        <input
          ref={advtange3}
          className="border-b-2 w-auto p-2"
          placeholder="advantage 3"
        ></input>
      </div>
      {!formIsValid && (
        <p className="text-[#ed7979]">Please fill all of the fields</p>
      )}
      <button
        onClick={handleGTPMagicCheck}
        className="flex gap-2 bg-[#6366F1] py-2 px-2 rounded-lg items-center text-sm text-white hover:scale-105 w-fit"
      >
        Let GPT suprise me
        <IoColorWandOutline className="text-white text-lg" />
      </button>

      <div className="flex gap-4">
        <Button
          customCss="px-6 text-[#333] border-[1px]"
          onClick={handlePreviusStep}
          text="previous"
          color=""
        />
        <Button
          customCss="px-10"
          onClick={handleStepSubmit}
          text="next"
          color="#6366F1"
        />
      </div>
    </div>
  );
};

export default StepTwo;
