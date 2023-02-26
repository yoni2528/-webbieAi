import React from "react";
import { IconType } from "react-icons";
import RawElement from "../../RawElement/RawElement";

const ServiceCard: React.FC<{
  title: string;
  content: string;
  Icon: IconType;
  index: number;
  templateColor: string;
}> = ({ title, content, Icon, index, templateColor }) => {
  return (
    <div className="bg-[#f9f9f9] w-[350px] h-full rounded-lg flex flex-col items-center pt-12 px-8 gap-2 relative justify-center">
      <div
        style={{ backgroundColor: templateColor }}
        className=" rounded-[50%] w-[100px] h-[100px]  flex items-center justify-center absolute top-10"
      >
        <div
          style={{ backgroundColor: templateColor }}
          className={`rounded-[50%] w-12 h-12 flex items-center justify-center brightness-125 `}
        >
          <Icon className="text-white w-6 h-6 " />
        </div>
      </div>
      <div className="h-1/3 w-full text-center">
        <RawElement
          element={["products", index, "title"]}
          customCss="text-[1.4rem] text-title font-bold leading-[2.4rem] mt-4 relative"
          elemVal={title}
        />
        <RawElement
          element={["products", index, "content"]}
          customCss="text-subtitle text-center text-[0.875rem] relative"
          elemVal={content}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
