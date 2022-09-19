import React from "react";
import Link from "../Link/Link";

interface Option {
  section: string;
  name: string;
}

const MenuItem = ({ section, name }: Option) => {
  return (
    <div className="shadow">
      <Link url={section} target="_self">
        <h3 className="font-medium text-center"> {name} </h3>
      </Link>
    </div>
  );
};

export default MenuItem;
