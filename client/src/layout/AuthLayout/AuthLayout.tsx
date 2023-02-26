import React from "react";

import Lottie from "lottie-react";

import build from "../../assets/build.png";
import logo from "../../assets/logo-black.png";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-[#eee]">
      <div className="sm:w-2/3 w-[90%] sm:h-2/3 h-[80%] flex items-reverse overflow-hidden rounded-lg border-2">
        <div className="w-full h-full flex items-center justify-center bg-white flex-col relative ">
          <img className="w-20 absolute top-4 left-8" src={logo}></img>

          <div className="h-[80%] w-[80%] flex">{children}</div>
        </div>
        <div
          style={{
            backgroundImage:
              'url("https://cdn.discordapp.com/attachments/1063934436321796147/1079320308554678292/yoni2528_cute_robitic_arm_takes_ui_elements_from_a_screen_and_d_7c15f2cf-6ac9-42ee-bf84-5bd67e9c4f22.png")',
          }}
          className="w-full border-l-2 h-full flex items-center justify-center bg-[white] hidden lg:flex bg-cover bg-center"
        ></div>
      </div>
    </div>
  );
};

export default AuthLayout;
