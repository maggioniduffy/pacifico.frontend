import React from "react";

interface Props {
  children?: JSX.Element;
  id: string;
}
const Section = ({ children, id }: Props) => {
  return (
    <div
      id={id}
      className="w-full m-auto p-6 lg:w-8/12 mb-5 rounded h-fit rounded-lg"
    >
      {children}
    </div>
  );
};

export default Section;
