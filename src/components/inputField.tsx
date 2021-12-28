import React from "react";

type InputFieldType = {
  type: string;
  id?: string;
  label: string;
  name: string;
  placeholder?: string;
  required: boolean;
  spaceToOccupy?: string;
  className?: string;
  datalist?: string[];
  inputRef?: React.RefObject<HTMLInputElement>;
};

const InputField = ({
  type,
  id,
  label,
  name,
  placeholder,
  required,
  spaceToOccupy,
  className,
  datalist,
  inputRef,
}: InputFieldType) => {
  return (
    <div
      className={`flex flex-col ${
        spaceToOccupy ? `md: ${spaceToOccupy}` : "w-full"
      } ${className}`}
    >
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-900 block mb-2"
      >
        {label}
      </label>
      {datalist ? (
        <datalist id={name}>
          {datalist.map((dataItem) => (
            <option value={dataItem} key={dataItem} />
          ))}
        </datalist>
      ) : null}
      {inputRef ? (
        <input
          ref={inputRef}
          type={type}
          name={name}
          id={id}
          className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required={required}
          list={name}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required={required}
          list={name}
        />
      )}
    </div>
  );
};

export default InputField;
