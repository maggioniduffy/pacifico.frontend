import React from "react";

interface Props {
  children?: JSX.Element;
  id: string;
}
const Section = ({ children, id }: Props) => {
  return (
    <div
      id={id}
      className="bg-white w-11/12 m-auto mb-5 rounded bg-opacity-75 h-96 rounded-lg shadow"
    >
      {children}
    </div>
  );
};

export default Section;
