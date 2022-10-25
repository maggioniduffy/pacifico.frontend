import React, { useEffect, useState } from "react";
import { ApiNew, getNews as getNewsApi } from "../../utils/api";
import LoadingSpinner from "../LoadingSpinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const [mainNews, setMainNews] = useState<ApiNew[]>();

  useEffect(() => {
    const getNews = async () => {
      const res = await getNewsApi();
      setMainNews(res);
      console.log(mainNews);
    };
    getNews();
  }, []);

  return (
    <div className="main-new pt-10 w-full rounded-xl overflow-hidden">
      {mainNews ? (
        <Carousel
          swipeable
          stopOnHover
          dynamicHeight
          showIndicators
          autoPlay
          infiniteLoop
          emulateTouch
          axis="horizontal"
          className="shadow rounded-xl overflow-hidden h-fit"
        >
          {mainNews.map((mNew) => {
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
                className="w-full h-full shadow relative rounded-xl"
              >
                <a className="rounded-xl h-full">
                  <div className="w-full h-full rounded-xl">
                    <Image
                      src={mNew.image}
                      layout="responsive"
                      height={9}
                      width={16}
                      alt={mNew.subtitle}
                    />
                  </div>
                  <div className="rounded-t-xl w-full h-fit absolute bottom-0">
                    <h2 className="text-4xl drop-shadow-xl text-center text-shadow mb-8 font-bold text-white">
                      {" "}
                      {mNew.title}{" "}
                    </h2>
                  </div>
                </a>
              </Link>
            );
          })}
        </Carousel>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default News;
