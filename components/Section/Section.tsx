import React from "react";

interface Props {
  children?: JSX.Element;
  id: string;
}
const Section = ({ children, id }: Props) => {
  return (
    <div
      id={id}
      className="w-10/12 md:w-8/12 m-auto mb-5 rounded h-fit rounded-lg"
    >
      {children}
    </div>
  );
};

export default Section;
