import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Checkout = () => {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const { items } = useCart();

  const navigate = useNavigate();

  const showAlert = (text) => {
      Swal.fire({
        text: text,
        icon: "success",
        confirmButtonText: "OK",
      });
    };

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">{t("checkout.title")}</span>
      </h1>
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-[#121212] rounded-lg shadow-lg border border-gray-500">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            {t("checkout.fullName")}
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-[#121212] outline-none dark:text-white"
            placeholder={t("checkout.namePlaceholder")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            {t("checkout.email")}
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded dark:bg-[#121212] outline-none dark:text-white"
            placeholder={t("checkout.emailPlaceholder")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            {t("checkout.paymentMethod")}
          </label>
          <select
            className="w-full p-2 border rounded dark:bg-[#121212] dark:text-white"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit-card">{t("checkout.creditCard")}</option>
            <option value="paypal">{t("checkout.paypal")}</option>
            <option value="bank-transfer">{t("checkout.bankTransfer")}</option>
          </select>
        </div>

        <div className="bg-gray-100 dark:bg-[#121212] p-4 rounded mb-4">
          <h3 className="font-semibold dark:text-white">
            {t("checkout.orderSummary")}
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-2">
                <span>
                  {item.brand} {item.model}
                </span>
                <span className="font-medium">
                  ${item.price} x {item.quantity}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-900 dark:text-gray-100 font-semibold mt-4">
            {t("checkout.totalPrice")} $
            {items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
        </div>

        <button
          className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition cursor-pointer"
          onClick={() => {
            showAlert(t("checkout.orderProcess"));
            navigate("/");
          }}
        >
          {t("checkout.completePurchase")}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
