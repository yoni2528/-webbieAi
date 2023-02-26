import React from "react";

import { IoReturnDownBackOutline } from "react-icons/io5";

const EditArrow: React.FC<{ customCSS: string; iconColor: string }> = ({
  customCSS,
  iconColor,
}) => {
  return (
    <div
      className={`absolute left-[25%] sm:top-[-20%] top-[-30%] flex font-thin text-sm ${customCSS}`}
    >
      <p>Click on the text to edit </p>
      <IoReturnDownBackOutline
        className={`rotate-[290deg] translate-y-[50%] w-6 h-6 text-[${iconColor}]`}
      />
    </div>
  );
};

export default EditArrow;
