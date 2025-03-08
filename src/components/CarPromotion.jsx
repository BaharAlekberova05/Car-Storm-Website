import carVideo from "../assets/video/car-video.mp4";
import { FaCircleCheck } from "react-icons/fa6";

const CarPromotion = () => {
  return (
    <div className="container">
      <div className="rounded-md flex flex-col py-8 md:py-10 xl:py-12 md:flex-row md:items-center xl:flex-row xl:items-center xl:space-x-10 md:space-x-8">
        <div className="w-full mb-4 md:w-1/2 xl:w-1/2">
          <video
            src={carVideo}
            controls
            muted
            autoPlay
            loop
            className="size-full rounded-md"
          ></video>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2">
          <h3 className="text-lg text-center md:text-2xl xl:text-4xl font-bold dark:text-white">
            Find Your Dream Car At The Best Price
          </h3>

          <p className="dark:text-white my-4 text-sm md:text-md xl:text-lg">
            Explore a wide selection of high-quality vehicles with a seamless
            buying experience and exceptional customer service
          </p>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaCircleCheck className="dark:text-white text-md md:text-lg xl:text-2xl" />
              <p className="dark:text-white text-sm md:text-md xl:text-lg">
                Verified cars with detailed inspections
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <FaCircleCheck className="dark:text-white text-md md:text-lg xl:text-2xl" />
              <p className="dark:text-white text-sm md:text-md xl:text-lg">
                Competitive pricing & exclusive deals
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <FaCircleCheck className="dark:text-white text-md md:text-lg xl:text-2xl" />
              <p className="dark:text-white text-sm md:text-md xl:text-lg">
                Secure & hassle-free purchasing process
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPromotion;
