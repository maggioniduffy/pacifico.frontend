import { sponsors } from "./sponsors";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const SponsorsCarousel = () => {
  const [sps, setSponsors] = useState(sponsors);
  setInterval(() => {
    // const aux = [...sps];
    // const last = aux.shift();
    // aux.push(last!);
    // setSponsors(aux);
    const aux = sps.pop();
    sps.unshift(aux!);
  }, 10000);

  return (
    <div className="flex bg-yellow overflow-x-auto h-fit">
      {sps.map((sp) => {
        return (
          <div className="m-2" key={sp + ""}>
            <Image
              quality={100}
              src={sp}
              layout="fixed"
              height={9 * 17}
              width={16 * 17}
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SponsorsCarousel;
