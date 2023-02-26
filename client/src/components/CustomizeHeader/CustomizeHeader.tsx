import React from "react";

import logo from "../../assets/logo-black.png";
import { Button } from "../components";

type Props = {
  onDeployWebsite: () => void;
};

import { useNavigate } from "react-router-dom";

const CustomizeHeader: React.FC<Props> = ({ onDeployWebsite }) => {
  const navigate = useNavigate();
  const handleExitToDashboard = () => {
    navigate("/websites");
  };

  return (
    <div className="w-full h-16 fixed bg-[white] border-b-2 z-50 flex items-center px-8 justify-between">
      <div>
        <img className="w-20" src={logo}></img>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleExitToDashboard}
          className="text-sm text-[#6366F2] hover:scale-105 transition-all"
        >
          Back to dashboard
        </button>
        <Button
          onClick={onDeployWebsite}
          color="#6366F1"
          text="Publish"
          customCss="text-sm"
        />
      </div>
    </div>
  );
};

export default CustomizeHeader;
