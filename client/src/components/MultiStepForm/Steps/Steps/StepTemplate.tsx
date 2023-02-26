import React, { useState, useRef } from "react";
import Button from "../../../Elements/Button/Button";

import template1 from "../../../../assets/template-1.png";
import template2 from "../../../../assets/template-2.png";
import template3 from "../../../../assets/template-3.png";

const templateList = [
  {
    image: template1,
    id: 1,
  },
  {
    image: template2,
    id: 2,
  },
];

type Props = {
  handleNextStep: () => void;
  handlePreviusStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDataSubmit: ({ template }: { template: number; color: string }) => void;
  isVisible: boolean;
};

const StepTemplate: React.FC<Props> = ({
  onDataSubmit,
  isVisible,
  handleNextStep,
  handlePreviusStep,
}) => {
  const [chooseTemplate, setChooseTemplate] = useState<number>();
  const colorRef = useRef<HTMLInputElement>(null);

  const hanleTemplateChoose = (template: number) => {
    setChooseTemplate(template);
  };

  const [formIsValid, setFormIsValid] = useState<boolean>(true);

  const handleStepSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!chooseTemplate) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    onDataSubmit({
      template: chooseTemplate,
      color: colorRef.current?.value || "#6366F1",
    });
    handleNextStep();
  };

  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } flex flex-col gap-8 items-start animate-[fadeIn_0.5s]`}
    >
      <div className="flex overflow-x-scroll items-center gap-8 scrollbar-hide">
        {templateList.map((template, index) => {
          return (
            <img
              key={index}
              className={`w-[200px] cursor-pointer rounded-lg ${
                chooseTemplate === template.id && "border-4 border-primary"
              } `}
              onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                e.preventDefault();
                hanleTemplateChoose(template.id);
              }}
              src={template.image}
            ></img>
          );
        })}
        <img
          className={`w-[200px] cursor-pointer rounded-lg `}
          src={template3}
        ></img>
      </div>
      <div className="flex items-center gap-4">
        <label className="text-lg" htmlFor="colorpicker">
          Pick a color for your website
        </label>
        <input
          ref={colorRef}
          type="color"
          id="colorpicker"
          className="w-12 h-12 "
          defaultValue={"#6366F1"}
        ></input>
        <p className="text-[#ed7979]">
          {!formIsValid && "You must choose a template to proceed"}
        </p>
      </div>
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

export default StepTemplate;
