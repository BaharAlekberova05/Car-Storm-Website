import { Link } from "react-router";
import { useState } from "react";
import { insertRow } from "../services/apiProducts";
import Swal from "sweetalert2";

const AddCar = () => {
  const [formData, setFormData] = useState({
    mainImg: "",
    secondImg: "",
    thirdImg: "",
    fourthImg: "",
    fifthImg: "",
    year: "",
    color: "",
    brand: "",
    model: "",
    price: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    quantity: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        return `Please fill in the ${key}`;
      }
    }
    if (
      isNaN(formData.price) ||
      isNaN(formData.year) ||
      isNaN(formData.quantity)
    ) {
      return "Please enter valid numbers for Price, Year, and Quantity.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await insertRow(
        formData.mainImg,
        formData.secondImg,
        formData.thirdImg,
        formData.fourthImg,
        formData.fifthImg,
        formData.brand,
        formData.model,
        Number(formData.year),
        Number(formData.price),
        formData.color,
        formData.bodyType,
        formData.fuelType,
        formData.transmission,
        Number(formData.quantity)
      );
      Swal.fire({
        text: "Car added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Insert failed:", error);
      Swal.fire({
        text: "Failed to add car. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const inputFields = [
    { label: "Main Image URL", name: "mainImg", type: "text" },
    { label: "Second Image URL", name: "secondImg", type: "text" },
    { label: "Third Image URL", name: "thirdImg", type: "text" },
    { label: "Fourth Image URL", name: "fourthImg", type: "text" },
    { label: "Fifth Image URL", name: "fifthImg", type: "text" },
    { label: "Year", name: "year", type: "number" },
    { label: "Color", name: "color", type: "text" },
    { label: "Brand", name: "brand", type: "text" },
    { label: "Model", name: "model", type: "text" },
    { label: "Price ($)", name: "price", type: "number" },
    { label: "Body Type", name: "bodyType", type: "text" },
    { label: "Fuel Type", name: "fuelType", type: "text" },
    { label: "Transmission Type", name: "transmission", type: "text" },
    { label: "Quantity", name: "quantity", type: "number" },
  ];

  return (
    <div className="container pb-14 px-4">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">Add</span> Car
      </h1>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl px-6 py-10 rounded-lg shadow-2xl border border-gray-500">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col space-y-2">
                <label className="dark:text-white text-sm">{field.label}</label>
                <input
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="outline-none border border-gray-300 bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-2 px-3"
                />
              </div>
            ))}

            {error && (
              <div className="col-span-1 md:col-span-2 text-center text-red-500 mt-4">
                {error}
              </div>
            )}

            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <button
                type="submit"
                className="w-full bg-my-blue text-white rounded-lg py-2 cursor-pointer text-md font-semibold"
              >
                Add
              </button>

              <Link to={"/dashboard"} className="w-full">
                <button className="w-full bg-gray-500 text-white rounded-lg py-2 cursor-pointer text-md font-semibold">
                  Back to Dashboard
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
