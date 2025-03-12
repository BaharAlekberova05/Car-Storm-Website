import { useEffect, useState } from "react";
import NewsGrid from "../layouts/NewsGrid";
import { getLimitedNews } from "../services/apiProducts";
// import NewsCard from "./NewsCard";

const LatestNews = () => {
  const [limitedNews, setLimitedNews] = useState([]);

  // useEffect(() => {
  //   getLimitedNews().then((data) => {
  //     setLimitedNews(data);
  //   });
  // }, []);

  useEffect(() => {
    async function fetchLimitedNews() {
      const data = await getLimitedNews();
      setLimitedNews(data);
    }
    fetchLimitedNews();
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-10 dark:text-white">
        Latest <span className="my-blue">News</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 dark:text-white gap-x-8 gap-y-14 mb-10">
        {limitedNews?.map((news, i) => (
          <NewsGrid
            id={news.id}
            key={i}
            img={news.img}
            title={news.title}
            date={news.date}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
