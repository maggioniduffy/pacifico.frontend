import React, { useEffect, useState } from "react";
import { ApiMatch, getMatchs } from "../../utils/api";
import { BASE_API_URL } from "../../utils/constants";
import LoadingSpinner from "../LoadingSpinner";
import clublogo from "../../public/assets/clublogo.png";
import Image from "next/image";

const STEP = 5;

const Fixture = () => {
  const [matchs, setMatchs] = useState<ApiMatch[]>();
  const [images, setImages] = useState<string[]>([]);
  const [limit, setLimit] = useState(5);
  const [stop, setStop] = useState(0);
  useEffect(() => {
    const setImage = async (id: string, i: number) => {
      const j = i + 1;
      try {
        const res = await fetch(BASE_API_URL + "attachment/files/" + id);
        const image = await res.blob();
        const src = URL.createObjectURL(image);
        return src;
      } catch (e) {
        if (j < 4) {
          setImage(id, j);
        }
      }
    };

    const getNews = async () => {
      const res = await getMatchs(stop, limit);
      const auxImages: string[] = [];
      const auxMatchs: ApiMatch[] = [];
      res?.forEach(async (item, i) => {
        const src = await setImage(item.rival_icon.id, 0);
        auxImages.push(src!);
        auxMatchs.push(item);
      });
      setImages(auxImages);
      setMatchs(auxMatchs);
    };
    getNews();
  }, [limit, stop]);

  const back = () => {
    if (stop - STEP >= 0) {
      setLimit(stop);
      setStop(stop - STEP);
    }
  };

  const next = () => {
    setStop(limit);
    setLimit(limit + STEP);
  };

  return (
    <div className="my-20 w-full h-96 flex flex-col justify-center">
      <h3 className="text-black header-font font-bold text-left text-5xl">
        {" "}
        Proximos Partidos{" "}
      </h3>
      {matchs && matchs?.length > 0 ? (
        <div className="h-full my-8 mb-16">
          <table className="table-auto h-full border-separate rounded-xl border-spacing-1 w-full">
            <thead className="bg-black text-yellow shadow-b-xl">
              <tr>
                <th className="rounded-tl-xl">Fecha</th>
                <th>Categoria</th>
                <th>Local</th>
                <th>Visita</th>
                <th>Estadio</th>
                <th>Transmision</th>
                <th className="rounded-tr-xl">Estadisticas</th>
              </tr>
            </thead>
            <tbody className="text-center paragraph-font">
              {matchs.map((match, i) => (
                <tr key={match._id} className="h-16">
                  <td
                    className={`${i == matchs.length - 1 && "rounded-bl-xl"}`}
                  >
                    {" "}
                    {match.time}{" "}
                  </td>
                  <td>
                    {match.category}
                    {"-"}
                    {match.gender}
                  </td>
                  <td>
                    {match.condition == "Local" ? (
                      <Image
                        src={clublogo}
                        height={40}
                        width={40}
                        layout="responsive"
                        alt="Pacifico"
                      />
                    ) : (
                      <Image
                        src={images[i]}
                        height={40}
                        width={40}
                        layout="responsive"
                        alt={match.rival_name}
                      />
                    )}
                  </td>
                  <td>
                    {match.condition != "Local" ? (
                      <Image
                        src={clublogo}
                        height={40}
                        width={40}
                        layout="responsive"
                        alt="Pacifico"
                      />
                    ) : (
                      <Image
                        src={images[i]}
                        height={40}
                        width={40}
                        layout="responsive"
                        alt={match.rival_name}
                      />
                    )}
                  </td>
                  <td>{match.field}</td>
                  <td>{match.transmission_link}</td>
                  <td
                    className={`${i == matchs.length - 1 && "rounded-br-xl"}`}
                  >
                    {match.stats_link}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex mt-2 place-items-center h-12 paragraph-font rounded-lg shadow-lg overflow-hidden w-fit m-auto justify-center">
            <button
              className={`${
                stop < STEP && "cursor-not-allowed opacity-50"
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
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Fixture;
