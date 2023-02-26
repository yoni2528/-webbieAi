import React from "react";

import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/store";

import useEndpoints from "../useEndpoints/useEndpoints";

import { handleExtractImageUrlFromDB } from "../../../utils/ImageExtractor";
import { loadWebsiteActions } from "../../../store/Reducers/LoadWebsiteReducer/LoadWebsiteReducer";
import { webdataActions } from "../../../store/Reducers/WebDataReducer/webDataReducer";
import { errorActions } from "../../../store/Reducers/ErrorHandlerReducer/ErrorHandlerReducer";
import { spinnerActions } from "../../../store/Reducers/LoadingSpinnerReducer/LoadingSpinnerReducer";

const useRequest = () => {
  const {
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
  } = useEndpoints();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const webId = useSelector((state: RootState) => state.webdata.webData._id);

  const handleSpinner = {
    onMutate: () => {
      dispatch(spinnerActions.startSpinner());
    },
    onSettled() {
      dispatch(spinnerActions.stopSpinner());
    },
  };

  const { mutate: onCreateNewWebsite } = useMutation(handleWebsiteDetails, {
    onSuccess: (webData) => {
      dispatch(webdataActions.insertWebData(webData.data));
      navigate(`/website/${webData.data.webId}/edit`);
    },
    onMutate: (variables) => {
      dispatch(loadWebsiteActions.startLoader());
      if (variables.isUpdate) return;
      handleSavePrompt.mutate({ ...variables });
    },
    onSettled: () => {
      dispatch(loadWebsiteActions.stopLoader());
    },
    onError: () => {
      navigate("/error");
    },
  });

  const onGetPrompts = useMutation(handleGetPrompts, {
    onError(
      error: AxiosError<{ title: string; message: string; error: string }>
    ) {
      if (error.response?.status === 401) {
        dispatch(
          errorActions.setError({
            title: error.response.data.title,
            content: error.response.data.error,
          })
        );
        navigate("/login");
      }
    },
  });

  const onGetWebsites = useMutation(handleGetWebsites, {
    onError(
      error: AxiosError<{ title: string; message: string; error: string }>
    ) {
      if (!error.response) return;
      dispatch(
        errorActions.setError({
          title: error.response.data.title,
          content: error.response.data.error,
        })
      );
      navigate("/login");
    },
  });

  const { mutate: onUpdateWebsiteImage } = useMutation(
    handleUpdateWebsiteImages,
    {
      onSuccess: (data) => {
        const images = handleExtractImageUrlFromDB(data.data.data.webImages);
        dispatch(webdataActions.insertWebData(data.data));
        dispatch(webdataActions.setWebImages(images));
      },
      ...handleSpinner,
    }
  );

  const { mutate: onDeployWebsite } = useMutation(handleDeployWebsite, {
    onSuccess: (data) => {
      const staticUrl: { staticUrl: string } = {
        staticUrl: data.data.staticUrl,
      };
      if (!staticUrl) return;
      onWebsiteUpdateDetails({ WebDetails: staticUrl, webId });
      navigate("/websites");
      window.open(data.data.staticUrl, "_blank");
    },
    ...handleSpinner,
  });

  const { mutate: onDeleteWebsite } = useMutation(handleDeleteWebsite, {
    onSuccess() {
      navigate("/websites");
    },
    ...handleSpinner,
  });

  const onDeletePrompt = useMutation(handleDeletePrompt, {
    onSuccess() {
      // navigate("/prompts");
    },
    ...handleSpinner,
  });
  const { mutateAsync: onGetWebsite } = useMutation(handleGetWebsite, {
    ...handleSpinner,
  });
  const handleSavePrompt = useMutation(handleSavePrompts);
  const { mutate: onUpdatePrompt } = useMutation(handleUpdatePrompt);
  const { mutate: onSaveWebsite } = useMutation(handleSaveWebsite);
  const { mutate: onUploadSnapshot } = useMutation(handleUploadSnapshot);
  const { mutate: onWebsiteUpdateDetails } = useMutation(
    handleUpdateWebsiteDetails
  );

  return {
    onWebsiteRequest: onCreateNewWebsite,
    onSaveWebsite,
    onGetPrompts,
    onUpdatePrompt,
    onGetWebsites,
    onUploadSnapshot,
    onWebsiteUpdateDetails,
    onUpdateWebsiteImage,
    onDeployWebsite,
    onGetWebsite,
    onDeleteWebsite,
    onDeletePrompt,
  };
};

export default useRequest;
