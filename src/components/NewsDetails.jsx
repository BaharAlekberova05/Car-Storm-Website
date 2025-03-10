import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaThumbsUp,
  FaCommentDots,
} from "react-icons/fa";

const NewsDetails = () => {
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center dark:text-white mt-4">
        News <span className="my-blue">Details</span>
      </h1>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* News Title */}
        <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Breaking News: The Future of Technology
        </h1>

        {/* News Meta */}
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>Published on March 9, 2025</span>
          <span>By John Doe</span>
        </div>

        {/* Main Image */}
        <img
          src="https://www.ddongauto.com/wp-content/uploads/2025/01/screenshot_2025-01-10_17-25-06-768x401.png"
          alt="News"
          className="w-full h-80 object-cover rounded-lg mb-8"
        />

        {/* News Content */}
        <div className="text-lg text-gray-800 dark:text-gray-300 mb-8">
          <p className="mb-6">
            The technology industry is constantly evolving, with new
            breakthroughs and innovations emerging every day. In this article,
            we explore the latest advancements and what they mean for the future
            of technology. From artificial intelligence to quantum computing,
            the possibilities are endless.
          </p>
          <p className="mb-6">
            One of the most exciting developments in recent years is the rise of
            AI. Machine learning algorithms are becoming increasingly powerful,
            enabling computers to perform tasks that were once thought to be
            exclusive to humans.
          </p>
          <p className="mb-6">
            As we move towards a more digital future, the role of technology in
            our daily lives will continue to grow. From smart devices that
            monitor our health to autonomous vehicles that drive us to work,
            technology will be at the forefront of shaping the world of
            tomorrow.
          </p>
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
        <div className="bg-white dark:bg-black  border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
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
                <p className="text-sm text-white dark:text-gray-300">
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
                <p className="text-sm text-white dark:text-gray-300">
                  <strong>Mark Johnson</strong> - March 9, 2025
                </p>
                <p className="text-gray-400 dark:text-gray-400 mt-2">
                  It’s amazing to think how far we’ve come with technology in
                  just a few years! Can’t wait to see what’s next.
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
                <p className="text-sm text-white dark:text-gray-300">
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
                <p className="text-sm text-white dark:text-gray-300">
                  <strong>Mark Johnson</strong> - March 9, 2025
                </p>
                <p className="text-gray-400 dark:text-gray-400 mt-2">
                  It’s amazing to think how far we’ve come with technology in
                  just a few years! Can’t wait to see what’s next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
