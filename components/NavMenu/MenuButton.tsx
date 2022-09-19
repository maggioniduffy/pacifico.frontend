import React from "react";

interface Props {
  toggleVisible: () => void;
  children: JSX.Element;
}

const MenuButton = ({ toggleVisible, children }: Props) => {
  return (
    <button
      id="dropdownDefault"
      data-dropdown-toggle="dropdown"
      className="max-h-10 ml-6 mt-2 text-white bg-yellow font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
      type="button"
      onClick={toggleVisible}
    >
      {children}
    </button>
  );
};

export default MenuButton;
