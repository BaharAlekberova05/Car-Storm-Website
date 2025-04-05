import { useTranslation } from "react-i18next";
import { AnimatedTestimonials } from "../ui/AnimatedTestimonials";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white mt-12">
        {t("clients")} <span className="my-blue">{t("reviews")}</span>
      </h1>

      <div className="flex items-center justify-center">
        <AnimatedTestimonials />
      </div>
    </div>
  );
};

export default Testimonials;
