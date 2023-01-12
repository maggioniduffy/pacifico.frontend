import { InputProps } from "./Fixture/interfaces";

interface Props {
  inputs: InputProps[];
  submit: (value: any) => void;
}

const AddComponent = ({ inputs, submit }: Props) => {
  return (
    <form className="flex flex-col" onSubmit={(e) => submit(e)}>
      {inputs.map(({ placeholder, value, setter, options, type }) => {
        if (type == "file") {
          return (
            <input
              key={placeholder}
              onChange={(e) => setter(e)}
              className="my-2"
              type={type}
            />
          );
        }
        if (!options) {
          return (
            <input
              key={placeholder}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="my-2"
              type={type ? type : "text"}
            />
          );
        } else {
          return (
            <select
              key={Date.now() + placeholder}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="my-2"
            >
              {options.map(({ value, label }) => (
                <option value={value} key={placeholder + label}>
                  {" "}
                  {label}{" "}
                </option>
              ))}
            </select>
          );
        }
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
