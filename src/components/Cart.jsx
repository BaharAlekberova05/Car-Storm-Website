import { Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router";
import { useCart } from "react-use-cart";

const TABLE_HEAD = ["Image", "Car Name", "Quantity", "Price", "Status"];

const Cart = () => {
  const {
    isEmpty,
    items,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        My <span className="my-blue">Cart</span>
      </h1>

      {isEmpty ? (
        <p>Cart is empty!</p>
      ) : (
        <div>
          <section className="w-full bg-white dark:bg-black rounded-lg shadow-md overflow-x-auto mb-12">
            <Card className="dark:bg-black h-full w-full border border-gray-300 dark:border-gray-700 px-4 md:px-6 xl:px-8">
              <table className="w-full min-w-max table-auto text-left border-collapse">
                <thead>
                  <tr className="dark:bg-black">
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
                      <tr key={index} className="hover:bg-gray-50">
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
                          <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg ">
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
                              title="Delete"
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
                  type="text"
                  placeholder="Cupon code"
                  className="border border-gray-500 bg-white dark:bg-black dark:text-white placeholder:dark:text-white outline-none px-4 py-2 rounded-lg w-full md:w-auto"
                />
                <button className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer w-full md:w-auto">
                  Apply
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                Use the code "carstorm" to get free delivery.
              </p>

              <Link to={"/cars"}>
                <button className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer w-full md:w-auto mt-8">
                  Back to shopping
                </button>
              </Link>
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-6 items-center justify-center">
              <div className="w-full md:w-full flex flex-col space-y-6 bg-white dark:bg-black border border-gray-500 rounded-md p-4 dark:text-white">
                <p className="text-xl text-center">Order Summary</p>
                <div className="flex items-center justify-between">
                  <p>Total:</p>
                  <p>
                    $<span>{cartTotal}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p>
                    $<span>25</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Total Price</p>
                  <p>
                    $<span>{cartTotal + 25}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-full">
                <button
                  className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer"
                  onClick={emptyCart}
                >
                  Reset cart
                </button>
                <Link to={"/checkout"}>
                  <button className="px-4 py-2 rounded-lg font-medium bg-my-blue text-white cursor-pointer">
                    Proceed to Checkout
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
