import React, { useEffect, useState } from "react";
import Prompt from "../../components/Prompt/Prompt";
import { WebDetails } from "../../components/MultiStepForm/Steps/StepHandler/StepHandler";
import useRequest from "../../hooks/api/useRequest/useRequest";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Lottie from "lottie-react";

import dryLottie from "../../assets/dry.json";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Prompts = () => {
  const { onGetPrompts } = useRequest();

  const [promptList, setPromptList] = useState<Array<WebDetails>>();
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!onGetPrompts) return;
    onGetPrompts.mutateAsync().then((data) => {
      if (!data.data) return;
      setPromptList(data.data.data);
    });
  }, [isDelete]);

  const toggleDelete = () => {
    setIsDelete(!isDelete);
  };

  return (
    <DashboardLayout>
      <div className="w-full h-full sm:p-12 p-4 rounded-lg flex-col animate-[fadeIn_0.5s]">
        <div className="rounded-lg">
          <ul className="grid  grid-cols-1 gap-4 items-start justify-start sm:grid-cols-2 lg:grid-cols-2 ">
            {(promptList &&
              promptList.map((prompt, index) => {
                return (
                  <Prompt
                    key={index}
                    title={`${prompt.name} | ${prompt.work}`}
                    values={prompt}
                    date={prompt.date?.toLocaleString()}
                    onDelete={toggleDelete}
                  />
                );
              })) || <Skeleton className="h-[80px]" />}
          </ul>
        </div>
        {promptList?.length === 0 && (
          <div className="flex flex-col gap-2 w-full items-center justify-center text-center">
            <Lottie
              className="w-[12rem]"
              animationData={dryLottie}
              loop={true}
            />
            <h3 className="text-xl font-bold">
              Looks like you dont have any prompts yet
            </h3>
            <p>
              but the good news is that you have the power to fill it,
              <br></br>
              Creating your own unique prompt never been so easy!
            </p>
            <Button
              onClick={() => {
                navigate("/builder");
              }}
              color="#6366F1"
              text="Create Now"
              customCss="mt-2"
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Prompts;
