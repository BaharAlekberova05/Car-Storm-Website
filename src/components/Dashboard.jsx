import { FaPlus, FaBars, FaTimes } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router";
import { Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { deleteRows, getCars } from "../services/apiProducts";

const TABLE_HEAD = ["Image", "Car Name", "Price", "Status"];

function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  };

  const variants = {
    default:
      "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
    outline:
      "border border-gray-300 text-gray-700 dark:text-white hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700",
    destructive:
      "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg",
    icon: "p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center",
  };

  return (
    <button
      className={`rounded font-semibold transition-all ${sizeClasses[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-black p-6 shadow-xl transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:relative md:translate-x-0 md:w-72 z-30`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Admin Panel
        </h2>
        <FaTimes
          className="md:hidden text-gray-700 dark:text-white cursor-pointer hover:text-red-500 transition-colors"
          size={20}
          onClick={toggleSidebar}
        />
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-medium"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/cars"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-medium"
          >
            All Cars
          </Link>
        </li>
        <li>
          <Link
            to="/add-car"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-medium"
          >
            Add Cars
          </Link>
        </li>
      </ul>
    </aside>
  );
}

function Navbar({ toggleSidebar }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-black shadow-md rounded-lg mb-6 md:hidden">
      <Button
        variant="icon"
        onClick={toggleSidebar}
        className="hover:bg-blue-100 dark:hover:bg-gray-800"
      >
        <FaBars size={20} className="text-gray-700 dark:text-white" />
      </Button>
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        Admin Dashboard
      </h1>
      <div className="w-10"></div>
    </nav>
  );
}

export default function CarDashboard() {
  const [cars, setCars] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [confirmDelete, setConfirmDelete] = useState(null);

  //? My ver
  useEffect(() => {
    getCars().then((data) => {
      data && setCars(data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteRows(id);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error("Could not delete", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-black">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 p-6">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Car Inventory
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your car listings
          </p>
        </div>

        <Card className="dark:bg-black overflow-hidden rounded-xl shadow-lg">
          <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
            <Typography
              variant="h5"
              className="font-bold text-gray-800 dark:text-white"
            >
              All Cars
            </Typography>
            <Link to="/add-car">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors">
                <FaPlus size={16} /> Add New Car
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="py-4 px-6 border-b border-gray-200 dark:border-gray-900"
                    >
                      <Typography className="font-bold text-gray-700 dark:text-gray-300 text-sm">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => {
                  const isLast = index === cars.length - 1;
                  const classes = isLast
                    ? "py-4 px-6"
                    : "py-4 px-6 border-b border-gray-200 dark:border-gray-700";

                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className={classes}>
                        <div className=" rounded-lg p-2 w-16 h-16 flex items-center justify-center">
                          <img
                            src={car.img1}
                            alt={car.brand}
                            className="max-w-full max-h-full object-contain rounded"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography className="font-medium text-gray-900 dark:text-white">
                          {car.brand} {car.model}
                        </Typography>
                        <Typography className="text-sm text-gray-600 dark:text-gray-400">
                          ID: {car.id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography className="font-semibold text-gray-900 dark:text-white">
                          {car.price}
                        </Typography>
                      </td>
                      <td className={`${classes} whitespace-nowrap`}>
                        <div className="flex items-center gap-3">
                          <Link to={`/edit-car/${car.id}`}>
                            <Button
                              variant="icon"
                              className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800"
                            >
                              <FiEdit3 className="w-5 h-5 text-blue-700 dark:text-blue-300 cursor-pointer" />
                            </Button>
                          </Link>
                          <Button variant="icon">
                            <FaRegTrashCan
                              className="dark:text-white cursor-pointer"
                              onClick={() => handleDelete(car.id)}
                            />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
