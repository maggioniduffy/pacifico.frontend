import React from "react";
import Image from "next/image";

function importAll(r: any) {
  let images: any[] = [];
  r.keys().map((item: any, index: any) => {
    images[index] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../public/assets/jugadores", false, /\.(png|jpe?g|svg)$/)
);

interface Props {
  id: string;
}
const Team = ({ id }: Props) => {
  return (
    <div
      id={id}
      className="flex flex-col justify-around mt-8 w-11/12 m-auto justify-start"
    >
      <h3 className="text-black text-center header-font font-bold text-left text-3xl">
        {" "}
        Nuestro equipo{" "}
      </h3>
      <h5 className="text-gray text-center">Prefederal Masculino - 2022</h5>
      <div className="flex flex-row w-full my-4 overflow-x-wrap overflow-y-hidden place-items-center justify-start space-x-2">
        {images.map((im) => {
          return (
            <div
              key={im}
              className="bg-transparent w-56 h-fit p-2 rounded-xl relative"
            >
              <Image
                layout="fixed"
                src={im}
                height={300}
                width={300}
                quality={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
