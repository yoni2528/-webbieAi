import React from "react";
import EditArrow from "../../EditArrow/EditArrow";
import Button from "../../Elements/Button/Button";
import RawElement from "../../RawElement/RawElement";
import UpdateImageInput from "../../UpdateImageInput/UpdateImageInput";

const HeroSection2: React.FC<{
  title: string;
  subtitle: string;
  heroBGImage: string;
  hideImageUpload: boolean;
  templateColor: string;
}> = ({ title, subtitle, heroBGImage, hideImageUpload, templateColor }) => {
  return (
    <div className="lg:mx-20 mx-8 h-full m-auto flex items-center justify-center">
      <div className="w-[100%] h-[60%] flex flex-col-reverse lg:flex-row gap-12 items-center justify-center mt-20">
        <div className="w-full flex justify-center items-center flex-col gap-4 text-center lg:items-start lg:text-start lg:gap-6 relative ">
          {!hideImageUpload && (
            <EditArrow
              customCSS="text-[#111] font-medium top-[-20%] text-md"
              iconColor="#111"
            />
          )}
          <RawElement
            element="title"
            as={"h1"}
            elemVal={title}
            customCss={
              "text-title text-[1.8rem] xl:text-[2.8rem] md:text-[1.6rem] font-bold line-lg leading-[2.4rem] lg:leading-[3.6rem]"
            }
          />
          <RawElement
            element="subtitle"
            as={"p"}
            elemVal={subtitle}
            customCss={"text-subtitle text-lg"}
          />
          <div className="flex gap-4">
            <Button color={templateColor} text="Get Started"></Button>
            <Button
              color="transparent"
              text="Learn More"
              customCss="text-[#333]"
            ></Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center relative">
          <div
            style={{ backgroundImage: `url("${heroBGImage}")` }}
            className="group w-[450px] h-[300px] lg:w-[500px] lg:h-[350px] rounded-lg z-10 bg-cover relative bg-center"
          >
            {!hideImageUpload && (
              <UpdateImageInput
                attribute="image-0"
                customCss="scale-0 group-hover:scale-100"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
