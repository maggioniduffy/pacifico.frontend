import React, { useEffect, useState } from "react";
import { getMainNews } from "../../utils/api";
import Image from "next/image";
import Link from "next/link";
const BASE_API_URL = "http://localhost:5000/";

interface NewArticle {
  title: string;
  subtitle: string;
  id: string;
  body: string;
  time: string;
}

interface Image {
  src: string;
  id: string;
}

const News = () => {
  const [mainNews, setMainNews] = useState<NewArticle[]>();
  const [images, setImages] = useState<string[]>([]);

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
      const res = await getMainNews();
      const auxImages: string[] = [];
      const auxNews: NewArticle[] = [];
      res?.forEach(async ({ image, title, subtitle, id, body, time }, i) => {
        const src = await setImage(image.id, 0);
        auxImages.push(src!);
        console.log(time);
        const article = {
          title,
          subtitle,
          id,
          body,
          time,
        };
        auxNews.push(article);
      });
      console.log("images len: ", auxImages);
      console.log("news len: ", auxNews);
      setImages(auxImages);
      setMainNews(auxNews);
    };
    getNews();
  }, []);

  return (
    <div className="main-new pt-10">
      {mainNews && images && images[0] ? (
        <div className="flex h-full justify-between">
          <Link
            href={{
              pathname: `/news/${mainNews[0].title}`,
              query: {
                title: mainNews[0].title,
                subtitle: mainNews[0].subtitle,
                body: mainNews[0].body,
                time: mainNews[0].time,
                src: images[0],
              },
            }}
          >
            <a className="main-new w-full basis-9/12 mr-4 relative shadow">
              <Image
                src={images[0]}
                height={20}
                width={30}
                layout="fill"
                alt={mainNews[0].title}
                priority
                className="rounded-lg"
              />
              <div
                data-aos="fade-up"
                className="z-10 absolute bg-realwhite bottom-0 rounded-b rounded-t-2xl w-full h-24 flex flex-col text-center justify-center "
              >
                <h3 className="text-black font-bold text-2xl">
                  {" "}
                  {mainNews[0].title}
                </h3>
                <h5 className="text-gray text-xl">{mainNews[0].subtitle}</h5>
              </div>
            </a>
          </Link>
          <aside className="basis-3/12 main-new">
            <div
              className={`h-full flex flex-col ${
                images.length <= 3
                  ? "justify-start space-y-4"
                  : "justify-between"
              }`}
            >
              {mainNews.slice(1).map((item, i) => {
                return (
                  <Link
                    key={images[i + 1]}
                    href={{
                      pathname: `/news/${item.title}`,
                      query: {
                        title: item.title,
                        subtitle: item.subtitle,
                        body: item.body,
                        time: item.time,
                        src: images[i + 1],
                      },
                    }}
                  >
                    <a className="little-new relative w-full">
                      <Image
                        src={images[i + 1]}
                        layout="fill"
                        height={10}
                        width={10}
                        alt={mainNews[i + 1].title}
                        priority
                        className="rounded-lg"
                      />
                      <div
                        data-aos="fade-up"
                        className="z-10 bg-realwhite w-full rounded-b rounded-t-xl h-20 p-2 absolute bottom-0"
                      >
                        <h5 className="text-black font-bold text-left text-xl">
                          {" "}
                          {item.title}
                        </h5>
                        <p className="text-gray text-left text-l">
                          {item.subtitle}
                        </p>
                      </div>
                    </a>
                  </Link>
                );
              })}
              <Link href={"/news"}>
                <a>
                  <div className="h-fit bg-gold-100 hover:border-4 border border-yellow w-full p-4 shadow rounded-2xl">
                    <h3 className="text-center text-black font-bold">
                      {" "}
                      Ver mas{" "}
                    </h3>
                  </div>
                </a>
              </Link>
            </div>
          </aside>
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
  );
};

export default News;
