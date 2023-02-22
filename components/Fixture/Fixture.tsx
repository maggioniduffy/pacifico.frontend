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
import { useCurrentUser } from "../../hooks";
import { BASE_API_URL } from "../../utils/constants";
import AddFixture from "../Admin/Fixture/AddFixture";
import { AddMatchDto } from "../Admin/Fixture/interfaces";

const STEP = 5;

interface Props {
  matchs?: Match[];
  canDelete?: boolean;
  canEdit?: boolean;
}

interface FixtureImageProps {
  source: string | StaticImageData;
  alt: string;
  score?: number;
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

export async function getStaticProps() {
  const res = await getMatchs(0, 50);
  const matchs = res?.map((r) => ({ ...r, time: new Date(r.time) }));
  return {
    props: {
      matchs,
    },
    revalidate: 30,
  };
}

const FixtureImage = ({ source, alt, score }: FixtureImageProps) => {
  return (
    <div className="h-3/6 w-full m-auto md:p-4 bg-realwhite">
      <Image
        src={source}
        height={40}
        width={40}
        quality={100}
        layout="responsive"
        className="shadow m-2"
        alt={alt}
        loading="lazy"
      />
      {score && <p className="font-bold bg-white shadow p-1"> {score} </p>}
    </div>
  );
};

const Fixture = ({ canDelete, canEdit, matchs }: Props) => {
  //const [matchs, setMatchs] = useState<Match[]>([]);
  const [nextAllowed, setNextAllowed] = useState(true);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(STEP);
  const [match, setMatch] = useState<AddMatchDto>();
  const [id, setId] = useState<string>();
  const [editing, setEditing] = useState(false);
  const currentUser = useCurrentUser();

  // const getGames = async () => {
  //   const res = await getMatchs(0, 50);
  //   const auxRes = res?.map((r) => ({ ...r, time: new Date(r.time) }));
  //   if (auxRes) {
  //     setMatchs(auxRes);
  //   }
  // };

  // useEffect(() => {
  //   getGames();
  // }, []);

  const back = () => {
    setFrom(from - STEP);
    setTo(to - STEP);
    if (!nextAllowed && from <= matchs.length) {
      setNextAllowed(true);
    }
  };

  const next = () => {
    setFrom(from + STEP);
    setTo(to + STEP);
    if (to + STEP > matchs.length) {
      setNextAllowed(false);
    }
  };

  const deleteMatch = async (id: string) => {
    try {
      const res = await fetch(BASE_API_URL + "matches/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + currentUser?.token,
        },
      });
      const data = await res.json();
      alert("Partido borrado!");
      //getGames();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const editMatch = (match: Match) => {
    setId(match._id);
    const auxMatch = { ...match, time: match.time.toISOString() };
    setMatch(auxMatch);
    setEditing(true);
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
                  loading="lazy"
                  alt="Fecha"
                />
              </th>
              <th className="p-3 font-thin">
                {" "}
                <Image
                  src={torneo}
                  height={40}
                  width={40}
                  className="m-auto"
                  loading="lazy"
                  alt="Torneo"
                />{" "}
              </th>
              <th className="p-3 font-thin">
                <Image
                  src={gender}
                  height={40}
                  width={40}
                  className="m-auto"
                  loading="lazy"
                  alt="Genero"
                />
              </th>
              <th className="p-3 font-thin">
                <Image
                  src={home}
                  height={40}
                  width={40}
                  className="m-auto"
                  loading="lazy"
                  alt="Local"
                />
              </th>
              <th className="p-3 font-thin">
                <Image
                  src={away}
                  height={40}
                  width={40}
                  className="m-auto"
                  loading="lazy"
                  alt="Visita"
                />
              </th>
              <th className="p-3 font-thin">
                <Image
                  src={stadium}
                  height={30}
                  width={30}
                  className="m-auto"
                  loading="lazy"
                  alt="Lugar"
                />
              </th>
              <th className="p-3 font-thin">
                <Image
                  src={tv}
                  height={40}
                  width={40}
                  className="m-auto"
                  loading="lazy"
                  alt="Transmision"
                />
              </th>
              <th className="rounded-tr-xl p-3 font-thin">
                <Image
                  src={stats}
                  height={40}
                  width={40}
                  className="m-auto"
                  loading="lazy"
                  alt="Estadisticas"
                />
              </th>
            </tr>
          </thead>
          <tbody className="text-center fixturetxt paragraph-font">
            {matchs
              //.reverse()
              .slice(from, to)
              .map((match, i) => (
                <tr key={match._id} className="">
                  <td
                    className={`${
                      i == matchs.length - 1 && "rounded-bl-xl"
                    } h-fit w-fit`}
                  >
                    {" "}
                    {match.time.getDate()}
                    {"/"}
                    {match.time.getMonth() + 1}
                    <p className="font-bold">
                      {" "}
                      {" " + match.time.getUTCFullYear()}
                    </p>
                    {match.time.getHours()}
                    {":"}
                    {match.time.getMinutes() < 10
                      ? match.time.getMinutes() + "0"
                      : match.time.getMinutes()}
                  </td>
                  <td className="text-clip">
                    {" "}
                    <p className="text-clip"> {match.tournament} </p>
                  </td>
                  <td>
                    {match.category}
                    {"-"}
                    {match.gender}
                  </td>
                  <td>
                    {match.condition == "Local" ? (
                      <FixtureImage
                        source={clublogo}
                        alt="Pacifico"
                        score={match?.our_score}
                      />
                    ) : (
                      <FixtureImage
                        source={match.rival_icon}
                        alt={match.rival_name}
                        score={match?.rival_score}
                      />
                    )}
                  </td>
                  <td>
                    {match.condition != "Local" ? (
                      <FixtureImage
                        source={clublogo}
                        alt="Pacifico"
                        score={match?.our_score}
                      />
                    ) : (
                      <FixtureImage
                        source={match.rival_icon}
                        alt={match.rival_name}
                        score={match?.rival_score}
                      />
                    )}
                  </td>
                  <td>{match.field}</td>
                  <td>
                    {match?.transmission_link ? (
                      <a
                        href={match.transmission_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Link{" "}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td
                    className={`${i == matchs.length - 1 && "rounded-br-xl"}`}
                  >
                    {match?.stats_link ? (
                      <a
                        href={match.stats_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Link{" "}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  {currentUser && canDelete && (
                    <button
                      onClick={() => deleteMatch(match._id)}
                      className="bg-white mx-2 p-2 rounded h-12 shadow-lg mt-8 m-auto"
                    >
                      {" "}
                      Borrar{" "}
                    </button>
                  )}
                  {currentUser && canEdit && (
                    <button
                      onClick={() => editMatch(match)}
                      className="bg-gray bg-opacity-70 rounded mx-2 p-2 h-12 shadow-lg mt-8 m-auto"
                    >
                      {" "}
                      Editar{" "}
                    </button>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex mt-4 place-items-center h-10 paragraph-font rounded-lg shadow-lg overflow-hidden w-fit m-auto justify-center">
          <button
            className={`${
              from < STEP && "cursor-not-allowed opacity-50"
            } bg-white text-black h-full w-32 p-1`}
            disabled={from < STEP}
            onClick={back}
          >
            Atras
          </button>
          <button
            className={`${
              !nextAllowed && "cursor-not-allowed opacity-50"
            } bg-yellow text-realwhite h-full w-32 p-1`}
            disabled={!nextAllowed}
            onClick={next}
          >
            {" "}
            Siguiente{" "}
          </button>
        </div>
      </div>
      {editing && <AddFixture propState={match} id={id} />}
    </div>
  );
};

export default Fixture;
