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
import { Footer } from "../../components";
import AddNew from "../../components/Admin/News/HandleNew";

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
      console.log("QUERY RES: ", res);
      const auxRes = { ...res!, time: new Date(res!.time) };
      setLoaded(true);
      setData(auxRes);
    });
  };

  const setOtherNewsCall = async () => {
    getNews(0, 8).then((res) => {
      const auxRes = res
        ?.filter(({ _id }) => {
          console.log(_id, data?._id);
          return _id != (router!.query!.id as string);
        })
        .map(({ title, _id, image, subtitle }) => ({
          id: _id,
          title,
          image,
          subtitle,
        }));
      setOtherNews(auxRes);
      console.log(auxRes);
    });
  };

  useEffect(() => {
    setNewQuery();
    setOtherNewsCall();
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
      <Header sections={sections} showMenu={false} />
      <div className="min-h-screen flex flex-col justify-between">
        <Link href="/news">
          <button
            title="Volver a Noticias"
            className="invisible md:visible fixed top-15 left-10 h-fit w-8"
          >
            <div className="h-8 w-8 rounded-full">
              <Image src={left} layout="fill" alt="Volver a noticias" />
            </div>
          </button>
        </Link>

        <div className="bg-white p-2 rounded-xl bg-opacity-50 pt-4 lg:p-8 lg:px-16 w-10/12 md:w-8/12 mt-16 m-auto mb-5 h-fit">
          <h1 className="text-left text-3xl md:text-5xl lg:text-6xl camelcase mb-4 font-medium ">
            {data?.title}
          </h1>

          <h3 className="text-lext text-gray text-lg md:text-2xl lg:text-3xl mt-1">
            {data?.subtitle}
          </h3>
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
          <h5 className="text-gray text-sm lg:text-md">
            {" "}
            {weekDays.get(data?.time.getDay()) + " " + data?.time.getDate()}
            {" de "}
            {months.get(data?.time.getMonth())}
            {", "}
            {data?.time.getFullYear()}
          </h5>
          <p className="mt-8 indent-3 leading-relaxed text-justify text-sm md:text-lg">
            {data?.body}
          </p>
          {router.query.edit && <AddNew />}
        </div>
        {otherNews && otherNews?.length > 0 && (
          <div className="bg-realwhite p-4">
            <h4 className="text-center text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Tambien te puede interesar{" "}
            </h4>
            <div className="flex flex-row w-full my-4 overflow-x-auto overflow-y-hidden place-items-center justify-center space-x-2">
              {otherNews?.map(({ title, id, image, subtitle }) => (
                <div
                  key={Date.now() + id}
                  className={`w-56 h-44 rounded-xl shadow`}
                >
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
                      <div className="rounded-tr-2xl bg-white border-t-4 border-yellow absolute bottom-0 w-full h-16 flex flex-col place-items-center justify-center text-ellipsis">
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default NewPage;
