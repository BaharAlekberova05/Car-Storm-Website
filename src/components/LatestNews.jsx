import NewsGrid from "../layouts/NewsGrid";
// import NewsCard from "./NewsCard";

const LatestNews = () => {
  const newsData = [
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/02/screenshot_2025-02-27_15-29-25.png",
      title: "BYD Song Plus Smart Driving Edition: Is It Worth Buying?",
      date: "February 27, 2025",
    },
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/02/icvc-pc-768x400.jpg",
      title: "2025 Denza N7 Debuts with Smart Driving and 800V Fast Charging",
      date: "February 19, 2025",
    },
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/02/design-ratio-1-768x532.jpg",
      title: "Avatr 07 Pro+ Launches with Huawei ADS SE Smart Driving",
      date: " February 19, 2025",
    },
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/02/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250212115457-1024x576-2-768x432.png",
      title: "BYD’s “God’s Eye” Smart Driving: A New Era for Affordable ADAS",
      date: " February 14, 2025",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-10 dark:text-white">
        Latest <span className="my-blue">News</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 dark:text-white gap-x-8 gap-y-14 mb-10">
        {newsData.map((news, i) => (
          <NewsGrid
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
