import React from "react";

const Footer1: React.FC<{
  name: string | undefined;
  templateColor: string;
}> = ({ name, templateColor }) => {
  return (
    <div
      style={{ backgroundColor: templateColor }}
      className={`w-full h-full flex items-center justify-center flex-col gap-4 contrast-100`}
    >
      <div className="w-full h-full flex items-center justify-center flex-col gap-4 contrast-100 bg-[#1c1c1c1d]">
        <h3 className="text-white font-bold text-[1.4rem]">
          {name || "John Doe"}
        </h3>
        <ul className="flex gap-4 text-white">
          <li>
            <a href="#top" className="cursor-pointer">
              About me
            </a>
          </li>
          <li>
            <a href="#prod" className="cursor-pointer">
              Products
            </a>
          </li>
          <li>
            <a href="#adv" className="cursor-pointer">
              Servies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer1;
