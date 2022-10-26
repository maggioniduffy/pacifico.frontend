import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import NewCard from "../../components/NewCard";
import { getNews } from "../../utils/api";
import { sections, socialMedia } from "../../utils/constants";

interface NewInfo {
  title: string;
  image: string;
  id: string;
  subtitle: string;
}

const STEP = 10;

const NewsPage = () => {
  const [news, setNews] = useState<NewInfo[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10);

  const setNewsCall = (from: number, to: number) => {
    getNews(0, 10).then((res) => {
      const aux = res?.map(({ _id, title, subtitle, image }) => ({
        id: _id,
        title,
        subtitle,
        image,
      }));
      if (aux) setNews([...news, ...aux]);
    });
  };

  useEffect(() => {
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
        <main className="min-h-screen mt-10 p-4">
          <div className="w-10/12 m-auto">
            <h1> Noticias </h1>
            <div className="flex flex-wrap place-items-center justify-around">
              {news.map(({ image, id, title, subtitle }) => (
                <NewCard
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  id={id}
                  image={image}
                />
              ))}{" "}
            </div>
          </div>
        </main>
      </>
    </div>
  );
};

export default NewsPage;
