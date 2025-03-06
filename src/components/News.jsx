import NewsGrid from "../layouts/NewsGrid";

const News = () => {
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
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/01/%E5%95%86%E5%8A%A1%E8%BD%A6%E5%B0%81%E9%9D%A2.jpg",
      title: "Holiday Notice – Chinese New Year",
      date: "January 23, 2025",
    },
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/01/life_3-768x432.png",
      title:
        "2025 Changan Qiyuan Q05 True Value Edition: A Comprehensive Usability",
      date: "January 10, 2025",
    },
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/01/screenshot_2025-01-10_17-25-06-768x401.png",
      title: "BYD Xia: The Ultimate MPV for Modern Families",
      date: "January 10, 2025",
    },
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2025/01/s02-s800.jpg",
      title:
        "HarmonyOS Intelligent Mobility in 2024: Rapid Growth and Rising Prestige",
      date: " January 03, 2025",
    },
    {
      img: "https://www.ddongauto.com/wp-content/uploads/2024/12/ld03.jpg",
      title: "2025 Toyota Camry Radiance Edition: Style Meets Performance",
      date: " December 27, 2024",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6">
        Latest <span className="my-blue">News</span>
      </h1>

      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8 xl:grid-cols-3">
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

export default News;
