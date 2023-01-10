import React, { useState } from "react";
import Image from "next/image";
import { socialMedia } from "../../utils/constants";
import x from "../../public/assets/x.png";
import world from "../../public/assets/world.png";

const Social = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div className="social-media flex flex-col h-fit place-items-end  text-yellow basis-1/4 m-auto">
        <button className="w-12 mt-2" onClick={() => setShow(false)}>
          <Image src={x} width={25} height={25} />
        </button>
        <div className="w-12 p-1 shadow-xl h-fit bg-yellow rounded-full">
          {socialMedia.map(({ url, image }) => (
            <a
              className="relative basis-1/6 h-4 w-8"
              href={url}
              key={url}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image}
                width={100}
                height={100}
                layout="responsive"
                className="rounded-full hover:bg-gray"
              />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="social-media basis-1/4 place-items-end m-auto justify-end flex">
      <button className="w-12 mt-2" onClick={() => setShow(true)}>
        <Image src={world} width={25} height={25} />
      </button>
    </div>
  );
};

export default Social;
