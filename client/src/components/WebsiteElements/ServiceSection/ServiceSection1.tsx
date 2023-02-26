import React from "react";

import { WebDataProducts } from "../../../store/Reducers/WebDataReducer/types";
import ServiceCard from "../ServiceCard/ServiceCard";

import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";

const IconsListNumbers = [TbNumber1, TbNumber2, TbNumber3];

const ServiceSection1: React.FC<{
  products: Array<WebDataProducts>;
  serviceImages: Array<string>;
  templateColor: string;
}> = ({ products, templateColor }) => {
  return (
    <div className="flex flex-col w-[1250px] w-screen m-auto py-12 h-full ">
      <div className="w-full h-full flex">
        <div className="w-full h-full flex justify-center items-center flex-col gap-4 ">
          <h2 className="text-[2.4rem] text-title font-bold leading-[3rem]">
            Our Services
          </h2>
          <p className="text-subtitle text-center">
            Expert solutions for your every need
          </p>
          <div className="overflow-x-scroll snap-mandatory snap-x scrollbar-hide w-[350px] lg:w-[100%] md:flex md:items-center md:justify-center md:overflow-x-hidden ">
            <div className="p-8 flex justify-around gap-12 h-[450px] w-[1200px] items-center">
              {products.map((product, index: number) => {
                return (
                  <div key={index} className="snap-start h-full">
                    <ServiceCard
                      templateColor={templateColor}
                      key={index}
                      title={product.title}
                      content={product.content}
                      Icon={IconsListNumbers[index]}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection1;
