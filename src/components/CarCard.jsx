"use client";
import { BiHeart } from "react-icons/bi";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { Link } from "react-router";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function CarCard({ brand, model, price, img1, slug, product, id }) {
  const { t } = useTranslation();

  const { addItem } = useCart();
  const { addWishlistItem, removeWishlistItem, items } = useWishlist();

  const isInWishlist = items.some((item) => item.id === product.id);

  const showAlert = (text) => {
    Swal.fire({
      text: text,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {brand} {model}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          ${price}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Link to={`/car-details/${slug}`}>
            <img
              src={img1}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </Link>
        </CardItem>

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            to="/wishlist"
            className="px-4 py-2 rounded-xl text-2xl font-normal dark:text-white cursor-pointer"
            onClick={() => {
              if (isInWishlist) {
                removeWishlistItem(product);
              } else {
                addWishlistItem(product);
              }
              showAlert("Product added to wishlist!");
            }}
          >
            {isInWishlist ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <BiHeart />
            )}
          </CardItem>

          <CardItem
            translateZ={20}
            to="/cart"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
            onClick={() => {
              addItem(product);
              showAlert("Product added to cart!");
            }}
          >
            {t("addtocart")}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default CarCard;
