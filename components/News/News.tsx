import React, { useEffect, useState } from "react";
import { ApiNew, getNews as getNewsApi } from "../../utils/api";
import LoadingSpinner from "../LoadingSpinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../MyButton/MyButton";
import { useWindowDimensions } from "../../hooks";

const News = () => {
  const [mainNews, setMainNews] = useState<ApiNew[]>();
  const { height, width } = useWindowDimensions();
  let h = width > 768 ? 9 : 16;

  useEffect(() => {
    const getNews = async () => {
      const res = await getNewsApi();
      setMainNews(res);
    };
    getNews();
  }, []);

  return (
    <div className="pt-10 rounded-xl">
      {mainNews && (
        <>
          <Link
            href={{
              pathname: "/news/[title]",
              query: {
                title: mainNews[0].title,
                id: mainNews[0]._id,
              },
            }}
            key={mainNews[0].image}
            target="_blank"
            className="w-96 h-56 shadow-xl m-4"
          >
            <a className="rounded-xl h-full">
              <div className="w-full h-full rounded-xl">
                <Image
                  src={mainNews[0].image}
                  layout="responsive"
                  height={h}
                  width={16}
                  quality={100}
                  alt={mainNews[0].subtitle}
                />
              </div>
              <div className="overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow w-full h-fit shadow-inner bottom-0">
                <h2 className="font-bold  drop-shadow-xl mt-2 text-center text-shadow text-black">
                  {" "}
                  {mainNews[0].title}{" "}
                </h2>
                <p className="text-xs drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray">
                  {mainNews[0].subtitle}
                </p>
              </div>
            </a>
          </Link>
          <div className="flex">
            {mainNews?.slice(1).map((mNew) => {
              return (
                <Link
                  href={{
                    pathname: "/news/[title]",
                    query: {
                      title: mNew.title,
                      id: mNew._id,
                    },
                  }}
                  key={mNew.image}
                  target="_blank"
                  className="w-96 h-96 shadow-xl m-4"
                >
                  <a className="rounded-xl h-full">
                    <div className="w-full h-full rounded-xl">
                      <Image
                        src={mNew.image}
                        layout="responsive"
                        height={h}
                        width={16}
                        quality={100}
                        alt={mNew.subtitle}
                      />
                    </div>
                    <div className="overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow w-full h-fit shadow-inner bottom-0">
                      <h2 className="font-bold  drop-shadow-xl mt-2 text-center text-shadow text-black">
                        {" "}
                        {mNew.title}{" "}
                      </h2>
                      <p className="text-xs drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray">
                        {mNew.subtitle}
                      </p>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
          {mainNews && (
            <Link href="/news" className="w-full h-12 mt-1">
              <div className="w-full flex justify-center">
                <MyButton>
                  <h4 className="text-xs md:text-sm">Ver todas las noticias</h4>
                </MyButton>
              </div>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default News;
