import React from "react";

const Header1: React.FC<{
  isTransparent: boolean;
  name: string | undefined;
  templateColor: string;
  hidePublish: boolean;
}> = ({ isTransparent, name, templateColor, hidePublish }) => {
  return (
    <header
      style={{
        backgroundColor: isTransparent ? "transparent" : `${templateColor}`,
      }}
      className={`text-gray-600 body-font w-[100%] m-auto absolute py-2 z-20 px-[2%] ${
        !hidePublish && "top-12"
      }  `}
    >
      <div className="text-white hover:text-white container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className=" text-xl text-white">{name || "John Doe"}</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="#adv" className="mr-5 hover:scale-105 transition all">
            Services
          </a>
          <a href="#prod" className="mr-5 hover:scale-105 transition all  ">
            Products
          </a>
          <a href="#contact" className="mr-5 hover:scale-105 transition all ">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header1;
