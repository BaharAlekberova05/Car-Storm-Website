import { Link } from "react-router";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import { getLimitedCars } from "../services/apiProducts";
import slugify from "slugify";

const HotSaleModels = () => {
  const [limitedCars, setLimitedCars] = useState([]);

  useEffect(() => {
    getLimitedCars().then((data) => {
      setLimitedCars(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-12">
        Hot Sale{" "}
        <Link to={"/cars"} className="my-blue underline">
          Car Models
        </Link>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 dark:text-white gap-8 mb-10">
        {limitedCars.map((car, i) => (
          <CarCard
          product={car}
            key={i}
            brand={car.brand}
            model={car.model}
            price={car.price}
            img1={car.img1}
            slug={slugify(car.model, { lower: true, strict: true })}
          />
        ))}
      </div>
    </div>
  );
};

export default HotSaleModels;
