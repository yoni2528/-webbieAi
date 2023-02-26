import React, { useState } from "react";

import Input from "../../components/Elements/Button/Input";
import Button from "../Elements/Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import { BsLightning } from "react-icons/bs";
import { WebDetails } from "../MultiStepForm/Steps/StepHandler/StepHandler";
import { IoCaretDown, IoTrashOutline } from "react-icons/io5";
import useRequest from "../../hooks/api/useRequest/useRequest";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";

const Prompt: React.FC<{
  title: string;
  values: WebDetails;
  date?: string;
  onDelete: () => void;
}> = ({ title, values, date, onDelete }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [promptValues, setPromptValues] = useState<WebDetails>(values);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const { onUpdatePrompt, onWebsiteRequest, onDeletePrompt } = useRequest();

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangePrompt = (
    value: string | number,
    key: string | [string, number]
  ) => {
    setPromptValues((prevState: WebDetails) => {
      if (typeof key === "string") {
        prevState[key] = value;
      } else {
        prevState[key[0]][key[1]] = value;
      }
      return { ...prevState };
    });
  };

  const handlePromptSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onUpdatePrompt(promptValues);
    onWebsiteRequest({ ...promptValues, isUpdate: true });
  };

  const handleDeletePrompt = () => {
    if (!values._id) return;

    onDeletePrompt.mutateAsync(values._id).then(() => {
      setTimeout(() => {
        onDelete();
        setIsDeleteModalOpen(false);
      }, 1000);
    });
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <li className="bg-[#eff0fe55] p-4 rounded-lg ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-[white] rounded-[50%]">
            <BsLightning className="text-primary" />
          </div>
          <div>
            <h3 className="text-md font-medium lg:text-lg">{title}</h3>
            <p className="text-xs">{date}</p>
          </div>
        </div>
        <div>
          <button onClick={handleToggleDropdown}>
            <IoCaretDown />
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "h-[350px]" : "h-[0px]"
        } overflow-hidden transition-all duration-700`}
      >
        <div className="grid grid-cols-2 grid-rows-4 gap-4 mt-4 items-end">
          <Dropdown text="advtantages">
            {promptValues.advantages?.map((advatnage, index) => {
              return (
                <Input
                  key={index}
                  id="work"
                  type="text"
                  defaultValue={advatnage}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChangePrompt(e.target.value, ["advantages", index]);
                  }}
                />
              );
            })}
          </Dropdown>
          <Dropdown text="products">
            {promptValues.products?.map((product, index) => {
              return (
                <Input
                  key={index}
                  id="work"
                  type="text"
                  defaultValue={product}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChangePrompt(e.target.value, ["products", index]);
                  }}
                />
              );
            })}
          </Dropdown>
          <Input
            id="name"
            label="name"
            type="text"
            defaultValue={promptValues.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangePrompt(e.target.value, "name");
            }}
          />
          <div className="flex flex-col gap-1">
            <label className="text-sm">template</label>
            <select
              id="template"
              defaultValue={promptValues.template}
              className="p-1 border-[1px] rounded-[6px] border-[#e0e0fc] text-sm"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                handleChangePrompt(+e.target.value, "template");
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <Input
            id="work"
            label="work"
            type="text"
            defaultValue={promptValues.work}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangePrompt(e.target.value, "work");
            }}
          />
          <Input
            id="Color"
            label="Template Color"
            type="color"
            customCss="w-full h-8 p-0"
            defaultValue={promptValues.color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangePrompt(e.target.value, "color");
            }}
          />
          <div className="flex w-full justify-between col-span-full	">
            <Button
              onClick={handlePromptSubmit}
              text="Run Prompt"
              color="#6366F1"
              customCss="ml-4"
            ></Button>
            <button
              onClick={handleOpenModal}
              className="bg-[#fc6e6e] p-2 rounded-full hover:scale-105 mr-2"
            >
              <IoTrashOutline className="text-white w-4 h-4" />
            </button>
          </div>
        </div>
        <DeleteModal
          element="prompt"
          isOpen={isDeleteModalOpen}
          onDelete={handleDeletePrompt}
          onClose={handleCloseModal}
        />
      </div>
    </li>
  );
};

export default Prompt;
