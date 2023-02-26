import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useRequest from "../../hooks/api/useRequest/useRequest";

import { useDispatch } from "react-redux";
import { webdataActions } from "../../store/Reducers/WebDataReducer/webDataReducer";

import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import { WebDetails } from "../../components/MultiStepForm/Steps/StepHandler/StepHandler";
import WebsiteCard from "../../components/WebsiteCard/WebsiteCard";
import EmptyWebsiteCard from "../../components/EmptyWebsiteCard/EmptyWebsiteCard";

const Websites = () => {
  const { onGetWebsites } = useRequest();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [websiteList, setWebsiteList] = useState<Array<WebDetails>>();

  useEffect(() => {
    dispatch(webdataActions.cleanWebDetails());
    if (!onGetWebsites) return;
    onGetWebsites.mutateAsync().then((data) => {
      if (!data.data) return;
      setWebsiteList(data.data.data);
    });
  }, []);

  const handleWebsiteClick = (website: WebDetails) => {
    navigate(`/website/${website.id}/edit`);
  };

  return (
    <DashboardLayout>
      <div className="w-full rounded-lg p-12 flex-col animate-[fadeIn_0.5s] relative">
        <div className="w-full "></div>
        <ul className="grid grid-cols-1 h-full gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-3">
          {websiteList?.map((website, index) => {
            return (
              <WebsiteCard
                key={index}
                onWebsiteClick={handleWebsiteClick}
                index={index}
                website={website}
              />
            );
          }) || (
            <>
              <Skeleton className="h-[200px] sm: lg:" />
            </>
          )}
          <EmptyWebsiteCard />
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default Websites;
