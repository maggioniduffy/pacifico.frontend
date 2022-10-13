import React, { useEffect, useState } from "react";
import { getMainNews } from "../../utils/api";
import Image from "next/image";
import Link from "next/link";
import { BASE_API_URL } from "../../utils/constants";
import LoadingSpinner from "../LoadingSpinner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      res?.forEach(async ({ image, title, subtitle, _id, body, time }, i) => {
        const src = await setImage(image.id, 0);
        auxImages.push(src!);
        console.log(time);
        const article = {
          title,
          subtitle,
          id: _id,
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
      {mainNews && images && images.length > 0 ? (
        <div className="flex h-full justify-between">
          <Carousel>
            {mainNews.map((mNew, i) => {
              return (
                <Link
                  key={mNew.time}
                  href={{
                    pathname: `/news/${mNew.title}`,
                    query: {
                      title: mNew.title,
                      subtitle: mNew.subtitle,
                      body: mNew.body,
                      time: mNew.time,
                      src: images[i],
                    },
                  }}
                >
                  <a className="main-new w-full basis-9/12 mr-4 relative shadow">
                    <Image
                      src={images[i]}
                      height={20}
                      width={30}
                      layout="fill"
                      alt={mNew.title}
                      priority
                      className="rounded-lg"
                    />
                    <div
                      data-aos="fade-up"
                      className="z-10 absolute bg-realwhite bottom-0 rounded-b rounded-t-2xl w-full h-24 flex flex-col text-center justify-center "
                    >
                      <h3 className="text-black font-bold text-2xl">
                        {" "}
                        {mNew.title}
                      </h3>
                      <h5 className="text-gray text-xl">{mNew.subtitle}</h5>
                    </div>
                  </a>
                </Link>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default News;
