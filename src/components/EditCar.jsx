import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCarById, updateRow } from "../services/apiProducts";
import { useTranslation } from "react-i18next";

const EditCar = () => {
  const { t } = useTranslation();
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
      alert(t("editCar.updateSuccess"));
    } catch (error) {
      console.error("Update failed:", error);
      alert(t("editCar.updateFail"));
    }
  };

  const inputFields = [
    { label: t("editCar.mainImageURL"), name: "img1", type: "text" },
    { label: t("editCar.secondImageURL"), name: "img2", type: "text" },
    { label: t("editCar.thirdImageURL"), name: "img3", type: "text" },
    { label: t("editCar.fourthImageURL"), name: "img4", type: "text" },
    { label: t("editCar.fifthImageURL"), name: "img5", type: "text" },
    { label: t("editCar.year"), name: "year", type: "number" },
    { label: t("editCar.color"), name: "color", type: "text" },
    { label: t("editCar.brand"), name: "brand", type: "text" },
    { label: t("editCar.model"), name: "model", type: "text" },
    { label: t("editCar.price"), name: "price", type: "number" },
    { label: t("editCar.bodyType"), name: "bodyType", type: "text" },
    { label: t("editCar.fuelType"), name: "fuelType", type: "text" },
    {
      label: t("editCar.transmissionType"),
      name: "transmissionType",
      type: "text",
    },
    { label: t("editCar.quantity"), name: "quantity", type: "number" },
  ];

  return (
    <div className="container pb-14 px-4">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">{t("editCar.edit")}</span> {t("editCar.car")}
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
                  className="outline-none border border-gray-300 bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-2 px-3"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-my-blue text-white rounded-lg py-2 cursor-pointer text-md font-semibold mt-8"
            >
              {t("editCar.editButton")}
            </button>

            <Link to={"/dashboard"}>
              <button className="w-[48%] bg-gray-500 text-white rounded-lg py-2 cursor-pointer text-md font-semibold">
                {t("editCar.backToDashboard")}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCar;
