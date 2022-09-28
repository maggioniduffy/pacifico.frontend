import React, { useEffect, useState } from "react";
import { getImage, getMainNews } from "../../utils/api";
import Image from "next/image";

interface NewArticle {
  src: string;
  title: string;
  subtitle: string;
  id: string;
}
const News = () => {
  const [mainNews, setMainNews] = useState<NewArticle[]>();

  useEffect(() => {
    const getNews = async () => {
      const res = await getMainNews();
      return res;
    };
    getNews().then((items) => {
      const mainNews = items?.map((item, i) => {
        const title = item.title;
        const subtitle = item.subtitle;
        const id = item.id;
        return {
          id,
          title,
          subtitle,
          src: "",
        };
      });
      items?.forEach((item, i) => {
        getImage(item.image.id).then((value) => {
          console.log("value: ", value);
          mainNews![i].src = value!;
        });
      });
      console.log(mainNews);
      setMainNews(mainNews);
    });
  }, []);

  return (
    <div>
      {mainNews && (
        <>
          <div className="main-new text-white">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={mainNews[0].src} layout="fill" />
            <h3>{mainNews[0].title}</h3>
          </div>
          <aside>
            <ul>
              {mainNews.slice(1).map((item) => {
                return (
                  <li key={item.id}>
                    <h5> {item.title} </h5>
                  </li>
                );
              })}
            </ul>
          </aside>
        </>
      )}
    </div>
  );
};

export default News;
