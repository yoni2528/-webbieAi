import React from "react";
import Button from "../../Elements/Button/Button";
import RawElement from "../../RawElement/RawElement";

const HeroSection2: React.FC<{
  title: string;
  subtitle: string;
  heroBGImage: string;
}> = ({ title, subtitle, heroBGImage }) => {
  return (
    <section className="text-gray-600 body-font h-[100vh] flex items-center w-[1250px] m-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <RawElement
            as={"h1"}
            element="title"
            elemVal={title}
            customCss="title-font sm:text-[4rem] leading-[4.4rem] text-3xl mb-4 font-medium text-gray-900"
          />
          {title}

          <RawElement
            as={"p"}
            element="title"
            elemVal={subtitle}
            customCss="mb-8 leading-relaxed"
          />
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroBGImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
