import React, { useEffect, useState } from "react";
import { getImage, getMainNews } from "../../utils/api";
import Image from "next/image";
const BASE_API_URL = "http://localhost:5000/";

interface NewArticle {
  title: string;
  subtitle: string;
  id: string;
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
      try {
        const res = await fetch(BASE_API_URL + "attachment/files/" + id);
        const image = await res.blob();
        const src = URL.createObjectURL(image);
        return src;
      } catch (e) {}
    };
    const getNews = async () => {
      const res = await getMainNews();
      const auxImages: string[] = [];
      const auxNews: NewArticle[] = [];
      res?.forEach(async ({ image, title, subtitle, id }, i) => {
        const src = await setImage(image.id, i);
        auxImages.push(src!);
        const article = {
          title,
          subtitle,
          id,
        };
        auxNews.push(article);
      });
      console.log("images len: ", auxImages);
      console.log("news len: ", auxNews);
      setImages(auxImages);
      setMainNews(auxNews);
    };
    getNews();
    setTimeout(() => {
      if (mainNews && images) {
        const newOrderNews = [...mainNews!];
        const newOrderImages = [...images];
        mainNews?.forEach((mNew, i) => {
          newOrderNews[(i + 1) % mainNews.length] = mNew;
        });
        images?.forEach((image, i) => {
          newOrderImages[(i + 1) % images.length] = image;
        });
        setImages(newOrderImages);
        setMainNews(newOrderNews);
      }
    }, 1000);
    return;
  }, []);

  return (
    <div className="h-96">
      {mainNews && images && images[0] && (
        <div className="flex h-full justify-between">
          <div className="main-new bg-black text-white h-full w-full basis-10/12 mr-4 rounded-xl relative shadow">
            <Image
              src={images[0]}
              height={20}
              width={30}
              layout="fill"
              alt={mainNews[0].title}
              priority
              className="rounded-lg"
            />
            <div className="z-40 absolute bg-black bg-opacity-20 bottom-0 w-full p-2 rounded-b-xl">
              <h3 className="text-white text-left text-2xl">
                {" "}
                {mainNews[0].title}
              </h3>
              <h5 className="text-white text-left text-xl">
                {mainNews[0].subtitle}
              </h5>
            </div>
          </div>
          <aside className="basis-2/12">
            <ul className="h-full">
              {mainNews.slice(1).map((item, i) => {
                return (
                  <li
                    key={images[i + 1]}
                    className="h-4/12 w-full mb-2 rounded-lg relative shadow"
                  >
                    <div className="z-40 absolute bg-black bg-opacity-20 bottom-0 w-full p-2 rounded-b-xl">
                      <h5 className="text-white text-left text-xl">
                        {" "}
                        {item.title}
                      </h5>
                      <p className="text-white text-left text-l">
                        {item.subtitle}
                      </p>
                    </div>
                    <Image
                      src={images[i + 1]}
                      layout="fill"
                      height={20}
                      width={20}
                      alt={mainNews[i + 1].title}
                      priority
                      className="rounded"
                    />
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      )}
    </div>
  );
};

export default News;
