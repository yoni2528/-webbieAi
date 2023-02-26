import React, { useEffect, useState } from "react";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";

import { useDispatch } from "react-redux";

import useRequest from "../../../../hooks/api/useRequest/useRequest";
import { webdataActions } from "../../../../store/Reducers/WebDataReducer/webDataReducer";
import StepTemplate from "../Steps/StepTemplate";

export type WebDetails = {
  name?: string;
  work?: string;
  email?: string;
  advantages?: Array<string>;
  products?: Array<string>;
  _id?: string;
  date?: Date;
  template?: number;
  [key: string]: any;
};

export type StepOneType = {
  name: string;
  work: string;
  email: string;
};

export type Props = {
  handleNextStep: () => void;
  handlePreviusStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmitButton: () => void;
  step: number;
  isSubmited: boolean;
};

const StepHandler: React.FC<Props> = ({
  step,
  isSubmited,
  handleNextStep,
  handlePreviusStep,
  handleSubmitButton,
}) => {
  const [dataBank, setDataBank] = useState<WebDetails>();
  const { onWebsiteRequest } = useRequest();
  const dispatch = useDispatch();

  const handleCollectOne = (stepOneData: StepOneType) => {
    setDataBank(stepOneData);
  };
  const handleCollectTwo = (stepTwoData: Array<string>) => {
    setDataBank({ ...dataBank, advantages: stepTwoData });
  };
  const handleCollectThree = (stepThreeData: Array<string>) => {
    setDataBank({ ...dataBank, products: stepThreeData });
  };
  const handleCollectFour = ({
    template,
    color,
  }: {
    template: number;
    color: string;
  }) => {
    setDataBank({ ...dataBank, template: template, color });
  };

  useEffect(() => {
    if (isSubmited) {
      if (!dataBank?.products) return;
      onWebsiteRequest(dataBank);
      dispatch(webdataActions.setWebDetails(dataBank));
    }
  }, [isSubmited, dataBank]);

  return (
    <div>
      <StepOne
        handleNextStep={handleNextStep}
        isVisible={step === 0}
        onDataSubmit={handleCollectOne}
      />
      <StepTemplate
        handleNextStep={handleNextStep}
        handlePreviusStep={handlePreviusStep}
        isVisible={step === 1}
        onDataSubmit={handleCollectFour}
      />
      <StepTwo
        handleNextStep={handleNextStep}
        handlePreviusStep={handlePreviusStep}
        isVisible={step === 2}
        onDataSubmit={handleCollectTwo}
      />
      <StepThree
        handleSubmitButton={handleSubmitButton}
        isVisible={step === 3}
        onDataSubmit={handleCollectThree}
        handlePreviusStep={handlePreviusStep}
      />
    </div>
  );
};

export default StepHandler;
