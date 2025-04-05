import { Link } from "react-router";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import { getLimitedCars } from "../services/apiProducts";
import slugify from "slugify";
import { useTranslation } from "react-i18next";

const HotSaleModels = () => {
  const { t } = useTranslation();

  const [limitedCars, setLimitedCars] = useState([]);

  useEffect(() => {
    getLimitedCars().then((data) => {
      setLimitedCars(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-12">
        {t("hotSale")}{" "}
        <Link to={"/cars"} className="my-blue underline">
          {t("carModels")}
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
