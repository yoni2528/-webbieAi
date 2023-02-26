import React from "react";
import { BsLightning, BsCheck } from "react-icons/bs";
import { WebDataAdvantages } from "../../../store/Reducers/WebDataReducer/types";
import RawElement from "../../RawElement/RawElement";
import UpdateImageInput from "../../UpdateImageInput/UpdateImageInput";

const AdvantageSection2: React.FC<{
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
    <div className="w-full h-[100vh] flex flex-col lg:items-center lg:flex-row justify-center px-6 gap-8">
      <div
        style={{
          backgroundImage: `url("${advtangeImage}")`,
        }}
        className="group w-full h-[200px] lg:h-[80%] rounded-lg lg:translate-x-[-10%] bg-cover bg-center"
      >
        {!hideImageUpload && (
          <UpdateImageInput
            customCss="scale-0 group-hover:scale-100 "
            attribute="image-2"
          />
        )}
      </div>
      <div className="w-full flex items-center justify-start">
        <div className="lg:w-[50%] flex flex-col gap-4 items-start ">
          <div className="bg-[#EEEFFD] p-4 rounded-[50%] hidden lg:flex">
            <BsLightning className={`w-6 h-6 text-[${templateColor}]`} />
          </div>
          <RawElement
            as={"h2"}
            element={["aboutMe", "title"]}
            elemVal={aboutMe.title}
            customCss=" text-[2rem] lg:text-[2.4rem] text-title font-bold leading-[3rem] "
          />
          <RawElement
            as={"p"}
            element={["aboutMe", "subtitle"]}
            elemVal={aboutMe.content}
            customCss="text-subtitle w-full"
          />
          {advantages.map((advantage, index) => {
            return (
              <div key={index} className="flex gap-4 items-center gap-4 mt-4">
                <div className="bg-[#EEEFFD] p-1 rounded-[50%]">
                  <BsCheck className={`w-4 h-4 text-[${templateColor}]`} />
                </div>
                <RawElement
                  element={["advantages", index, "title"]}
                  customCss=""
                  elemVal={advantage.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection2;
