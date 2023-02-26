import React from "react";

import { Button } from "../../components";

const DeleteModal: React.FC<{
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
  element: string;
}> = ({ isOpen, onDelete, onClose, element }) => {
  return (
    <div
      className={`w-full h-full fixed top-0 left-0 flex items-center backdrop-blur-sm	 justify-center transition-all  ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`w-[350px] shadow-lg  px-8 h-[250px] bg-[white] rounded-lg flex items-start flex-col justify-center gap-4 transition-all ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <h3 className="text-xl font-medium">Are you sure?</h3>
        <p className="text-md">
          If you choose to delete this {element}, you can&apos;t retrieve it
          later.
        </p>
        <div className="flex gap-4">
          <Button onClick={onDelete} text="I'm sure" color="#f75d42" />
          <Button onClick={onClose} text="Never Mind" color="#6366F1" />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
