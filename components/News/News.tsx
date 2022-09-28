import React, { useEffect, useState } from "react";
import { ApiNew, getMainNews } from "../../utils/api";

const News = () => {
  const [mainNews, setMainNews] = useState<ApiNew[]>();

  useEffect(() => {
    const getNews = async () => {
      const res = await getMainNews();
      return res;
    };
    getNews().then((news) => {
      setMainNews(news);
      console.log(news);
    });
  }, []);

  return (
    <div>
      <div className="main-new text-white">
        {mainNews && <h3>{mainNews[0].title}</h3>}
      </div>
      <aside>
        <ul></ul>
      </aside>
    </div>
  );
};

export default News;
