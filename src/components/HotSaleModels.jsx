import { Link } from "react-router";
import CarCard from "./CarCard";

const HotSaleModels = () => {
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white mb-12">
        Hot Sale{" "}
        <Link to={"/cars"} className="my-blue underline">
          Car Models
        </Link>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 dark:text-white gap-x-8">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
};

export default HotSaleModels;
