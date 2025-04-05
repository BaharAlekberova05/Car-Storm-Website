import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaThumbsUp,
  FaCommentDots,
} from "react-icons/fa";
import LatestNews from "./LatestNews";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getNews } from "../services/apiProducts";
import { useTranslation } from "react-i18next";

// Component for comment rendering
const Comment = ({ userName, date, message, userImg }) => (
  <div className="flex items-start space-x-4">
    <img src={userImg} alt="User" className="w-12 h-12 rounded-full" />
    <div>
      <p className="text-sm text-black dark:text-gray-300">
        <strong>{userName}</strong> - {date}
      </p>
      <p className="text-gray-400 dark:text-gray-400 mt-2">{message}</p>
    </div>
  </div>
);

const NewsDetails = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getNews().then((data) => {
      const matchedNews = data?.find((item) => item.id === Number(slug));
      setNews(matchedNews || null);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!news) {
    return <p>{t("newsNotFound")}</p>; // Localization for "News not found!"
  }

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center dark:text-white my-10">
        {t("newss")} <span className="my-blue">{t("details")}</span>
      </h1>

      {/* News Title */}
      <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">
        {news.title}
      </h1>

      {/* Meta Info */}
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span>{news.date}</span>
        <span>{news.author}</span>
      </div>

      {/* Main Image */}
      <img
        src={news.img}
        alt={news.title}
        className="w-full h-[480px] object-cover rounded-lg mb-8"
      />

      {/* News Description */}
      <div className="text-lg text-gray-800 dark:text-gray-300 mb-8">
        <p className="mb-6">{news.description}</p>
      </div>

      {/* Social Share & Comments */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 dark:text-gray-400">
            {t("share")}:
          </span>
          <button className="text-blue-500 hover:text-blue-700 flex items-center cursor-pointer">
            <FaFacebook className="w-5 h-5 inline mr-2" />
            Facebook
          </button>
          <button className="text-blue-500 hover:text-blue-700 flex items-center cursor-pointer">
            <FaTwitter className="w-5 h-5 inline mr-2" />
            Twitter
          </button>
          <button className="text-blue-500 hover:text-blue-700 flex items-center cursor-pointer">
            <FaLinkedin className="w-5 h-5 inline mr-2" />
            LinkedIn
          </button>
        </div>

        {/* Like & Comments */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-gray-500 dark:text-gray-400">
            <FaThumbsUp className="w-5 h-5 mr-2" />
            <span>{t("like")}</span>
          </button>
          <button className="flex items-center text-gray-500 dark:text-gray-400">
            <FaCommentDots className="w-5 h-5 mr-2" />
            <span>{t("comment")}</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 p-6 rounded-lg mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
          {t("comments.title")}
        </h3>

        <div className="space-y-4">
          <Comment
            userName={t("comments.user1.name")}
            date={t("comments.user1.date")}
            message={t("comments.user1.message")}
            userImg="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Comment
            userName={t("comments.user2.name")}
            date={t("comments.user2.date")}
            message={t("comments.user2.message")}
            userImg="https://randomuser.me/api/portraits/men/2.jpg"
          />
          <Comment
            userName={t("comments.user1.name")}
            date={t("comments.user1.date")}
            message={t("comments.user1.message")}
            userImg="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Comment
            userName={t("comments.user2.name")}
            date={t("comments.user2.date")}
            message={t("comments.user2.message")}
            userImg="https://randomuser.me/api/portraits/men/2.jpg"
          />
        </div>
      </div>

      <LatestNews />
    </div>
  );
};

export default NewsDetails;
