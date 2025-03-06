const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6">
        Contact{" "}
      </h1>

      <div className="flex items-center space-x-6">
        <div className="w-1/2">
          <form action="#" className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4 w-full">
              <input
                type="text"
                className="border border-gray-200 bg-white w-1/2 px-4 py-2 rounded-md"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="border border-gray-200 bg-white w-1/2 px-4 py-2 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="w-full">
              <input
                type="text"
                className="border border-gray-200 bg-white w-full px-4 py-2 rounded-md"
                placeholder="Enter your subject"
              />
            </div>

            <div className="w-full">
              <textarea
                name=""
                id=""
                className="w-full border border-gray-200 bg-white px-4 py-2 rounded-md"
                placeholder="Write your message"
              ></textarea>
            </div>
          </form>

          <button className="bg-white p-4 mt-4 rounded-lg bg-my-blue text-white font-medium">
            Send Message
          </button>
        </div>

        <div className="w-1/2">
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
