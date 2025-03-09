import { Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";

const TABLE_HEAD = ["Image", "Car Name", "Price", "Status"];

const TABLE_ROWS = [
  {
    image:
      "https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg",
    carName: "Tesla Model S",
    price: "$80,000",
    status: "Available",
  },
  {
    image:
      "https://www.wsupercars.com/thumbnails/Porsche/2016-Porsche-911-Carrera-4-006.jpg",
    carName: "BMW M3",
    price: "$70,000",
    status: "Sold",
  },
  {
    image:
      "https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg",
    carName: "Audi R8",
    price: "$120,000",
    status: "Available",
  },
  {
    image:
      "https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg",
    carName: "Mercedes AMG GT",
    price: "$150,000",
    status: "Pending",
  },
];

const Wishlist = () => {
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        My <span className="my-blue">Wishlist</span>
      </h1>

      <section className="w-full bg-white dark:bg-black p-4 rounded-lg shadow-md overflow-x-auto">
        <Card className="dark:bg-black h-full w-full border border-gray-300 dark:border-gray-700 px-4 md:px-6 xl:px-8">
          <table className="w-full min-w-max table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-black">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-gray-300 dark:border-gray-600 pb-3 pt-5 px-3 text-xs md:text-sm xl:text-lg"
                  >
                    <Typography className="font-bold leading-none dark:text-white">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {TABLE_ROWS.map(({ image, carName, price, status }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "py-3 px-3"
                  : "py-3 px-3 border-b border-gray-300 dark:border-gray-600";

                return (
                  <tr key={carName} className="hover:bg-gray-900">
                    <td className={classes}>
                      <img
                        src={image}
                        alt={carName}
                        className="w-12 h-12 rounded-md object-contain"
                      />
                    </td>
                    <td className={classes}>
                      <Typography className="font-bold dark:text-white text-xs md:text-sm xl:text-lg">
                        {carName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg">
                        {price}
                      </Typography>
                    </td>
                    <td className={`${classes} whitespace-nowrap`}>
                      <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg flex items-center space-x-2">
                        <FaRegTrashCan
                          title="Delete"
                          color="action"
                          className="text-black dark:text-white cursor-pointer"
                        />
                        <IoCarSport
                          title="Add to cart"
                          color="action"
                          className="w-6 h-6 text-black dark:text-white cursor-pointer"
                        />
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  );
};

export default Wishlist;
