import React from "react";
import { IconType } from "react-icons";
import RawElement from "../../RawElement/RawElement";

const AdvantageCard: React.FC<{
  title: string;
  content: string;
  Icon: IconType;
  index: number;
}> = ({ title, content, Icon, index }) => {
  return (
    <div className="w-[100%] h-full flex justify-center flex-col gap-2 items-center text-center sm:items-start sm:text-start">
      <Icon className="h-8 w-8" />
      <RawElement
        as={"h3"}
        element={["advantages", index, "title"]}
        elemVal={title}
        customCss="text-title font-bold"
      />
      <RawElement
        as={"p"}
        element={["advantages", index, "content"]}
        elemVal={content}
        customCss="text-subtitle "
      />
    </div>
  );
};

export default AdvantageCard;
