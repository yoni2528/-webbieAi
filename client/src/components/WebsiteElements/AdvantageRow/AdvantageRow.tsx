import React from "react";
import { BsLightning, BsCheck } from "react-icons/bs";

const AdvantageRow: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex gap-4 items-center gap-4">
      <div className="bg-[#EEEFFD] p-1 rounded-[50%]">
        <BsCheck className="w-4 h-4 text-[#6366F1]" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default AdvantageRow;
