import notFound from "../assets/img/not-found.gif";

const NotFound = () => {
  return (
    <div className="h-screen w-full">
      <img
        src={notFound}
        alt="Not Found Gif"
        className="size-full"
      />
    </div>
  );
};

export default NotFound;
