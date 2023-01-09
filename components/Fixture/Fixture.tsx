import React, { useEffect, useState } from "react";
import { Category, getMatchs } from "../../utils/api";
import clublogo from "../../public/assets/PacificoEscudo.png";
import Image, { StaticImageData } from "next/image";
import stats from "../../public/assets/stats.png";
import tv from "../../public/assets/tv.png";
import stadium from "../../public/assets/stadium.png";
import away from "../../public/assets/away.png";
import home from "../../public/assets/home.png";
import gender from "../../public/assets/gender.png";
import torneo from "../../public/assets/torneo.png";
import calendar from "../../public/assets/calendar.png";

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
  <div className="h-5/6 w-10/12 m-auto md:p-4">
    <Image
      src={source}
      height={40}
      width={40}
      quality={100}
      layout="responsive"
      className="shadow m-2"
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
  const [nextAllowed, setNextAllowed] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      const res = await getMatchs(fromLoad, toLoad);
      const auxRes = res?.map((r) => ({ ...r, time: new Date(r.time) }));
      if (auxRes?.length) {
        setMatchs([...matchs, ...auxRes!]);
        if (auxRes?.length < STEP) {
          setNextAllowed(false);
        } else {
          setNextAllowed(true);
        }
      }
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
    <div className="mt-4 w-full h-fit rounded-xl flex flex-col justify-center">
      <h3 className="text-black header-font font-bold text-left text-xl md:text-3xl">
        {" "}
        Proximos Partidos{" "}
      </h3>
      <div className="h-full">
        <table className="table-fixed h-full rounded-xl bg-realwhite shadow-xl w-full my-8">
          <thead className="bg-black text-yellow text-sm font-thin w-full">
            <tr className="p-2 font-thin">
              <th className="rounded-tl-xl p-3 font-thin">
                {" "}
                <Image
                  src={calendar}
                  height={40}
                  width={40}
                  className="m-auto"
                />
              </th>
              <th className="p-3 font-thin">
                {" "}
                <Image
                  src={torneo}
                  height={40}
                  width={40}
                  className="m-auto"
                />{" "}
              </th>
              <th className="p-3 font-thin">
                <Image src={gender} height={40} width={40} className="m-auto" />
              </th>
              <th className="p-3 font-thin">
                <Image src={home} height={40} width={40} className="m-auto" />
              </th>
              <th className="p-3 font-thin">
                <Image src={away} height={40} width={40} className="m-auto" />
              </th>
              <th className="p-3 font-thin">
                <Image
                  src={stadium}
                  height={30}
                  width={30}
                  className="m-auto"
                />
              </th>
              <th className="p-3 font-thin">
                <Image src={tv} height={40} width={40} className="m-auto" />
              </th>
              <th className="rounded-tr-xl p-3 font-thin">
                <Image src={stats} height={40} width={40} className="m-auto" />
              </th>
            </tr>
          </thead>
          <tbody className="text-center fixturetxt paragraph-font">
            {matchs.slice(from, to).map((match, i) => (
              <tr key={match._id} className="">
                <td
                  className={`${
                    i == matchs.length - 1 && "rounded-bl-xl"
                  } h-fit w-fit`}
                >
                  {" "}
                  {match.time.getDate()}
                  {"/"}
                  {match.time.getMonth() + 1} {match.time.getHours()}
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
            className={`${
              !nextAllowed && "cursor-not-allowed opacity-50"
            } bg-yellow text-realwhite h-full w-32 p-1`}
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
