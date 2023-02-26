import React from "react";
import Button from "../Elements/Button/Button";
import { WebDetails } from "../MultiStepForm/Steps/StepHandler/StepHandler";

import { IoLinkOutline } from "react-icons/io5";

const WebsiteCard: React.FC<{
  index: number;
  website: WebDetails;
  onWebsiteClick: (website: WebDetails) => void;
}> = ({ index, website, onWebsiteClick: onWebsiteClick }) => {
  return (
    <div className="flex flex-col gap-4 h-[270px]" key={index}>
      <li
        style={{
          backgroundImage: `url("https://ya-cryptofolio-images.s3.amazonaws.com/${website._id}.jpg")`,
        }}
        key={index}
        className="group w-full h-full flex items-center justify-center rounded-lg bg-cover bg-center border-2 border-[#b1b2f7] "
      >
        <div className="group-hover:backdrop-brightness-50 rounded-lg transition-all duration-700 Z-12 w-full h-full flex items-center justify-center">
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              onWebsiteClick(website);
            }}
            text="Open Editor"
            color="#6366F1"
            customCss="scale-0	group-hover:scale-100 transition-all "
          />
        </div>
      </li>
      {website.staticUrl && (
        <div className="flex items-center gap-2 border-[2px] border-[#b1b2f7] p-1 px-2 rounded-lg w-full text-sm">
          <IoLinkOutline className="w-4 h-4 mt-1" />
          <a href={website.staticUrl} className="">
            {website.staticUrl.slice(0, 30).replace("http://", "www.")}
            ...
          </a>
        </div>
      )}
    </div>
  );
};

export default WebsiteCard;
