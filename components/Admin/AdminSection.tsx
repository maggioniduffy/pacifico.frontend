import React, { useState } from "react";

interface Props {
  title: string;
  children: JSX.Element;
}

const AdminSection = ({ title, children }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className={"flex flex-col place-items-center w-full"}>
      <>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="font-bold text-3xl"
        >
          {" "}
          {title}{" "}
        </button>
        {show && children}
      </>
    </div>
  );
};

export default AdminSection;
