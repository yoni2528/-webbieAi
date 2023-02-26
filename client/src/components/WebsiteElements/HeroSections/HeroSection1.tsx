import React from "react";
import EditArrow from "../../EditArrow/EditArrow";
import Button from "../../Elements/Button/Button";
import RawElement from "../../RawElement/RawElement";
import UpdateImageInput from "../../UpdateImageInput/UpdateImageInput";

const HeroSection1: React.FC<{
  title: string;
  subtitle: string;
  heroBGImage: string;
  hideImageUpload: boolean;
  templateColor: string;
}> = ({ title, subtitle, heroBGImage, hideImageUpload, templateColor }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${heroBGImage}")` }}
        className="w-full h-[100vh] bg-cover bg-center snap-center relative "
      >
        {!hideImageUpload && (
          <UpdateImageInput
            customCss="top-[20%] right-[33%] sm:top-20 sm:right-12"
            attribute="image-0"
          />
        )}
        <div className="w-full px-2 h-[100vh] bg-gradient-to-r from-[#010005a7] to-[#1A121F] flex items-center justify-center flex-col gap-6">
          <div className="w-full flex flex-col items-center gap-4 relative">
            {!hideImageUpload && (
              <EditArrow customCSS="text-[white]" iconColor="white" />
            )}
            <RawElement
              as={"h1"}
              element="title"
              elemVal={title}
              customCss="text-white text-[2.4rem] lg:text-[3rem] font-bold line-sm leading-[3rem] sm:leading-[4.4rem] text-center"
            />

            <RawElement
              as={"p"}
              element="subtitle"
              elemVal={subtitle}
              customCss="w-[80%] sm:w-1/2 text-white text-lg text-center"
            />
          </div>
          <div className="flex gap-1 items-center">
            <Button color={templateColor} text="Get Started"></Button>
            <Button color="transparent" text="Learn More"></Button>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default HeroSection1;
