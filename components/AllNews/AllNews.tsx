import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getNews } from "../../utils/api";
import MyButton from "../MyButton/MyButton";
import NewCard from "../NewCard";
import Footer from "../Footer";
import Search from "../../pages/news/Search";
import buscar from "../../public/assets/buscar.png";
import { BASE_API_URL } from "../../utils/constants";
import { useCurrentUser } from "../../hooks";

interface NewInfo {
  title: string;
  image: string;
  id: string;
  subtitle: string;
}

interface Props {
  isPage?: boolean;
  canDelete?: boolean;
  canEdit?: boolean;
}
const STEP = 9;

const AllNews = ({
  isPage = false,
  canDelete = false,
  canEdit = false,
}: Props) => {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState<NewInfo[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(9);
  const currentUser = useCurrentUser();

  const setNewsCall = (from: number, to: number) => {
    getNews(from, to, search)
      .then((res) => {
        console.log("res: ", res);
        const aux = res?.map(({ _id, title, subtitle, image }) => ({
          id: _id,
          title,
          subtitle,
          image,
        }));
        if (aux) setNews(aux);
      })
      .catch((e) => console.error(e));
  };

  const loadMore = () => {
    setFrom(from + STEP);
    setTo(to + STEP);
  };

  useEffect(() => {
    console.log("load more");
    setNewsCall(from, to);
  }, [from, to]);

  const setNewsSearch = (from: number, to: number, search: string) => {
    getNews(from, to, search)
      .then((res) => {
        console.log("res: ", res);
        const aux = res?.map(({ _id, title, subtitle, image }) => ({
          id: _id,
          title,
          subtitle,
          image,
        }));
        if (aux) setNews(aux);
      })
      .catch((e) => console.error(e));
  };

  const deleteNew = async (id: string) => {
    try {
      const res = await fetch(BASE_API_URL + "news/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + currentUser?.token,
        },
      });
      const data = await res.json();
      const resupdated = news.filter((n) => n.id != id);
      setNews(resupdated);
      alert("noticia borrada!");
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setFrom(0);
    setTo(9);
    setNewsSearch(from, to, search);
  }, [search]);

  return (
    <div className="min-h-screen">
      <Search search={search} setSearch={setSearch} />
      <main className="w-full mt-4">
        <div className="w-full m-auto h-full">
          {news.length <= 0 ? (
            <div className="h-full m-auto flex place-items-center">
              <div className="w-72 m-auto text-center flex flex-col place-items-center h-fit">
                <Image src={buscar} height={200} width={200} />
                <h3 className="m-4 text-center text-gray">
                  {" "}
                  No encontramos nada, lo sentimos.
                </h3>{" "}
              </div>
            </div>
          ) : (
            <>
              <div className="flex mt-2 m-auto w-10/12 flex-wrap place-items-center justify-center">
                {news.map(({ image, id, title, subtitle }, i) => {
                  const w =
                    (i + 1) % 5 == 0
                      ? "basis-1/1 md:basis-2/2 lg:basis-2/3"
                      : "basis-1/1 md:basis-1/2 lg:basis-1/3";
                  return (
                    <div
                      key={Date.now() + id}
                      className={`w-full p-2 rounded-xl overflow-hidden ${w}`}
                    >
                      <NewCard
                        title={title}
                        id={id}
                        //key={Date.now() + id}
                        canDelete={canDelete}
                        canEdit={canEdit}
                        deleteNew={deleteNew}
                      >
                        {/* <div className="relative">
                          <div className="w-96 h-96 rounded-xl">
                            <Image
                              src={image}
                              layout="fill"
                              alt={title}
                              className="rounded-xl"
                            />
                          </div>
                          <div className="rounded-tr-2xl overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow absolute bottom-0 w-full h-20 flex flex-col place-items-center drop-shadow-xl shadow-white justify-center">
                            <h5 className="md:text-xl text-ellipsis text-center text-black">
                              {" "}
                              {title}{" "}
                            </h5>
                            <p className="text-xs md:text-sm text-ellipsis text-center text-gray">
                              {" "}
                              {subtitle}{" "}
                            </p>
                          </div>
                        </div> */}
                        <div className="w-96">
                          <div className="w-96 h-96 relative rounded-xl">
                            <Image
                              src={image}
                              layout="fill"
                              alt={title}
                              //className="rounded-xl"
                            />
                          </div>
                          <div className="overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow w-full h-fit shadow-inner bottom-0">
                            <h2 className="font-bold  drop-shadow-xl mt-2 text-center text-shadow text-black">
                              {" "}
                              {title}{" "}
                            </h2>
                            <p className="text-xs drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray">
                              {subtitle}
                            </p>
                          </div>
                        </div>
                      </NewCard>
                    </div>
                  );
                })}{" "}
              </div>
              <div className="mx-auto w-fit mb-8 pb-8 pt-8">
                <MyButton onClick={loadMore}>
                  <h4 className="font-bold"> Cargar mas </h4>
                </MyButton>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AllNews;
