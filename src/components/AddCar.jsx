import { Link } from "react-router";

const AddCar = () => {
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">Add</span> Car
      </h1>

      <div className="flex items-center justify-center">
        <div className="flex flex-col px-6 py-10 rounded-lg shadow-2xl border border-gray-500">
          <form action="#" className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">Image URL</label>
              <input
                type="text"
                className="outline-none border border-white bg-white text-black dark:bg-black dark:text-white rounded-md py-1 px-3 "
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">Title</label>
              <input
                type="text"
                className="outline-none border border-white bg-white text-black dark:bg-black dark:text-white rounded-md py-1 px-3"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">Price ($)</label>
              <input
                type="text"
                className="outline-none border border-white bg-white text-black dark:bg-black dark:text-white rounded-md py-1 px-3"
              />
            </div>

            <Link to={"/cars"}>
              <button
                type="submit"
                className="w-full bg-my-blue text-white rounded-lg py-1 cursor-pointer text-md font-semibold"
              >
                Add
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
