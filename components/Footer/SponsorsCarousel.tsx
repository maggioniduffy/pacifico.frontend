import { sponsors } from "./sponsors";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const SponsorsCarousel = () => {
  const [sps, setSponsors] = useState(sponsors);

  useEffect(() => {
    const interval = setInterval(() => {
      setSponsors(sps.slice(1).concat(sps[0]));
    }, 5000);
    return () => clearInterval(interval);
  }, [sps]);

  return (
    <div className="flex bg-yellow overflow-x-auto h-fit">
      {sps.map((sp) => {
        return (
          <div className="m-2" key={sp.toString() + ""}>
            <Image
              quality={100}
              src={sp}
              layout="fixed"
              height={9 * 17}
              width={16 * 17}
              className="object-contain"
              loading="lazy"
              alt={sp + ""}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SponsorsCarousel;
