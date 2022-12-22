import React, { useState } from "react";
import Image from "next/image";
import menu from "../../public/assets/menu.png";
import MenuList from "./MenuList";

interface Option {
  section: string;
  name: string;
}

interface Props {
  options: Option[];
}

const NavMenu = ({ options }: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setTimeout(() => setVisible(!visible), 200);
  };

  return (
    <div
      className={`${
        visible ? "" : "m-auto"
      } sm:basis-1/4 ml-6 block top-0 z-50`}
    >
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="max-h-10 text-white font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleVisible}
      >
        <Image src={menu} layout="fixed" height={30} width={30} />
      </button>
      <MenuList
        visible={visible}
        options={options}
        toggleVisible={toggleVisible}
      />
    </div>
  );
};

export default NavMenu;
