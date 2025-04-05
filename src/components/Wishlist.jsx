import { Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useWishlist } from "react-use-wishlist";
import { IoCarSport } from "react-icons/io5";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const TABLE_HEAD = ["image", "car_name", "price", "status"];

const Wishlist = () => {
  const { t } = useTranslation();
  const { isWishlistEmpty, items, removeWishlistItem } = useWishlist();
  const { addItem } = useCart();

  const showAlert = (text) => {
    Swal.fire({
      text: text,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold my-blue my-6 text-center">
        {t("wishlist.title")}
      </h1>

      {isWishlistEmpty ? (
        <div className="flex justify-center items-center h-[500px] w-full">
          <img
            src="http://theneelsky.com/media/wishlist.png"
            alt="Wishlist is empty"
            className="object-cover"
          />
        </div>
      ) : (
        <Card className="dark:bg-[#121212] h-full w-full px-4 md:px-6 xl:px-8 mb-14 border">
          <table className="w-full min-w-max table-auto text-left border-collapse">
            <thead>
              <tr className="dark:bg-[#121212]">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="pb-3 pt-5 px-3 text-xs md:text-sm xl:text-lg border-b"
                  >
                    <Typography className="font-bold leading-none dark:text-white">
                      {t(`table_head.${head}`)}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const classes = isLast
                  ? "py-3 px-3"
                  : "py-3 px-3 border-b border-gray-300 dark:border-gray-600";

                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 dark:hover:bg-gray-900"
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
                          title={t("wishlist.delete")}
                          color="action"
                          className="text-black dark:text-white cursor-pointer"
                          onClick={() => removeWishlistItem(item.id)}
                        />
                        <IoCarSport
                          title={t("wishlist.addToCart")}
                          color="action"
                          className="text-black text-2xl dark:text-white cursor-pointer"
                          onClick={() => {
                            addItem(item);
                            showAlert(t("wishlist.addedToCart"));
                          }}
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
