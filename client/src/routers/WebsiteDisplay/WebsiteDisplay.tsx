import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { toPng } from "html-to-image";

import useRequest from "../../hooks/api/useRequest/useRequest";

import { RootState } from "../../store/store";
import { dataURLtoFile } from "../../utils/dataUrlToFile";

import { WebDataAdvantages } from "../../store/Reducers/WebDataReducer/types";
import { WebDataProducts } from "../../store/Reducers/WebDataReducer/types";

import {
  Header1,
  Footer1,
  Contact1,
} from "../../components/WebsiteElements/index";

export interface WebsiteProps {
  isTransparent: boolean;
  hideImageUpload: boolean;
  HeroSection: React.ComponentType<{
    hideImageUpload?: boolean;
    title: string;
    subtitle: string;
    heroBGImage: string;
    templateColor: string;
  }>;
  AdvtangesSection: React.ComponentType<{
    hideImageUpload?: boolean;
    advantages: Array<WebDataAdvantages>;
    aboutMe: { title: string; content: string };
    advtangeImage: string;
    templateColor: string;
  }>;
  ServicesSection: React.ComponentType<{
    products: Array<WebDataProducts>;
    serviceImages: Array<string>;
    templateColor: string;
  }>;
}

const WebsiteDisplay: React.FC<WebsiteProps> = ({
  HeroSection,
  AdvtangesSection,
  ServicesSection,
  hideImageUpload,
  isTransparent,
}) => {
  const webData = useSelector((state: RootState) => state.webdata.webData);
  const webImages = useSelector((state: RootState) => state.webdata.webImages);

  const { onUploadSnapshot, onWebsiteUpdateDetails } = useRequest();

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    toPng(elementRef.current).then(function (dataUrl) {
      const file = dataURLtoFile(dataUrl, `${webData.id}.jpg`);
      if (!file) return;
      const snapshot = new FormData();
      snapshot.append("file", file, file.name);
      onUploadSnapshot(snapshot);
    });
  }, [webData]);

  useEffect(() => {
    if (!webData) return;
    onWebsiteUpdateDetails({ WebDetails: webData, webId: webData.id });
  }, [webData]);

  return (
    <>
      {webData.title && (
        <div className="snap-mandatory snap-y max-h-screen overflow-y-scroll animate-[fade_1s] scroll-smooth relative  overflow-x-hidden">
          <div className="">
            <Header1
              name={webData?.name}
              isTransparent={isTransparent}
              templateColor={webData.color}
              hidePublish={hideImageUpload}
            />
          </div>

          <div
            ref={elementRef}
            className="snap-start shrink-0 h-[100vh]"
            id="top"
          >
            <HeroSection
              hideImageUpload={hideImageUpload}
              title={webData.title}
              subtitle={webData.subtitle}
              heroBGImage={webImages.imageUrl[0]}
              templateColor={webData.color}
            />
          </div>
          <div id="adv" className="snap-start  h-[100vh]">
            <AdvtangesSection
              hideImageUpload={hideImageUpload}
              advantages={webData.advantages}
              aboutMe={webData.aboutMe}
              advtangeImage={webImages.imageUrl[2]}
              templateColor={webData.color}
            />
          </div>
          <div id="prod" className="snap-start shrink-0 h-[100vh]">
            <ServicesSection
              serviceImages={webImages.imageUrl}
              products={webData.products}
              templateColor={webData.color}
            />
          </div>
          <div id="contact" className="snap-start shrink-0 h-[100vh]">
            <Contact1 templateColor={webData.color} />
          </div>
          <div className="snap-start shrink-0 h-[30vh]">
            <Footer1 name={webData?.name} templateColor={webData.color} />
          </div>
        </div>
      )}
    </>
  );
};

export default WebsiteDisplay;
