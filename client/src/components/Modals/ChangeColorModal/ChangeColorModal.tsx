import React, { useRef } from "react";

const colorList = [
  "#37b24d",
  "#74b816",
  "#f08c00",
  "#f76707",
  "#f03e3e",
  "#d6336c",
  "#ae3ec9",
  "#7048e8",
  "#4263eb",
  "#1c7ed6",
  "#1098ad",
  "#0ca678",
];

type Props = {
  handleOpenColorPallte: () => void;
  handleChangeColor: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
};

const ChangeColorModal: React.FC<Props> = ({
  handleOpenColorPallte,
  handleChangeColor,
}) => {
  const layerRef = useRef<HTMLDivElement>(null);

  const handleClosePallate = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === layerRef.current) {
      handleOpenColorPallte();
    }
  };

  const handleColorButton = (color: string) => {
    handleChangeColor(color);
  };

  return (
    <div
      ref={layerRef}
      onClick={handleClosePallate}
      className="w-full h-full fixed top-0 left-0 z-50 animate-[fade_0.5s] flex items-center justify-center flex-col gap-4 backdrop-blur-sm transition-all"
    >
      <div className="flex flex-col items-center flex gap-4 p-6 rounded-lg bg-[#eee]">
        <h3 className="text-lg font-thin ">Pick a color </h3>
        <input
          onChange={handleChangeColor}
          className="w-10 h-10 z-50 rounded-lg"
          type={"color"}
        ></input>
        <h3 className="text-md font-thin ">or Choose</h3>
        <div className="grid grid-rows-3 grid-cols-4 gap-2">
          {colorList.map((color, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  handleColorButton(color);
                }}
                style={{ backgroundColor: color }}
                className={`bg-[${color}] w-8 h-8 rounded-sm hover:scale-105`}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChangeColorModal;
