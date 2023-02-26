import React from "react";

import { IoImageOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import useRequest from "../../hooks/api/useRequest/useRequest";
import { RootState } from "../../store/store";

const UpdateImageInput: React.FC<{
  attribute: string;
  type?: string;
  customCss?: string;
}> = ({ attribute, customCss }) => {
  const webId = useSelector((state: RootState) => state.webdata.webData._id);
  const { onUpdateWebsiteImage } = useRequest();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    const newFile = e.target.files[0];
    const fileType = newFile.type.replace("image/", "");
    const newImage = new FormData();
    newImage.append(
      "file",
      newFile,
      `${webId}-${attribute}-${Date.now().toString()}.${fileType}`
    );
    newImage.append("webId", webId);
    newImage.append("attribute", attribute);
    onUpdateWebsiteImage(newImage);
  };

  return (
    <div
      className={`ya-file-upload absolute right-6 top-6 realtive flex items-center gap-4 hover:scale-105 transition-all z-40 ${customCss}`}
    >
      <div className="relative bg-[white] rounded-full py-1 px-4 flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <IoImageOutline className="text-[#666] w-6 h-6 mt-1" />
          <p className="text-[#666] text-xs">replace image</p>
        </div>
        <input
          className="file-upload cursor-pointer drop-shadow-lg z-12"
          onChange={handleFileUpload}
          type={"file"}
        ></input>
      </div>
    </div>
  );
};

export default UpdateImageInput;
