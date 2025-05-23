import { useTranslation } from "react-i18next";
import carVideo from "../assets/video/car-video.mp4";
import { FaCircleCheck } from "react-icons/fa6";

const CarPromotion = () => {
  const { t } = useTranslation();
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
            {t("carPromotion")}
          </h3>

          <p className="dark:text-white my-4 text-sm md:text-md xl:text-lg">
            {t("carPromoExp")}
          </p>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaCircleCheck className="dark:text-white text-md md:text-lg xl:text-2xl" />
              <p className="dark:text-white text-sm md:text-md xl:text-lg">
                {t("cp1")}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <FaCircleCheck className="dark:text-white text-md md:text-lg xl:text-2xl" />
              <p className="dark:text-white text-sm md:text-md xl:text-lg">
                {t("cp2")}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <FaCircleCheck className="dark:text-white text-md md:text-lg xl:text-2xl" />
              <p className="dark:text-white text-sm md:text-md xl:text-lg">
                {t("cp3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPromotion;
