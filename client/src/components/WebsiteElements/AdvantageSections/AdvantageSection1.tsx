import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { WebDataAdvantages } from "../../../store/Reducers/WebDataReducer/types";
import RawElement from "../../RawElement/RawElement";
import UpdateImageInput from "../../UpdateImageInput/UpdateImageInput";
import AdvantageCard from "../AdvantageCard/AdvantageCard";

import { motion } from "framer-motion";

import Button from "../../Elements/Button/Button";

const AdvantageSection1: React.FC<{
  advantages: Array<WebDataAdvantages>;
  aboutMe: { title: string; content: string };
  advtangeImage: string;
  hideImageUpload: boolean;
  templateColor: string;
}> = ({
  advantages,
  aboutMe,
  advtangeImage,
  hideImageUpload,
  templateColor,
}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-12 w-content m-auto px-[2rem] lg:px-[10rem]">
      <div className="flex w-full gap-8 flex-col-reverse sm:items-center lg:flex-row">
        <div className=" sm:w-2/3">
          <RawElement
            as={"h2"}
            element={["aboutMe", "title"]}
            elemVal={aboutMe.title}
            customCss="text-[1.4rem] font-bold lg:text-[2rem]"
          />
          <RawElement
            as={"p"}
            element={["aboutMe", "subtitle"]}
            elemVal={aboutMe.content}
            customCss="text-subtitle w-full"
          />
          <Button
            color={templateColor}
            text="Get In Touch"
            customCss="mt-4"
          ></Button>
        </div>
        <div className="group relative h-full">
          {!hideImageUpload && (
            <UpdateImageInput
              attribute="image-2"
              customCss="scale-0 group-hover:scale-100 absolute top-10 right-40 sm:right-[40%] "
            />
          )}
          <img
            className="w-[350px] rounded-lg sm:w-[550px]"
            src={advtangeImage}
          ></img>
        </div>
      </div>
      <div className=" flex gap-6 sm:flex-row mr-12 sm:w-full hidden lg:flex">
        {advantages.map((advantage, index) => {
          return (
            <AdvantageCard
              title={advantage.title}
              Icon={IoStarOutline}
              content={advantage.content}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdvantageSection1;
