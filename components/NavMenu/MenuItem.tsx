import React from "react";
import CustomLink from "../CustomLink/CustomLink";

interface Option {
  section: string;
  name: string;
}

const MenuItem = ({ section, name }: Option) => {
  return (
    <div className="shadow">
      <CustomLink url={section} target="_self">
        <h3 className="font-medium text-center text-black"> {name} </h3>
      </CustomLink>
    </div>
  );
};

export default MenuItem;
