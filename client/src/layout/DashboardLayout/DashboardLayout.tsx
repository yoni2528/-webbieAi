import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import { IoMenuOutline } from "react-icons/io5";

import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [pageTitle, setPageTitle] = useState<string>();

  const MenuBtnRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<HTMLOrSVGElement>(null);

  const location = useLocation();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement | HTMLButtonElement;
    if (!target.classList[0]) return;
    if (target.classList[0] !== "menu") {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/prompts") {
      setPageTitle("Prompts");
    }
    if (location.pathname === "/websites") {
      setPageTitle("Websites");
    }
  });

  return (
    <div className="w-full h-[100vh] flex bg-[#eeeeee46]">
      <div
        className={`w-1/4 h-full flex absolute items-center transition-all justify-center overflow-hidden lg:w-1/2 lg:static ${
          isMenuOpen ? "w-[70%] sm:w-1/2 lg:w-1/4" : "w-0 lg:w-1/4"
        }`}
      >
        <div className="w-[100%] h-[100%] h-full z-40">
          <Sidebar />
        </div>
      </div>
      <div
        onClick={handleCloseMenu}
        className="h-full w-full flex items-center justify-center relative "
      >
        <div className="menu h-[90%] w-[90%] bg-white overflow-y-scroll scrollbar-hide ">
          <header className="fixed lg:static top-0 left-0 bg-[white] z-30 w-full  py-2 border-b-2 border-[#eee] px-4 py-8">
            <div className="flex items-center justify-between w-full h-full">
              <h2 className="font-thin text-[#6366F1] text-[1.6rem] sm:text-[2rem] ml-6">
                {pageTitle}
              </h2>
              <button
                ref={MenuBtnRef}
                onClick={handleToggleMenu}
                className="menu lg:hidden z-50"
              >
                <IoMenuOutline
                  onClick={handleToggleMenu}
                  className="menu w-8 h-8 z-50"
                />
              </button>
            </div>
          </header>
          <div className="mt-[20%] lg:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
