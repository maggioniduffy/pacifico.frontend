/* eslint-disable react/jsx-no-undef */
import { StaticImageData } from "next/image";
import Image from "next/image";
import { ReactComponentElement } from "react";

interface Props {
  url: string;
  children: JSX.Element;
  target?: "_blank" | "_parent" | "_self" | "_top";
  onClick?: () => void;
}
const CustomLink = ({ url, children, target = "_blank", onClick }: Props) => {
  return (
    <a
      target={target}
      href={url}
      rel="noreferrer"
      className="m-1 content-center h-32 w-24 p-auto"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default CustomLink;
