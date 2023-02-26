import Axios from "axios";
import { BASE_URL } from "../../../config/Config";

import { WebDetails } from "../../../components/MultiStepForm/Steps/StepHandler/StepHandler";

import { WebData } from "../../../store/Reducers/WebDataReducer/types";

const useEndpoints = () => {
  const baseAxios = Axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

  const handleWebsiteDetails = async (WebDetails: WebDetails) => {
    const res = await baseAxios.post("/app/v1/website-details", WebDetails);
    return res;
  };

  const handleUpdateWebsiteDetails = async ({
    WebDetails,
    webId,
  }: {
    WebDetails: { staticUrl?: string | number; color?: string } | WebData;
    webId: string | undefined;
  }) => {
    const res = await baseAxios.patch("/app/v1/website", {
      data: WebDetails,
      webId,
    });
    return res;
  };

  const handleSaveWebsite = async (webData: WebData) => {
    const res = await baseAxios.post("/app/v1/webiste", webData);
    return res;
  };

  const handleGetWebsites = async () => {
    const res = await baseAxios.get("/app/v1/website");
    return res;
  };

  const handleGetWebsite = async (webId: string) => {
    const res = await baseAxios.get(`/app/v1/website/edit/${webId}`);
    return res;
  };

  const handleGetPrompts = async () => {
    const res = await baseAxios.get("/app/v1/website/prompt");
    return res;
  };

  const handleSavePrompts = async (WebDetails: WebDetails) => {
    const res = await baseAxios.post("/app/v1/website/prompt", WebDetails);
    return res;
  };

  const handleUploadSnapshot = async (snapshot: FormData) => {
    const res = await baseAxios.post("/app/v1/website/upload", snapshot);
    return res;
  };

  const handleUpdatePrompt = async (WebDetails: WebDetails) => {
    const res = await baseAxios.patch("/app/v1/website/prompt", WebDetails);
    return res;
  };

  const handleUpdateWebsiteImages = async (file: FormData) => {
    const res = await baseAxios.post("/app/v1/website/update/image", file);
    return res;
  };

  const handleDeleteWebsite = async (webId: string) => {
    const res = await baseAxios.delete(`/app/v1/website/${webId}`);
    return res;
  };
  const handleDeletePrompt = async (promptId: string) => {
    const res = await baseAxios.delete(`/app/v1/website/prompt/${promptId}`);
    return res;
  };

  const handleDeployWebsite = async ({
    html,
    webId,
  }: {
    html: string;
    webId: string;
  }) => {
    const res = await baseAxios.post("/app/v1/website/deploy", {
      html,
      webId,
    });
    return res;
  };

  return {
    handleWebsiteDetails,
    handleSaveWebsite,
    handleGetPrompts,
    handleSavePrompts,
    handleUpdatePrompt,
    handleUpdateWebsiteDetails,
    handleGetWebsites,
    handleUploadSnapshot,
    handleUpdateWebsiteImages,
    handleDeployWebsite,
    handleGetWebsite,
    handleDeleteWebsite,
    handleDeletePrompt,
  };
};

export default useEndpoints;
