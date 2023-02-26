import React from "react";

import { IoAddOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const EmptyWebsiteCard = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/builder");
      }}
    >
      <div className="flex flex-col gap-4 h-[270px]">
        <li className="group w-full h-full flex items-center justify-center rounded-lg bg-cover bg-center border-2 border-[#b1b2f7] ">
          <div className="group-hover:bg-[#eee] rounded-lg transition-all duration-700 Z-12 w-full h-full flex flex-col gap-2 items-center justify-center">
            <IoAddOutline className="group-hover:scale-150 w-8 h-8 transition-all" />
            <p>Create new website</p>
          </div>
        </li>
      </div>
    </button>
  );
};

export default EmptyWebsiteCard;
