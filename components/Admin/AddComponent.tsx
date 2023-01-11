import React from "react";

interface InputProps {
  placeholder: string;
  value: any;
  setter: (value: any) => void;
}

interface Props {
  inputs: InputProps[];
  submit: (value: any) => void;
}

const AddComponent = ({ inputs, submit }: Props) => {
  return (
    <form className="flex flex-col" onSubmit={(e) => submit(e)}>
      {inputs.map(({ placeholder, value, setter }) => {
        return (
          <input
            key={Date.now() + placeholder}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setter(e.target.value)}
          />
        );
      })}
      <button
        onClick={(e) => submit(e)}
        type="submit"
        className="bg-yellow p-1 rounded shadow m-2"
      >
        {" "}
        Enviar{" "}
      </button>
    </form>
  );
};

export default AddComponent;
