import React from "react";

interface Props {
  children?: JSX.Element;
  id: string;
}
const Section = ({ children, id }: Props) => {
  return (
    <div
      id={id}
      className="w-11/12 m-auto mb-5 rounded min-h-96 h-fit rounded-lg shadow"
    >
      {children}
    </div>
  );
};

export default Section;
