import React, { useState } from "react";
import Image from "next/image";
import { socialMedia } from "../../utils/constants";
import x from "../../public/assets/x.png";
import world from "../../public/assets/world.png";

const Social = () => {
  // const [show, setShow] = useState(false);

  // if (show) {
  return (
    <div className="social-media flex overflow-hidden space-x-2 h-10 justify-end place-items-end text-yellow basis-1/4 m-auto">
      {/* <button className="w-12 mt-2" onClick={() => setShow(false)}>
        <Image src={x} width={25} height={25} />
      </button> */}
      {/* <div className="w-12 p-1 shadow-xl h-fit bg-yellow rounded-full"> */}
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
      {/* </div> */}
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
