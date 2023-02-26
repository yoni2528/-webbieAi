import React from "react";
import { IconType } from "react-icons";

const IconWithBackground: React.FC<{
  bgColor: string;
  Icon: IconType;
  color: string;
}> = ({ bgColor, Icon, color }) => {
  return (
    <div
      className={`bg-[${bgColor}] h-[30px] w-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full text-[${color}]`}
    >
      <Icon className="text-white w-3 h-3 md:w-3 md:h-3" />
    </div>
  );
};

export default IconWithBackground;
