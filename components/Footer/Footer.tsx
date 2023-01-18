import React from "react";

const Footer = () => {
  return (
    <footer className="h-12 w-full text-sm p-auto bg-black flex flex-col justify-center">
      <h5 className="text-gray text-center m-auto">
        {" "}
        Made by{" "}
        <a
          className="font-medium text-white hover:text-yellow hover:font-bold"
          target={"_blank"}
          href="https://www.linkedin.com/in/maggioniduffy/"
          rel="noreferrer"
        >
          {" "}
          Faustino Maggioni Duffy{" "}
        </a>
      </h5>
    </footer>
  );
};

export default Footer;
