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
      res?.forEach(async ({ image, title, subtitle, id }, i) => {
        const src = await setImage(image.id, 0);
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
    const rotateNewsInterval = setInterval(() => {
      console.log("interval");
      rotate();
    }, 2000);

    return () => clearInterval(rotateNewsInterval);
  }, []);

  const rotate = () => {
    if (mainNews && images) {
      console.log("time to a change");
      const firstNew = mainNews.shift()!;
      const newOrderNews = JSON.parse(JSON.stringify(mainNews));
      newOrderNews.push(firstNew);
      console.log("newOrderNews len: ", newOrderNews.length);
      const firstImage = images.shift()!;
      const newOrderImages = JSON.parse(JSON.stringify(images));
      const imagesLen = newOrderImages.push(firstImage);
      console.log("newOrderImages len: ", imagesLen);
      setImages(newOrderImages);
      setMainNews(newOrderNews);
    }
  };

  return (
    <div className="main-new pt-10">
      {mainNews && images && images[0] && (
        <div className="flex h-full justify-between">
          <div className="main-new w-full basis-9/12 mr-4 relative">
            <Image
              src={images[0]}
              height={20}
              width={30}
              layout="fill"
              alt={mainNews[0].title}
              priority
              className="rounded-lg"
            />
            <div className="z-10 absolute bg-realwhite bottom-0 rounded-b w-full h-20 text-center p-2 px-32 ">
              <h3 className="text-black font-bold text-2xl">
                {" "}
                {mainNews[0].title}
              </h3>
              <h5 className="text-gray text-xl">{mainNews[0].subtitle}</h5>
            </div>
          </div>
          <aside className="basis-3/12 main-new">
            <div
              className={`h-full flex flex-col ${
                images.length <= 3 ? "mb-4" : "justify-between"
              }`}
            >
              {mainNews.slice(1).map((item, i) => {
                return (
                  <div
                    key={images[i + 1]}
                    className="little-new relative w-full"
                  >
                    <Image
                      src={images[i + 1]}
                      layout="fill"
                      height={10}
                      width={10}
                      alt={mainNews[i + 1].title}
                      priority
                      className="rounded-lg"
                    />
                    <div className="z-10 bg-realwhite w-full rounded-b h-20 p-2 absolute bottom-0">
                      <h5 className="text-black font-bold text-left text-xl">
                        {" "}
                        {item.title}
                      </h5>
                      <p className="text-gray text-left text-l">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default News;
