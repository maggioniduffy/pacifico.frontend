import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import NewCard from "../../components/NewCard";
import { getNews } from "../../utils/api";
import { sections, socialMedia } from "../../utils/constants";
import Image from "next/image";

interface NewInfo {
  title: string;
  image: string;
  id: string;
  subtitle: string;
}

const STEP = 9;

const NewsPage = () => {
  const [news, setNews] = useState<NewInfo[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(9);

  const setNewsCall = (from: number, to: number) => {
    console.log("set news");

    getNews(from, to)
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
        <main className="h-screen mt-10 p-4">
          <div className="w-10/12 m-auto">
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
                        <div className="w-96 h-96">
                          <Image src={image} layout="fill" alt={title} />
                        </div>
                        <div className="rounded-tr-2xl bg-realwhite border-t-6 border-yellow absolute bottom-0 w-full h-20 flex flex-col place-items-center justify-center">
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
            <button onClick={loadMore}> Cargar mas </button>
          </div>
        </main>
      </>
    </div>
  );
};

export default NewsPage;
