import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import ReactDOMServer from "react-dom/server";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { useParams } from "react-router-dom";

import store, { RootState } from "../../store/store";
import useRequest from "../../hooks/api/useRequest/useRequest";
import { webdataActions } from "../../store/Reducers/WebDataReducer/webDataReducer";

import {
  HeroSection1,
  HeroSection2,
  AdvantageSection1,
  AdvantageSection2,
  ServiceSection1,
} from "../../components/WebsiteElements/index";

import WebsiteDisplay from "../WebsiteDisplay/WebsiteDisplay";
import Toolkit from "../../components/Toolkit/Toolkit";
import CustomizeHeader from "../../components/CustomizeHeader/CustomizeHeader";

const firstWebSet = [HeroSection1, AdvantageSection1, ServiceSection1];
const secoundWebSet = [HeroSection2, AdvantageSection2, ServiceSection1];

const queryClient = new QueryClient();

const TemplateRouter = () => {
  const dispatch = useDispatch();

  const { onGetWebsite } = useRequest();
  const { onDeployWebsite } = useRequest();
  const { id } = useParams();

  const [webSet, setWebSet] = useState<Array<React.ComponentType<any>>>();
  const webId = useSelector((state: RootState) => state.webdata.webData._id);

  const selectedTemplate = useSelector(
    (state: RootState) => state.webdata.webData.template
  );

  useEffect(() => {
    if (!id) return;
    onGetWebsite(id).then((data) => {
      dispatch(
        webdataActions.setWebsiteFromDatabase({
          data: data.data.data,
          images: data.data.data.webImages,
        })
      );
    });
  }, [id]);

  useEffect(() => {
    if (!selectedTemplate) return;
    if (selectedTemplate === 1) {
      setWebSet(firstWebSet);
    }
    if (selectedTemplate === 2) {
      setWebSet(secoundWebSet);
    }
  }, [selectedTemplate]);

  const handleRenderWebsiteToHtml = () => {
    if (!selectedTemplate) return;
    if (!webSet) return;
    const html = ReactDOMServer.renderToStaticMarkup(
      <Provider store={store}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <WebsiteDisplay
              isTransparent={selectedTemplate === 1}
              hideImageUpload={true}
              HeroSection={webSet[0]}
              AdvtangesSection={webSet[1]}
              ServicesSection={webSet[2]}
            />
          </QueryClientProvider>
        </BrowserRouter>
      </Provider>
    );
    const websiteHtml = html.toString();
    onDeployWebsite({ html: websiteHtml, webId: webId });
  };

  return (
    <>
      {webSet && (
        <>
          <div className="absolute bottom-10 left-4 z-50">
            <Toolkit />
          </div>
          <CustomizeHeader onDeployWebsite={handleRenderWebsiteToHtml} />
          <WebsiteDisplay
            isTransparent={selectedTemplate === 1}
            hideImageUpload={false}
            HeroSection={webSet[0]}
            AdvtangesSection={webSet[1]}
            ServicesSection={webSet[2]}
          />
        </>
      )}
    </>
  );
};

export default TemplateRouter;
