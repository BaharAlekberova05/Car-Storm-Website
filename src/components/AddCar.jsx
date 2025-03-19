import { Link } from "react-router";
import { useState } from "react";
import { insertRow } from "../services/apiProducts";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await insertRow(
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
      alert("Car added succesfully!")
    } catch (error) {
      console.error("Insert failed:", error);
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

            <button
              type="submit"
              className="w-full bg-my-blue text-white rounded-lg py-2 cursor-pointer text-md font-semibold mt-8"
            >
              Add
            </button>
          </form>

          <Link to={"/dashboard"}>
            <button className="w-full bg-gray-500 text-white rounded-lg py-2 cursor-pointer text-md font-semibold mt-4">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
