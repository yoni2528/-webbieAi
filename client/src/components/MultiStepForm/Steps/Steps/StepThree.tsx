import React, { useEffect, useRef, useState } from "react";
import Button from "../../../Elements/Button/Button";

import { IoColorWandOutline } from "react-icons/io5";

type Props = {
  handleSubmitButton: () => void;
  handlePreviusStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDataSubmit: (data: Array<string>) => void;
  isVisible: boolean;
};

const StepThree: React.FC<Props> = ({
  onDataSubmit,
  isVisible,
  handleSubmitButton,
  handlePreviusStep,
}) => {
  const product1 = useRef<HTMLInputElement>(null);
  const product2 = useRef<HTMLInputElement>(null);
  const product3 = useRef<HTMLInputElement>(null);

  const [formIsValid, setFormIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (!isVisible) {
      if (!product1.current || !product2.current || !product3.current) return;
      if (
        !product1.current.value ||
        !product2.current.value ||
        !product3.current.value
      )
        return;
      onDataSubmit([
        product1.current?.value,
        product2.current?.value,
        product3.current?.value,
      ]);
    }
  }, [isVisible]);

  const handleStepSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !product1.current?.value ||
      !product2.current?.value ||
      !product3.current?.value
    ) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    onDataSubmit([
      product1.current?.value,
      product2.current?.value,
      product3.current?.value,
    ]);
    handleSubmitButton();
  };

  const handleGTPMagicCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDataSubmit(["make one", "make one", "make one"]);
    handleSubmitButton();
  };

  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } flex flex-col gap-8 items-start animate-[fadeIn_0.5s]`}
    >
      <div className="flex flex-col gap-4 w-full">
        <p className="font-medium">Name 3 products your bussniess offer</p>
        <input
          ref={product1}
          className="border-b-2 w-auto p-2"
          placeholder="Product number 1"
        ></input>
        <input
          ref={product2}
          className="border-b-2 w-auto p-2"
          placeholder="Product number 2"
        ></input>
        <input
          ref={product3}
          className="border-b-2 w-auto p-2"
          placeholder="Product number 3"
        ></input>
      </div>
      {!formIsValid && (
        <p className="text-[#ed7979]">Please fill all of the fields</p>
      )}
      <button
        onClick={handleGTPMagicCheck}
        className="flex gap-2 bg-[#6366F1] py-2 px-2 rounded-lg items-center text-sm text-white hover:scale-105"
      >
        Let GPT suprise me
        <IoColorWandOutline className="text-white text-lg" />
      </button>
      <div className="flex gap-4">
        <Button
          customCss="px-4 text-[#333] border-[1px]"
          onClick={handlePreviusStep}
          text="previous"
          color=""
        />
        <Button
          customCss="px-10"
          onClick={handleStepSubmit}
          text="Submit"
          color="#6366F1"
        />
      </div>
    </div>
  );
};

export default StepThree;
