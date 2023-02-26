import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navItems } from "./NavItems";

import LogoutButton from "../LogoutButton/LogoutButton";

import { useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

const Sidebar = () => {
  const [path, setPath] = useState<string>();
  const { pathname } = useLocation();
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <div className="flex flex-col justify-between items-start pl-8 w-full h-full py-12 bg-primary ">
      <div className="h-[120px]">
        <img className="w-[120px]" src={logo}></img>
      </div>
      <nav className="h-full w-[80%] flex">
        <ul className="flex flex-col gap-4 w-full">
          {navItems.map((navItem, index) => {
            return (
              <li
                key={index}
                className={`group bg-primary w-full py-4 flex rounded-lg hover:bg-white hover:text-primary transition-all duration-500 ${
                  path === navItem.link && "bg-white bg-primary"
                }`}
              >
                <div className="flex items-center gap-4 w-full pl-6 ">
                  <navItem.Icon
                    className={`w-6 h-6 text-white group-hover:text-primary transition-all ${
                      path === navItem.link && "text-primary"
                    }`}
                  />
                  <Link
                    to={navItem.link}
                    className={`text-title text-sm lg:text-md text-white group-hover:text-primary transition-all ${
                      path === navItem.link && "text-primary"
                    }`}
                  >
                    {navItem.title}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="self-start pl-10">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
