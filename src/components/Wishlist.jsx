import { Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useWishlist } from "react-use-wishlist";

const TABLE_HEAD = ["Image", "Car Name", "Price", "Status"];

const Wishlist = () => {
  const { isWishlistEmpty, items, totalWishlistItems, removeWishlistItem } =
    useWishlist();

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        My <span className="my-blue">Wishlist</span>
      </h1>

      {isWishlistEmpty ? (
        <p>Wishlist is empty!</p>
      ) : (
        <Card className="dark:bg-[#121212] h-full w-full px-4 md:px-6 xl:px-8 mb-14 border">
          <table className="w-full min-w-max table-auto text-left border-collapse">
            <thead>
              <tr className="">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="pb-3 pt-5 px-3 text-xs md:text-sm xl:text-lg border-b"
                  >
                    <Typography className="font-bold leading-none dark:text-white">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const classes = isLast ? "py-3 px-3" : "py-3 px-3";

                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 dark:hover:bg-gray-900 border-b"
                  >
                    <td className={classes}>
                      <img
                        src={item.img1}
                        alt={item.brand}
                        className="w-12 h-12 rounded-md object-contain"
                      />
                    </td>
                    <td className={classes}>
                      <Typography className="font-bold dark:text-white text-xs md:text-sm xl:text-lg">
                        {item.brand} {item.model}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg">
                        {item.price}
                      </Typography>
                    </td>
                    <td className={`${classes} whitespace-nowrap`}>
                      <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg flex items-center space-x-2">
                        <FaRegTrashCan
                          title="Delete"
                          color="action"
                          className="text-black dark:text-white cursor-pointer"
                          onClick={() => removeWishlistItem(item.id)}
                        />
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export default Wishlist;
