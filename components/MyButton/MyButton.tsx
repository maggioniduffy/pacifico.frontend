import React from "react";

interface Props {
  children: JSX.Element;
  onClick?: () => void;
}

const MyButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-realwhite rounded p-2 shadow shadow-yellow"
    >
      {children}
    </button>
  );
};

export default MyButton;
