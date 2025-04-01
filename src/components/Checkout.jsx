import { useState } from "react";
import { useCart } from "react-use-cart";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const { items } = useCart();

  console.log(items[0]);

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">Checkout</span>
      </h1>
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-[#121212] rounded-lg shadow-lg border border-gray-500">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-[#121212] outline-none dark:text-white"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded dark:bg-[#121212] outline-none dark:text-white"
            placeholder="john@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Payment Method
          </label>
          <select
            className="w-full p-2 border rounded dark:bg-[#121212] dark:text-white"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="bg-gray-100 dark:bg-[#121212] p-4 rounded mb-4">
          <h3 className="font-semibold dark:text-white">Order Summary</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {items[0].brand} {items[0].model}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Total Price: ${items[0].price * items[0].quantity}
          </p>
        </div>

        <button className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition cursor-pointer">
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default Checkout;
