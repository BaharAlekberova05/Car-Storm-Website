import { useEffect, useState } from "react";
import NewsGrid from "../layouts/NewsGrid";
import HotSaleModels from "./HotSaleModels";
import { getNews } from "../services/apiProducts";
import slugify from "slugify";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((data) => setNews(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white mt-10 text-center">
        Latest <span className="my-blue">News</span>
      </h1>

      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 my-14">
        {news.map((item, i) => (
          <NewsGrid
            key={i}
            img={item.img}
            title={item.title}
            date={item.date}
            author={item.author}
            slug={slugify(item.title, { lower: true, strict: true })}
          />
        ))}
      </div>

      <HotSaleModels />
    </div>
  );
};

export default News;
