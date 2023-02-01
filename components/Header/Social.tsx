import React, { useState } from "react";
import Image from "next/image";
import { socialMedia } from "../../utils/constants";

interface Props {
  responsive?: string;
}
const Social = ({ responsive }: Props) => {
  return (
    <div
      className={`${responsive} flex overflow-hidden space-x-2 h-10 justify-end place-items-end text-yellow basis-1/4 m-auto`}
    >
      {socialMedia.map(({ url, image }) => (
        <a
          href={url}
          key={url}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-1 border-white h-10 w-10 hover:bg-yellow"
        >
          <Image
            src={image}
            width={50}
            height={50}
            className="object-cover p-2"
          />
        </a>
      ))}
    </div>
  );
};

// return (
//   <div className="social-media basis-1/4 place-items-end m-auto justify-end flex">
//     <button className="w-12 mt-2" onClick={() => setShow(true)}>
//       <Image src={world} width={25} height={25} />
//     </button>
//   </div>
// );
// };

export default Social;
