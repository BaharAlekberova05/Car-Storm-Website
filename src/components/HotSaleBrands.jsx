"use client";
import amg from "../assets/img/amg.png";
import aston from "../assets/img/aston.png";
import audi from "../assets/img/audi.png";

import HeroParallax from "../ui/HeroParallax";

export function HotSaleBrands() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Mazda",
    link: "/cars",
    thumbnail:
      "https://images.seeklogo.com/logo-png/2/2/chevrolet-logo-png_seeklogo-29486.png",
  },
  {
    title: "Range Rover",
    link: "/cars",
    thumbnail:
      "https://lezebre.lu/images/thumbnails/570/570/detailed/17/30368-Range-Rover.png",
  },
  {
    title: "Porsche",
    link: "/cars",
    thumbnail:
      "https://www.carlogos.org/car-logos/porsche-logo-2014-full-640.png",
  },

  {
    title: "Jaguar",
    link: "/cars",
    thumbnail:
      "https://images.seeklogo.com/logo-png/9/2/nissan-logo-png_seeklogo-99769.png",
  },
  {
    title: "Ford Mustang",
    link: "/cars",
    thumbnail: "https://www.carlogos.org/logo/Mustang-logo-2010-640x359.jpg",
  },
  {
    title: "Ford",
    link: "/cars",
    thumbnail: "https://www.carlogos.org/car-logos/ford-logo-2017-640.png",
  },

  {
    title: "Mercedes-Benz",
    link: "/cars",
    thumbnail:
      "https://images.seeklogo.com/logo-png/9/2/mercedes-benz-logo-png_seeklogo-91081.png",
  },
  {
    title: "Honda",
    link: "/cars",
    thumbnail:
      "https://images.seeklogo.com/logo-png/30/2/hyundai-logo-png_seeklogo-309777.png",
  },
  {
    title: "Cadillac",
    link: "/cars",
    thumbnail:
      "https://www.carlogos.org/car-logos/cadillac-logo-2021-full-640.png",
  },
  {
    title: "Bugatti",
    link: "/cars",
    thumbnail: "https://www.carlogos.org/logo/Bugatti-logo-640x327.jpg",
  },
  {
    title: "BYD",
    link: "/cars",
    thumbnail: "https://www.carlogos.org/logo/BYD-logo-2007-640x396.jpg",
  },

  {
    title: "Toyota",
    link: "/cars",
    thumbnail:
      "https://images.seeklogo.com/logo-png/14/2/toyota-logo-png_seeklogo-141411.png",
  },
  {
    title: "BMW",
    link: "/cars",
    thumbnail: "https://www.carlogos.org/car-logos/bmw-logo-2020-gray.png",
  },
  {
    title: "Ferrari",
    link: "/cars",
    thumbnail:
      "https://images.seeklogo.com/logo-png/5/2/ferrari-emblem-logo-png_seeklogo-53763.png",
  },
  {
    title: "Bentley",
    link: "/cars",
    thumbnail: "https://www.carlogos.org/car-logos/bentley-logo-2002-640.png",
  },
];

export default HotSaleBrands;
