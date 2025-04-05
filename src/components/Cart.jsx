import { Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useCart } from "react-use-cart";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

const Cart = () => {
  const { t } = useTranslation();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const showAlert = (text) => {
    Swal.fire({
      text: text,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const couponRef = useRef();
  const [shipping, setShipping] = useState(25);

  const applyCoupon = () => {
    if (couponRef.current.value === "carstorm") {
      setShipping(0);
      showAlert(t("cart.couponText"));
      couponRef.current.value = "";
    } else {
      setShipping(25);
      showAlert(t("cart.invalidCoupon"));
    }
  };

  const TABLE_HEAD = [
    t("table_head.image"),
    t("table_head.car_name"),
    t("table_head.quantity"),
    t("table_head.price"),
    t("table_head.status"),
  ];

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold my-blue my-6 text-center">
        {t("cart.title")}
      </h1>

      {isEmpty ? (
        <div className="flex justify-center items-center h-[500px] w-full">
          <img
            src="https://aleointernational.com/img/empty-cart-yellow.png"
            alt="Wishlist is empty"
            className="object-cover"
          />
        </div>
      ) : (
        <div>
          <section className="w-full bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-x-auto mb-12">
            <Card className="dark:bg-[#121212] h-full w-full border border-gray-300 dark:border-gray-700 px-4 md:px-6 xl:px-8">
              <table className="w-full min-w-max table-auto text-left border-collapse">
                <thead>
                  <tr className="dark:bg-[#121212]">
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
                  {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    const classes = isLast
                      ? "py-3 px-3"
                      : "py-3 px-3 border-b border-gray-300 dark:border-gray-600";

                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900"
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
                            <div className="flex items-center">
                              <button
                                className="flex items-center justify-center font-bold bg-gray-100 text-black dark:text-white dark:bg-gray-600 px-2.5 mr-2 cursor-pointer rounded-sm"
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }
                              >
                                -
                              </button>
                              {item.quantity}
                              <button
                                className="flex items-center justify-center font-bold text-black dark:text-white bg-gray-100 dark:bg-gray-600 px-2 ml-2 cursor-pointer rounded-sm"
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1)
                                }
                              >
                                +
                              </button>
                            </div>
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg">
                            {item.price * item.quantity}
                          </Typography>
                        </td>
                        <td className={`${classes} whitespace-nowrap`}>
                          <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg flex items-center space-x-2">
                            <FaRegTrashCan
                              onClick={() => removeItem(item.id)}
                              title={t("cart.delete")}
                              color="action"
                              className="text-black dark:text-white cursor-pointer"
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

          <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-10">
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex items-center space-x-6">
                <input
                  ref={couponRef}
                  type="text"
                  placeholder={t("cart.couponPlaceholder")}
                  className="border border-gray-500 bg-white dark:bg-black dark:text-white placeholder:dark:text-white outline-none px-4 py-2 rounded-lg w-full md:w-auto"
                />
                <button
                  className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer w-full md:w-auto"
                  onClick={applyCoupon}
                >
                  {t("cart.couponApplyButton")}
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-1">{t("cart.coupon")}</p>

              <Link to={"/cars"}>
                <button className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer w-full md:w-auto mt-8">
                  {t("cart.backToShopping")}
                </button>
              </Link>
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-6 items-center justify-center">
              <div className="w-full md:w-full flex flex-col space-y-6 bg-white dark:bg-black border border-gray-500 rounded-md p-4 dark:text-white">
                <p className="text-xl text-center">{t("cart.orderSummary")}</p>
                <div className="flex items-center justify-between">
                  <p>{t("cart.total")}</p>
                  <p>
                    $<span>{cartTotal}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>{t("cart.shipping")}</p>
                  <p>
                    $<span>{shipping}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>{t("cart.totalPrice")}</p>
                  <p>
                    $<span>{cartTotal + shipping}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-full">
                <button
                  className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer"
                  onClick={emptyCart}
                >
                  {t("cart.resetCart")}
                </button>
                <Link to={"/checkout"}>
                  <button className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer">
                    {t("cart.proceedToCheckout")}
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Cart;
