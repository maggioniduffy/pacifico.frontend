import React from "react";
import { PlayerCard } from "../../models/User";
import Player from "./Player";
import { masculino, femenino } from "../../utils/players";

interface Props {
  id: string;
}

const Players = ({ id }: Props) => {
  return (
    <div className="my-16 w-11/12 m-auto" id={id}>
      <h3 className="text-black header-font font-bold text-left text-lg md:text-2xl my-4">
        {" "}
        Plantel Profesional Masculino
      </h3>
      <div className="flex justify-start overflow-x-auto space-x-8 my-2 py-2">
        {masculino.map(({ nombre, image }: PlayerCard) => (
          <Player key={nombre} nombre={nombre} image={image} />
        ))}
      </div>
      {/* <h3 className="text-black header-font font-bold text-left text-lg md:text-2xl">
        {" "}
        Plantel Profesional Femenino
      </h3>
      <div className="flex justify-center overflow-x-auto">
        {femenino.map(({ nombre, image }: PlayerCard) => (
          <Player key={nombre} nombre={nombre} image={image} />
        ))}
      </div> */}
    </div>
  );
};

export default Players;
