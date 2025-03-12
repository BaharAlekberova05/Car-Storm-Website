import Slider from "../layouts/Slider";
import CarPromotion from "./CarPromotion";
import HotSaleBrands from "./HotSaleBrands";
import HotSaleModels from "./HotSaleModels";
import LatestNews from "./LatestNews";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Slider />
      <HotSaleBrands />
      <CarPromotion />
      {/* <WhyChoose /> */}
      <HotSaleModels />
      <Testimonials />
      <LatestNews />
    </>
  );
};

export default Home;
