// import { Link, useParams } from "react-router";
// import { useEffect, useState } from "react";
// import { getCarById, updateRow } from "../services/apiProducts";

// const EditCar = () => {
//   const { id } = useParams();
//   const numericId = Number(id);

//   const [car, setCar] = useState();

//   useEffect(() => {
//     getCarById(numericId).then((data) => {
//       data && setCar(data);
//     });
//   }, [numericId]);

//   const [formData, setFormData] = useState({
//     mainImg: "",
//     secondImg: "",
//     thirdImg: "",
//     fourthImg: "",
//     fifthImg: "",
//     year: "",
//     color: "",
//     brand: "",
//     model: "",
//     price: "",
//     bodyType: "",
//     fuelType: "",
//     transmission: "",
//     quantity: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   console.log(formData);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await updateRow(numericId, formData);
//       console.log(response);
//       alert("Car updated successfully!");
//     } catch (error) {
//       console.error("Insert failed:", error);
//       alert("Car could not updated!");
//     }
//   };

//   const inputFields = [
//     { label: "Main Image URL", name: "img1", type: "text" },
//     { label: "Second Image URL", name: "img2", type: "text" },
//     { label: "Third Image URL", name: "img3", type: "text" },
//     { label: "Fourth Image URL", name: "img4", type: "text" },
//     { label: "Fifth Image URL", name: "img5", type: "text" },
//     { label: "Year", name: "year", type: "number" },
//     { label: "Color", name: "color", type: "text" },
//     { label: "Brand", name: "brand", type: "text" },
//     { label: "Model", name: "model", type: "text" },
//     { label: "Price ($)", name: "price", type: "number" },
//     { label: "Body Type", name: "bodyType", type: "text" },
//     { label: "Fuel Type", name: "fuelType", type: "text" },
//     { label: "Transmission Type", name: "transmissionType", type: "text" },
//     { label: "Quantity", name: "quantity", type: "number" },
//   ];

//   return (
//     <div className="container pb-14 px-4">
//       <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
//         <span className="my-blue">Edit</span> Car
//       </h1>

//       <div className="flex items-center justify-center">
//         <div className="w-full max-w-4xl px-6 py-10 rounded-lg shadow-2xl border border-gray-500">
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {inputFields.map((field) => (
//               <div key={field.name} className="flex flex-col space-y-2">
//                 <label className="dark:text-white text-sm">{field.label}</label>
//                 <input
//                   name={field.name}
//                   type={field.type}
//                   value={formData?.[field.name] || car?.[field.name] || ""}
//                   onChange={handleChange}
//                   className="outline-none border border-gray-300 bg-white text-black dark:bg-black dark:text-white rounded-md py-2 px-3"
//                 />
//               </div>
//             ))}

//             <button
//               type="submit"
//               className="w-full bg-my-blue text-white rounded-lg py-2 cursor-pointer text-md font-semibold mt-8"
//             >
//               Edit
//             </button>
//           </form>

//           <Link to={"/dashboard"}>
//             <button className="w-full bg-gray-500 text-white rounded-lg py-2 cursor-pointer text-md font-semibold mt-4">
//               Back to Dashboard
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditCar;

import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCarById, updateRow } from "../services/apiProducts";

const EditCar = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const [car, setCar] = useState();

  useEffect(() => {
    getCarById(numericId).then((data) => {
      data && setCar(data);
    });
  }, [numericId]);

  const [formData, setFormData] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    year: "",
    color: "",
    brand: "",
    model: "",
    price: "",
    bodyType: "",
    fuelType: "",
    transmissionType: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = { ...car };

    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        updatedFormData[key] = formData[key];
      }
    });

    updatedFormData.year = formData.year ? Number(formData.year) : car.year;
    updatedFormData.price = formData.price ? Number(formData.price) : car.price;
    updatedFormData.quantity = formData.quantity
      ? Number(formData.quantity)
      : car.quantity;

    try {
      const response = await updateRow(numericId, updatedFormData);
      console.log(response);
      alert("Car updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Car could not be updated!");
    }
  };

  const inputFields = [
    { label: "Main Image URL", name: "img1", type: "text" },
    { label: "Second Image URL", name: "img2", type: "text" },
    { label: "Third Image URL", name: "img3", type: "text" },
    { label: "Fourth Image URL", name: "img4", type: "text" },
    { label: "Fifth Image URL", name: "img5", type: "text" },
    { label: "Year", name: "year", type: "number" },
    { label: "Color", name: "color", type: "text" },
    { label: "Brand", name: "brand", type: "text" },
    { label: "Model", name: "model", type: "text" },
    { label: "Price ($)", name: "price", type: "number" },
    { label: "Body Type", name: "bodyType", type: "text" },
    { label: "Fuel Type", name: "fuelType", type: "text" },
    { label: "Transmission Type", name: "transmissionType", type: "text" },
    { label: "Quantity", name: "quantity", type: "number" },
  ];

  return (
    <div className="container pb-14 px-4">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">Edit</span> Car
      </h1>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl px-6 py-10 rounded-lg shadow-2xl border border-gray-500">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {inputFields.map((field, i) => (
              <div key={i} className="flex flex-col space-y-2">
                <label className="dark:text-white text-sm">{field.label}</label>
                <input
                  name={field.name}
                  type={field.type}
                  value={formData?.[field.name] || car?.[field.name] || ""}
                  onChange={handleChange}
                  className="outline-none border border-gray-300 bg-white text-black dark:bg-black dark:text-white rounded-md py-2 px-3"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-my-blue text-white rounded-lg py-2 cursor-pointer text-md font-semibold mt-8"
            >
              Edit
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

export default EditCar;
