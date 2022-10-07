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
  }, []);

  return (
    <div className="main-new pt-10">
      {mainNews && images && images[0] && (
        <div className="flex h-full justify-between">
          <div className="main-new w-full basis-9/12 mr-4 relative shadow">
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
          </div>
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
                  </div>
                );
              })}

              <div className="h-1/6 bg-white bg-opacity-50 w-full rounded-xl shadow">
                <h5 className="m-auto text-center text-black text-xl">
                  {" "}
                  Ver mas{" "}
                </h5>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default News;
