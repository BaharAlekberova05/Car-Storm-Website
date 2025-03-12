import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCars } from "../services/apiProducts";
import slugify from "slugify";
import HotSaleModels from "./HotSaleModels";

const CarDetails = () => {
  const { slug } = useParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    getCars().then((data) => {
      const matchedCars = data.find(
        (item) => slugify(item.model, { lower: true, strict: true }) === slug
      );
      matchedCars && setCars(matchedCars);
      setMainImage(matchedCars?.img1);
      setLoading(false);
    });
  }, [slug]);

  const changeImage = (newImage) => {
    setMainImage(newImage);
  };
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center dark:text-white py-8">
        Car <span className="my-blue">Details</span>
      </h1>

      {loading && <p>Loading...</p>}
      {!cars && <p>Cars not found!</p>}

      <div className="dark:bg-black dark:text-white">
        <div className="px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage || cars.img1}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                <img
                  src={cars.img2}
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(cars.img2)}
                />
                <img
                  src={cars.img3}
                  alt="Thumbnail 2"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(cars.img3)}
                />
                <img
                  src={cars.img4}
                  alt="Thumbnail 3"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(cars.img4)}
                />
                <img
                  src={cars.img5}
                  alt="Thumbnail 4"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(cars.img5)}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2 my-blue">
                {cars.brand} {cars.model}
              </h2>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">${cars.price}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                Discover the perfect blend of performance, luxury, and
                technology in every model. Whether you're seeking a smooth city
                drive or a thrilling long-distance journey, our cars deliver
                superior comfort, safety, and innovation. Experience the
                ultimate driving pleasure with advanced features and stylish
                designs. Drive your dream today!
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold">Product Details</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>{cars.year}</li>
                  <li>{cars.color}</li>
                  <li>{cars.bodyType}</li>
                  <li>{cars.fuelType}</li>
                  <li>{cars.transmissionType}</li>
                </ul>
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 cursor-pointer mr-4">
                Add To Cart
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 cursor-pointer">
                Add To Wishlist
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
