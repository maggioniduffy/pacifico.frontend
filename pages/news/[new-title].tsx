import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { months, weekDays } from "../../utils";
import { sections, socialMedia } from "../../utils/constants";
import Image from "next/image";
import NewCard from "../../components/NewCard";
import { getNew, getNews } from "../../utils/api";
import Link from "next/link";
import left from "../../public/assets/left-arrow.png";

interface NewArticle {
  title: string;
  subtitle: string;
  _id: string;
  body: string;
  time: Date;
  image: string;
}

interface OtherNew {
  id: string;
  title: string;
  image: string;
  subtitle: string;
}

const NewPage = () => {
  const router = useRouter();
  const [data, setData] = useState<NewArticle>();
  const [loaded, setLoaded] = useState(false);
  const [otherNews, setOtherNews] = useState<OtherNew[]>();

  const setNewQuery = async () => {
    getNew(router!.query!.id as string).then((res) => {
      const auxRes = { ...res!, time: new Date(res!.time) };
      setLoaded(true);
      setData(auxRes);
    });
  };

  const setOtherNewsCall = async () => {
    getNews().then((res) => {
      const auxRes = res
        ?.filter(({ _id }) => _id != data?._id)
        .map(({ title, _id, image, subtitle }) => ({
          id: _id,
          title,
          image,
          subtitle,
        }));
      setOtherNews(auxRes);
    });
  };

  useEffect(() => {
    setNewQuery();
    if (data) {
      setOtherNewsCall();
    }
  }, [router, router.isReady, router.query]);

  return (
    <>
      <Head>
        <title> Pacifico Basquet </title>
        <meta
          name="description"
          content="Club Pacifico Basquet #DecanoPasion. Neuquen"
        />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Header sections={sections} socialMedia={socialMedia} showMenu={false} />
      <div className="min-h-screen">
        <Link href="/news">
          <button className="fixed top-15 left-10 h-fit w-12">
            <div className="h-12 w-12 shadow shadow-yellow rounded-full">
              <Image src={left} layout="fill" alt="Volver a noticias" />
            </div>
          </button>
        </Link>

        <div className="bg-transparent p-8 px-16 w-10/12 md:w-8/12 mt-16 m-auto mb-5 h-fit">
          <h1 className="text-left text-6xl camelcase font-medium ">
            {data?.title}
          </h1>

          <h3 className="text-lext text-3xl mt-1">{data?.subtitle}</h3>
          {data?.image && (
            <div className="w-10/12 h-fit relative my-8 rounded-xl">
              <Image
                src={data?.image}
                layout="responsive"
                width={16}
                height={9}
                className="rounded-lg"
                alt=""
              />
            </div>
          )}
          <h5 className="text-gray">
            {" "}
            {weekDays.get(data?.time.getDay()) + " " + data?.time.getDate()}
            {" de "}
            {months.get(data?.time.getMonth())}
            {", "}
            {data?.time.getFullYear()}
          </h5>
          <p className="mt-8 indent-3 leading-relaxed text-justify text-lg">
            {data?.body}
          </p>
        </div>
        <div className="bg-realwhite shadow shadow-yellow mt-8">
          <h4 className="text-center text-xl mt-2">
            {" "}
            Tambien te puede interesar{" "}
          </h4>
          <div className="flex flex-row w-10/12 my-4 mx-auto overflow-x-auto place-items-center justify-center">
            {otherNews?.map(({ title, id, image, subtitle }) => (
              <NewCard
                title={title}
                image={image}
                id={id}
                key={id}
                subtitle={subtitle}
              />
            ))}
          </div>
        </div>
      </div>
      <footer className="h-16 w-full p-auto bottom-0">
        <h5 className="text-white text-center text-sm">
          {" "}
          Made by Faustino Maggioni Duffy
        </h5>
      </footer>
    </>
  );
};

export default NewPage;
