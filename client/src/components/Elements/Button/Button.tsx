import React from "react";

const Button: React.FC<{
  color: string;
  text: string;
  customCss?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ text, color, onClick, customCss, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color }}
      className={`text-white py-1 px-4 rounded-lg hover:scale-105 transition-all ${customCss} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
