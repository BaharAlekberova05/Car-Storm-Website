"use client";

import HeroParallax from "../ui/HeroParallax";

export function HotSaleBrands() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Mazda",
    link: "/cars",
    thumbnail:
      "https://static.vecteezy.com/system/resources/previews/020/500/644/non_2x/maserati-brand-logo-car-symbol-white-design-italian-automobile-illustration-with-black-background-free-vector.jpg",
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
    thumbnail: "https://www.carlogos.org/car-logos/jaguar-logo-2021-640.png",
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
    thumbnail: "https://banner2.cleanpng.com/20180323/lre/av0k9uuqg.webp",
  },
  {
    title: "Honda",
    link: "/cars",
    thumbnail:
      "https://static.vecteezy.com/system/resources/previews/020/500/096/non_2x/honda-logo-brand-symbol-white-design-japan-car-automobile-illustration-with-black-background-free-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/020/927/075/non_2x/toyota-brand-logo-car-symbol-white-design-japan-automobile-illustration-with-black-background-free-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/020/502/469/non_2x/ferrari-logo-brand-car-symbol-with-name-white-design-italian-automobile-illustration-with-black-background-free-vector.jpg",
  },
  {
    title: "Bentley",
    link: "/cars",
    thumbnail: "https://www.carlogos.org/car-logos/bentley-logo-2002-640.png",
  },
];

export default HotSaleBrands;
