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
    getNews(0, 8).then((res) => {
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
          <button className="fixed top-15 left-10 h-fit w-8">
            <div className="h-8 w-8 shadow shadow-yellow rounded-full">
              <Image src={left} layout="fill" alt="Volver a noticias" />
            </div>
          </button>
        </Link>

        <div className="bg-white rounded-xl bg-opacity-50  p-8 px-16 w-10/12 md:w-8/12 mt-16 m-auto mb-5 h-fit">
          <h1 className="text-left text-6xl camelcase font-medium ">
            {data?.title}
          </h1>

          <h3 className="text-lext text-3xl mt-1">{data?.subtitle}</h3>
          {data?.image && (
            <div className="w-full h-fit relative my-8">
              <Image
                src={data?.image}
                layout="responsive"
                width={16}
                height={9}
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
          <p className="mt-8 indent-3 leading-relaxed text-justify text-sm">
            {data?.body}
          </p>
        </div>
        <div className="bg-realwhite shadow shadow-yellow mt-8 p-4">
          <h4 className="text-center text-xl mt-2">
            {" "}
            Tambien te puede interesar{" "}
          </h4>
          <div className="flex flex-row w-full my-4 overflow-x-auto overflow-y-hidden place-items-center justify-start space-x-2">
            {otherNews?.map(({ title, id, image, subtitle }) => (
              <div key={Date.now() + id} className={`w-56 h-44 p-2 rounded-xl`}>
                <NewCard title={title} id={id} key={Date.now() + id}>
                  <div className="relative h-fit w-fit">
                    <div className="w-56 h-44">
                      <Image
                        src={image}
                        layout="fill"
                        alt={title}
                        className="rounded"
                      />
                    </div>
                    <div className="rounded-tr-2xl bg-realwhite border-t-4 border-yellow absolute bottom-0 w-full h-16 flex flex-col place-items-center justify-center text-ellipsis">
                      <h5 className="text-sm text-center text-black">
                        {" "}
                        {title}{" "}
                      </h5>
                    </div>
                  </div>
                </NewCard>
              </div>
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
