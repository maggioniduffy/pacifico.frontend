import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 w-full p-auto bg-black flex flex-col justify-center">
      <h5 className="text-white text-center m-auto">
        {" "}
        Made by{" "}
        <a
          className="font-bold"
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
