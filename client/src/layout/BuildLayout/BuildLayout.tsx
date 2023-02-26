import React from "react";

type Props = {
  children: React.ReactNode;
};

const BuildLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#eee] animate-[fade_1s]">
      <div className=" w-[90%] md:w-1/2 rounded-lg border-2 p-6 sm:p-12 gap-12  bg-[white]">
        {children}
      </div>
    </div>
  );
};

export default BuildLayout;
