"use client";
import { BiHeart } from "react-icons/bi";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { Link } from "react-router";

function CarCard() {
  return (
    <CardContainer className="inter-var">
      <Link to={"/car-details"}>
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Range Rover Velar
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            $150.000
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://i.pinimg.com/736x/30/bc/1e/30bc1e55e1db21094337c7d22f3c4b5c.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              to="/wishlist"
              target="__blank"
              className="px-4 py-2 rounded-xl text-2xl font-normal dark:text-white"
            >
              <BiHeart />
            </CardItem>

            <CardItem
              translateZ={20}
              as={Link}
              to="/cart"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </Link>
    </CardContainer>
  );
}

export default CarCard;
