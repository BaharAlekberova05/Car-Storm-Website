const Preloader = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></div>
      <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-400"></div>
    </div>
  </div>
);

export default Preloader;
