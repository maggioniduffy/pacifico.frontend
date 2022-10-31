import React, { useEffect, useState } from "react";
import { Category, getMatchs } from "../../utils/api";
import LoadingSpinner from "../LoadingSpinner";
import clublogo from "../../public/assets/clublogo.png";
import Image, { StaticImageData } from "next/image";
import { months } from "../../utils";

const STEP = 5;
const LOAD_STEP = 20;

interface FixtureImageProps {
  source: string | StaticImageData;
  alt: string;
}

interface Match {
  gender: "F" | "M";
  category: Category;
  tournament: string;
  rival_name: string;
  time: Date;
  condition: "Local" | "Visita";
  played: boolean;
  rival_icon: string;
  _id: string;
  field: string;
  stats_link?: string;
  transmission_link?: string;
  our_score?: number;
  rival_score?: number;
}

const FixtureImage = ({ source, alt }: FixtureImageProps) => (
  <div className="m-4">
    <Image
      src={source}
      height={100}
      width={100}
      quality={100}
      className="shadow"
      layout="responsive"
      alt={alt}
    />
  </div>
);

const Fixture = () => {
  const [matchs, setMatchs] = useState<Match[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(STEP);
  const [fromLoad, setFromLoad] = useState(0);
  const [toLoad, setToLoad] = useState(LOAD_STEP);

  useEffect(() => {
    const getGames = async () => {
      const res = await getMatchs(fromLoad, toLoad);
      const auxRes = res?.map((r) => ({ ...r, time: new Date(r.time) }));
      setMatchs([...matchs, ...auxRes!]);
    };
    getGames();
  }, [fromLoad, toLoad]);

  const back = () => {
    if (from - STEP >= 0) {
      setTo(from);
      setFrom(from - STEP);
    }
  };

  const next = () => {
    setFrom(to);
    if (to + STEP >= toLoad) {
      setFromLoad(toLoad);
      setToLoad(toLoad + LOAD_STEP);
    }
    setTo(to + STEP);
  };

  return (
    <div className="my-8 w-full h-fit rounded-xl flex flex-col justify-center">
      <h3 className="text-black header-font font-bold text-left text-3xl">
        {" "}
        Proximos Partidos{" "}
      </h3>
      <div className="h-full">
        <table className="table-auto h-full rounded-xl bg-realwhite shadow-xl w-full my-8">
          <thead className="bg-black text-yellow text-sm font-thin">
            <tr className="p-2 text-sm font-thin">
              <th className="rounded-tl-xl p-3 font-thin">Fecha</th>
              <th className="p-3 font-thin"> Torneo </th>
              <th className="p-3 font-thin">Categoria</th>
              <th className="p-3 font-thin">Local</th>
              <th className="p-3 font-thin">Visita</th>
              <th className="p-3 font-thin">Estadio</th>
              <th className="p-3 font-thin">Transmision</th>
              <th className="rounded-tr-xl p-3 font-thin">Estadisticas</th>
            </tr>
          </thead>
          <tbody className="text-center paragraph-font">
            {matchs.slice(from, to).map((match, i) => (
              <tr key={match._id} className="h-16">
                <td className={`${i == matchs.length - 1 && "rounded-bl-xl"}`}>
                  {" "}
                  {match.time.getDate()}
                  {"/"}
                  {match.time.getMonth() + 1}
                  {"/"}
                  {match.time.getFullYear()}
                  {", "}
                  {match.time.getHours()}
                  {":"}
                  {match.time.getMinutes() < 10
                    ? match.time.getMinutes() + "0"
                    : match.time.getMinutes()}
                </td>
                <td>{match.tournament}</td>
                <td>
                  {match.category}
                  {"-"}
                  {match.gender}
                </td>
                <td>
                  {match.condition == "Local" ? (
                    <FixtureImage source={clublogo} alt="Pacifico" />
                  ) : (
                    <FixtureImage
                      source={match.rival_icon}
                      alt={match.rival_name}
                    />
                  )}
                </td>
                <td>
                  {match.condition != "Local" ? (
                    <FixtureImage source={clublogo} alt="Pacifico" />
                  ) : (
                    <FixtureImage
                      source={match.rival_icon}
                      alt={match.rival_name}
                    />
                  )}
                </td>
                <td>{match.field}</td>
                <td>{match.transmission_link}</td>
                <td className={`${i == matchs.length - 1 && "rounded-br-xl"}`}>
                  {match.stats_link}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex mt-4 place-items-center h-10 paragraph-font rounded-lg shadow-lg overflow-hidden w-fit m-auto justify-center">
          <button
            className={`${
              from < STEP && "cursor-not-allowed opacity-50"
            } bg-white text-black h-full w-32 p-1`}
            onClick={back}
          >
            Atras
          </button>
          <button
            className=" bg-yellow text-realwhite h-full w-32 p-1"
            onClick={next}
          >
            {" "}
            Siguiente{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
