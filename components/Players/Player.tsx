import Image, { StaticImageData } from "next/image";
import { PlayerCard } from "../../models/User";
import pacifico from "../../public/assets/PacificoEscudo.png";

const Player = ({ nombre, image }: PlayerCard) => {
  return (
    <div>
      <div className="w-96 h-96 max-w-full relative">
        <div className="rounded-2xl card-bg shadow-2xl p-2 relative h-full flex flex-col justify-between">
          <Image
            src={image}
            alt={nombre}
            className="z-1 overflow-hidden rounded-2xl"
            layout="fill"
            objectFit="cover"
          />
          <Image
            src={pacifico}
            height={40}
            width={40}
            layout="fixed"
            quality={100}
            className="fixed z-40 right-5 m-2"
          />

          <div className="w-full relative overflow-hidden">
            <h1 className="text-md md:text-lg z-50 shadow bg-white text-center bg-opacity-40 overflow-hidden p-2 w-full">
              {nombre}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
