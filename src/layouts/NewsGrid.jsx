import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router";

const NewsGrid = ({ img, title, date }) => {
  return (
    <Link to={"/newsDetails"}>
      <div className="flex flex-col space-y-8 rounded-md shadow-2xl h-[500px]">
        <div className="w-full h-1/2">
          <img
            src={img}
            alt={title}
            className="size-full object-cover rounded-t-md hover:scale-75 transition duration-300"
          />
        </div>

        <div className="px-4 flex items-center space-x-4">
          <MdOutlineDateRange className="dark:text-white" />
          <p className="dark:text-white text-lg">{date}</p>
        </div>

        <div className="px-4">
          <p className="dark:text-white text-center font-bold text-xl hover:text-[#307ff9] transition duration-300">
            {title}
          </p>
        </div>

        <button className="dark:text-white font-medium text-md hover:text-[#307ff9] transition duration-300">
          Read More
        </button>
      </div>
    </Link>
  );
};

export default NewsGrid;
