import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCars } from "../services/apiProducts";
import slugify from "slugify";
import HotSaleModels from "./HotSaleModels";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const CarDetails = () => {
  const { t } = useTranslation();

  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();

  useEffect(() => {
    setLoading(true);
    getCars().then((data) => {
      const matchedCar = data.find(
        (item) => slugify(item.model, { lower: true, strict: true }) === slug
      );
      if (matchedCar) {
        setCar(matchedCar);
        setMainImage(matchedCar.img1);
      }
      setLoading(false);
    });
  }, [slug]);

  const changeImage = (newImage) => setMainImage(newImage);

  const showAlert = (text) => {
    Swal.fire({
      text: text,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!car) {
    return <p>{t("carNotFound")}</p>;
  }

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center dark:text-white py-8">
        {t("car")} <span className="my-blue">{t("details")}</span>
      </h1>

      <div className="dark:bg-[#121212] dark:text-white">
        <div className="px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage || car.img1}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {["img2", "img3", "img4", "img5"].map((img, idx) => (
                  <img
                    key={idx}
                    src={car[img]}
                    alt={`Thumbnail ${idx + 1}`}
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(car[img])}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2 my-blue">
                {car.brand} {car.model}
              </h2>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">${car.price}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                {t("discover")}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  {t("product.product")} {t("details")}
                </h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>{car.year}</li>
                  <li>{car.color}</li>
                  <li>{car.bodyType}</li>
                  <li>{car.fuelType}</li>
                  <li>{car.transmissionType}</li>
                </ul>
              </div>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 cursor-pointer mr-4"
                onClick={() => {
                  addItem(car);
                  showAlert("Product added to cart!");
                }}
              >
                {t("addtocart")}
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 cursor-pointer"
                onClick={() => {
                  addWishlistItem(car);
                  showAlert("Product added to wishlist!");
                }}
              >
                {t("addtowl")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <HotSaleModels />
    </div>
  );
};

export default CarDetails;
