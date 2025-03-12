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

const NewsDetails = () => {
  const { slug } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then((data) => {
      const matchedNews = data && data.find((item) => item.id === Number(slug));

      matchedNews && setNews(matchedNews);
      setLoading(false);
    });
  }, [slug]);

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center dark:text-white my-10">
        News <span className="my-blue">Details</span>
      </h1>

      {loading && <p>Loading...</p>}
      {!news && <p>News not found!</p>}

      {/* News Title */}
      <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">
        {news?.title}
      </h1>
      {/* findEL Meta */}
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span>{news?.date}</span>
        <span>{news?.author}</span>
      </div>
      {/* Main Image */}
      <img
        src={news?.img}
        alt={news?.title}
        className="w-full h-80 object-cover rounded-lg mb-8"
      />
      {/* news? Content */}
      <div className="text-lg text-gray-800 dark:text-gray-300 mb-8">
        <p className="mb-6">{news?.description}</p>
      </div>
      {/* Social Share & Comments */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <span className="text-gray-500 dark:text-gray-400">Share:</span>
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
            <span>Like</span>
          </button>
          <button className="flex items-center text-gray-500 dark:text-gray-400">
            <FaCommentDots className="w-5 h-5 mr-2" />
            <span>Comment</span>
          </button>
        </div>
      </div>
      {/* Comments Section */}
      <div className="bg-white dark:bg-black  border border-gray-300 dark:border-gray-700 p-6 rounded-lg mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
          Comments
        </h3>

        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm text-black dark:text-gray-300">
                <strong>Jane Smith</strong> - March 9, 2025
              </p>
              <p className="text-gray-400 dark:text-gray-400 mt-2">
                I totally agree! AI is the future of technology, and it’s
                exciting to see how it will continue to evolve.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm text-black dark:text-gray-300">
                <strong>Mark Johnson</strong> - March 9, 2025
              </p>
              <p className="text-gray-400 dark:text-gray-400 mt-2">
                It’s amazing to think how far we’ve come with technology in just
                a few years! Can’t wait to see what’s next.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm text-black dark:text-gray-300">
                <strong>Jane Smith</strong> - March 9, 2025
              </p>
              <p className="text-gray-400 dark:text-gray-400 mt-2">
                I totally agree! AI is the future of technology, and it’s
                exciting to see how it will continue to evolve.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm text-black dark:text-gray-300">
                <strong>Mark Johnson</strong> - March 9, 2025
              </p>
              <p className="text-gray-400 dark:text-gray-400 mt-2">
                It’s amazing to think how far we’ve come with technology in just
                a few years! Can’t wait to see what’s next.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LatestNews />
    </div>
  );
};

export default NewsDetails;
