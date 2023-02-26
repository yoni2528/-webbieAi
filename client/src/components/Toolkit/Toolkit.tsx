import React, { useState } from "react";

import useRequest from "../../hooks/api/useRequest/useRequest";
import {
  IoColorPaletteOutline,
  IoColorFillOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { webdataActions } from "../../store/Reducers/WebDataReducer/webDataReducer";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import ChangeColorModal from "../Modals/ChangeColorModal/ChangeColorModal";

let timeOut: ReturnType<typeof setTimeout>;
const Toolkit = () => {
  const [isToolkitOpen, setIsToolkitOpen] = useState<boolean>(false);
  const [isColorChoose, setIsColorChoose] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const { onWebsiteUpdateDetails, onDeleteWebsite } = useRequest();

  const webId = useSelector((state: RootState) => state.webdata.webData._id);

  const dispatch = useDispatch();

  const toggleToolkit = () => {
    setIsToolkitOpen(!isToolkitOpen);
    setIsColorChoose(false);
  };

  const handleOpenColorPallte = () => {
    setIsColorChoose(!isColorChoose);
  };

  const handleChangeColor = (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    let color: string;
    if (typeof e === "object") {
      color = e.target.value;
    } else {
      color = e;
    }
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      onWebsiteUpdateDetails({
        WebDetails: {
          color: color,
        },
        webId: webId,
      });
      dispatch(
        webdataActions.setSingleDetails({
          element: "color",
          content: color,
        })
      );
      setIsColorChoose(false);
    }, 1000);
  };

  const handleCloseDeleteModal = () => {
    setIsDelete(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDelete(true);
  };

  const handleDeleteWebsite = () => {
    onDeleteWebsite(webId);
    setIsDelete(false);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <DeleteModal
        element="website"
        isOpen={isDelete}
        onDelete={handleDeleteWebsite}
        onClose={handleCloseDeleteModal}
      />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <button
            onClick={handleOpenColorPallte}
            className={` ${
              isToolkitOpen ? "scale-100" : "scale-0"
            } transition-all duration-200 bg-[#e57b24] rounded-full p-2 px-4 hover:scale-110 flex items-center gap-2`}
          >
            <IoColorFillOutline className="w-7 h-7 text-[white] " />
            <p className="text-white text-sm">Change Color</p>
          </button>
          {isColorChoose && (
            <ChangeColorModal
              handleChangeColor={handleChangeColor}
              handleOpenColorPallte={handleOpenColorPallte}
            />
          )}
        </div>

        <div>
          <button
            onClick={handleOpenDeleteModal}
            className={`${
              isToolkitOpen ? "scale-100" : "scale-0"
            } transition-all duration-100  bg-[#f66e62] rounded-full p-2  px-4  hover:scale-110  flex items-center gap-2`}
          >
            <IoTrashOutline className="w-7 h-7 text-[white] " />
            <p className="text-white text-sm">Delete website</p>
          </button>
        </div>
      </div>

      <div className="bg-[#6366F1] rounded-full flex items-center justify-center p-2 hover:scale-110">
        <button onClick={toggleToolkit} className="cursor-pointer">
          <IoColorPaletteOutline className="w-10 h-10 text-[white]" />
        </button>
      </div>
    </div>
  );
};

export default Toolkit;
