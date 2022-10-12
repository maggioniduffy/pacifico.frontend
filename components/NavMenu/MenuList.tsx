import React, { useRef } from "react";
import CustomLink from "../CustomLink/CustomLink";
import Image from "next/image";
import menu from "../../public/assets/menuitem.png";
import MenuButton from "./MenuButton";

interface Option {
  section: string;
  name: string;
}

interface Props {
  visible: boolean;
  options: Option[];
  toggleVisible: () => void;
}

const MenuList = ({ visible, options, toggleVisible }: Props) => {
  return (
    <div
      id="dropdown"
      onClick={toggleVisible}
      className={`${
        visible ? "" : "hidden"
      } z-50 absolute bg-black bg-opacity-60 w-full h-screen top-0 left-0 overflow-visible`}
    >
      <div className="bg-white w-44 md:w-3/12 lg:w-2/12 h-screen">
        <MenuButton toggleVisible={toggleVisible}>
          <Image src={menu} layout="fixed" height={30} width={40} />
        </MenuButton>
        <ul
          className="py-1 text-sm text-gray-700 ml-6 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {options.map(({ name, section }) => {
            return (
              <span
                key={section}
                className="block py-2 px-4 hover:text-gold-500 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <CustomLink
                  url={section}
                  target="_self"
                  onClick={toggleVisible}
                >
                  <p className="font-medium text-sm md:text-lg">{name}</p>
                </CustomLink>
              </span>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
