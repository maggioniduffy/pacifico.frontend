import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { months, weekDays } from "../../utils";
import { sections, socialMedia } from "../../utils/constants";
import Image from "next/image";

interface NewArticleQuery {
  title: string;
  subtitle: string;
  id: string;
  body: string;
  time: Date;
  src: string;
}

const NewPage = () => {
  const router = useRouter();
  const [data, setData] = useState<NewArticleQuery>();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    console.log("effect", router.isReady);
    if (!router.isReady) return;
    console.log(router);
    console.log("is ready");
    const { query } = router;
    console.log("query", query);
    const auxQuery: NewArticleQuery = {
      title: query.title as string,
      subtitle: query.subtitle as string,
      id: query.id as string,
      body: query.body as string,
      time: new Date(query.time as string),
      src: query.src as string,
    };
    setLoaded(true);
    setData(auxQuery);
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
      <Header
        sections={sections}
        socialMedia={socialMedia}
        alreadyScrolled={true}
        showImage={false}
        showMenu={false}
      />
      <div className="min-h-screen">
        {loaded && data ? (
          <div className="bg-realwhite p-8 px-16 w-10/12 md:w-8/12 mt-10 m-auto mb-5 rounded h-fit shadow rounded-lg">
            <h1 className="text-left text-6xl camelcase font-medium ">
              {data.title}
            </h1>

            <h3 className="text-lext text-3xl mt-1">{data.subtitle}</h3>
            <h5 className="text-gray">
              {" "}
              {weekDays.get(data.time.getDay()) + " " + data.time.getDate()}
              {" de "}
              {months.get(data.time.getMonth())}
              {", "}
              {data.time.getFullYear()}
            </h5>
            <div className="w-10/12 h-fit relative m-auto my-8 rounded-xl">
              <Image
                src={data.src}
                layout="responsive"
                width={16}
                height={9}
                className="rounded-lg"
                alt=""
              />
            </div>
            <p className="mt-8 text-lg">{data.body}</p>
          </div>
        ) : (
          <div className="h-screen w-full p-auto flex place-items-center justify-center">
            <div role="status" className="m-auto">
              <svg
                className="inline m-auto w-16 h-16 text-black animate-spin dark:text-gray-600 fill-yellow"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
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
