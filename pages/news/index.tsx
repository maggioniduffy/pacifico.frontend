import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import NewCard from "../../components/NewCard";
import { getNews } from "../../utils/api";
import { sections, socialMedia } from "../../utils/constants";
import Image from "next/image";
import MyButton from "../../components/MyButton/MyButton";
import Search from "./Search";
import buscar from "../../public/assets/buscar.png";

interface NewInfo {
  title: string;
  image: string;
  id: string;
  subtitle: string;
}

const STEP = 9;

const NewsPage = () => {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState<NewInfo[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(9);

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
        if (aux) setNews([...news, ...aux]);
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

  useEffect(() => {
    setFrom(0);
    setTo(9);
    setNewsSearch(from, to, search);
  }, [search]);

  return (
    <div>
      <Head>
        <title> Pacifico Basquet </title>
        <meta
          name="description"
          content="Club Pacifico Basquet #DecanoPasion. Neuquen"
        />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <>
        <Header
          showMenu={false}
          sections={sections}
          socialMedia={socialMedia}
        />
        <Search search={search} setSearch={setSearch} />
        <main className="h-screen w-full mt-4">
          <div className="w-10/12 m-auto h-full">
            {news.length <= 0 ? (
              <div className="h-4/6 m-auto flex place-items-center">
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
                <div className="flex mt-2 flex-wrap place-items-center justify-center">
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
                        <NewCard title={title} id={id} key={Date.now() + id}>
                          <div className="relative">
                            <div className="w-96 h-96 rounded-xl">
                              <Image
                                src={image}
                                layout="fill"
                                alt={title}
                                className="rounded-xl"
                              />
                            </div>
                            <div className="rounded-tr-2xl overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow absolute bottom-0 w-full h-20 flex flex-col place-items-center drop-shadow-xl shadow-white justify-center">
                              <h5 className="text-lg text-center text-black">
                                {" "}
                                {title}{" "}
                              </h5>
                              <p className="text-sm text-center text-gray">
                                {" "}
                                {subtitle}{" "}
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
          <Footer />
        </main>
      </>
    </div>
  );
};

export default NewsPage;
