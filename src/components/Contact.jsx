const Contact = () => {
  return (
    <div className="container overflow-x-hidden">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-8 text-center">
        Contact <span className="my-blue">Us</span>
      </h1>

      <div className="flex flex-col space-y-8 md:flex-row xl:flex-row md:space-x-6 xl:space-x-6">
        <div className="md:w-1/2 xl:w-1/2">
          <form action="#" className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4 w-full">
              <input
                type="text"
                className="border border-gray-200 bg-white dark:bg-black w-1/2 px-4 py-2 rounded-md dark:text-white placeholder:dark:text-white "
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="border border-gray-200 bg-white w-1/2 px-4 py-2 rounded-md dark:bg-black dark:text-white placeholder:dark:text-white"
                placeholder="Enter your email"
              />
            </div>

            <div className="w-full">
              <input
                type="text"
                className="border border-gray-200 bg-white w-full px-4 py-2 rounded-md dark:bg-black dark:text-white placeholder:dark:text-white"
                placeholder="Enter your subject"
              />
            </div>

            <div className="w-full">
              <textarea
                className="w-full h-[200px] border border-gray-200 bg-white px-4 py-2 rounded-md dark:bg-black dark:text-white placeholder:dark:text-white"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-white p-4 mt-4 rounded-lg bg-my-blue text-white font-medium cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="max-w-full md:w-1/2 xl:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0397113063036!2d49.82477371186512!3d40.385812471325465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9b9925c3ed%3A0xeee07cb0b400caa2!2sAz%C9%99rbaycan%20D%C3%B6vl%C9%99t%20%C4%B0qtisad%20Universiteti%20(UNEC)!5e0!3m2!1saz!2saz!4v1741263946821!5m2!1saz!2saz"
            className="w-full h-[93%]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
