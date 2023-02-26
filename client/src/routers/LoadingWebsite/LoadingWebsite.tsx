import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Lottie from "lottie-react";

import WebDevelopment from "../../assets/website-development.json";
import { RootState } from "../../store/store";

import { randomFacts } from "../../assets/randomFacts";

const LoadingWebsite = () => {
  const [currentFact, setCurrentFact] = useState<number>(0);
  const [triggerChange, setTriggerChange] = useState<boolean>(false);

  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    setTimeout(() => {
      if (currentFact === 9) {
        setCurrentFact(0);
      } else {
        setTriggerChange(true);
        setTimeout(() => {
          setTriggerChange(false);
          setCurrentFact(currentFact + 1);
        }, 1000);
      }
    }, 10000);
  }, [currentFact]);

  return (
    <div
      style={{ display: `${isLoading ? "flex" : "none"}` }}
      className="w-full h-[100vh] flex items-center justify-center flex-col gap-4  absolute top-0 left-0 bg-[white] z-50"
    >
      <Lottie
        className="w-[20rem]"
        animationData={WebDevelopment}
        loop={true}
      />
      <h2 className="text-title text-lg">We are working on your website...</h2>
      <p
        className={`${
          triggerChange ? "opacity-0" : "opacity-1"
        } text-subtitle lg:text-[0.875rem] text-[1rem] transition-all duration-500 text-center px-12`}
      >
        {/* {DumbData?.data[currentFact].fact} */}
        {randomFacts[currentFact].fact}
      </p>
    </div>
  );
};

export default LoadingWebsite;
