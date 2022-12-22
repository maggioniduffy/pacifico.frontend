import React, { useEffect, useState } from "react";
import { ApiNew, getNews as getNewsApi } from "../../utils/api";
import LoadingSpinner from "../LoadingSpinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../MyButton/MyButton";

const News = () => {
  const [mainNews, setMainNews] = useState<ApiNew[]>();

  useEffect(() => {
    const getNews = async () => {
      const res = await getNewsApi();
      setMainNews(res);
    };
    getNews();
  }, []);

  return (
    <div className="main-new pt-10 w-full rounded-xl">
      <Carousel
        swipeable
        stopOnHover
        dynamicHeight
        showIndicators
        autoPlay
        infiniteLoop
        emulateTouch
        showStatus
        showArrows
        axis="horizontal"
        className="overflow-hidden h-fit rounded-xl"
      >
        {mainNews?.map((mNew) => {
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
              className="w-full h-full relative rounded-xl"
            >
              <a className="rounded-xl h-full">
                <div className="w-full h-full rounded-xl">
                  <Image
                    src={mNew.image}
                    layout="responsive"
                    height={9}
                    width={16}
                    alt={mNew.subtitle}
                    className="rounded-xl"
                  />
                </div>
                <div className="rounded-tr-2xl rounded-b-xl overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow w-full h-fit absolute shadow-inner bottom-0">
                  <h2 className="text-3xl drop-shadow-xl mt-2 text-center text-shadow text-black">
                    {" "}
                    {mNew.title}{" "}
                  </h2>
                  <p className="text-sm drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray">
                    {mNew.subtitle}
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
      </Carousel>
      <Link href="/news" className="w-full h-12 mt-1">
        <div className="w-full flex justify-center">
          <MyButton>
            <h4>Ver todas las noticias</h4>
          </MyButton>
        </div>
      </Link>
    </div>
  );
};

export default News;
