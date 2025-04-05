import { useEffect, useState } from "react";
import NewsGrid from "../layouts/NewsGrid";
import HotSaleModels from "./HotSaleModels";
import { getNews } from "../services/apiProducts";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    getNews()
      .then((data) => {
        if (data) {
          setNews(data);
        } else {
          setError("Could not load news."); 
        }
      })
      .catch((err) => {
        setError("An error occurred while fetching news."); 
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white mt-10 text-center">
        Latest <span className="my-blue">News</span>
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p> 
      ) : (
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 my-14">
          {news.length === 0 ? (
            <p>No news available...</p>
          ) : (
            news.map((item, i) => (
              <NewsGrid
                key={i}
                img={item.img}
                title={item.title}
                date={item.date}
                author={item.author}
                id={item.id}
              />
            ))
          )}
        </div>
      )}

      <HotSaleModels />
    </div>
  );
};

export default News;
