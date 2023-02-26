import React from "react";

type Input = {
  placeholder?: string;
  type: string;
  customCss?: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  defaultValue?: string | number;
  label?: string;
};

const Input: React.FC<Input> = ({
  placeholder,
  type,
  customCss,
  onChange,
  ref,
  defaultValue,
  label,
  id,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          className={`p-1 border-[1px] rounded-[6px] border-[#e0e0fc] ${customCss}`}
          onChange={onChange}
          ref={ref}
          defaultValue={defaultValue}
        ></input>
      </div>
    </>
  );
};

export default Input;
