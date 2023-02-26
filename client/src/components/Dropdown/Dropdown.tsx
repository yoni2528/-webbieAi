import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

type Props = {
  children: React.ReactNode;
  text: string;
};

const Dropdown: React.FC<Props> = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-col relative">
      <div className=" w-full flex justify-between bg-[white] rounded-lg p-2 z-12">
        <p className="text-sm text-[#6366F1] font-medium">{text}</p>
        <button onClick={handleToggle}>
          <IoChevronDown className="text-[#6366F1]" />
        </button>
      </div>

      <div
        className={`${
          isOpen ? "h-[180px]" : "h-[0px]"
        } flex flex-col gap-4 absolute w-full z-14 top-7 bg-[white] transition-all duration-700 overflow-hidden`}
      >
        <div className="p-4 flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
