import { FaPlus, FaBars } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

import { Link } from "react-router";

import { Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";

const TABLE_HEAD = ["Image", "Car Name", "Price", "Status"];

const TABLE_ROWS = [
  {
    image:
      "https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg",
    carName: "Tesla Model S",
    price: "$80,000",
    status: "Available",
  },
  {
    image:
      "https://www.wsupercars.com/thumbnails/Porsche/2016-Porsche-911-Carrera-4-006.jpg",
    carName: "BMW M3",
    price: "$70,000",
    status: "Sold",
  },
  {
    image:
      "https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg",
    carName: "Audi R8",
    price: "$120,000",
    status: "Available",
  },
  {
    image:
      "https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg",
    carName: "Mercedes AMG GT",
    price: "$150,000",
    status: "Pending",
  },
];

function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const base = "px-4 py-2 rounded font-semibold";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline:
      "border border-gray-300 text-gray-700 dark:text-white hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    icon: "p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black text-white p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block p-2 hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="all-cars" className="block p-2 hover:bg-gray-700">
            All Cars
          </Link>
        </li>
        <li>
          <Link to="add-cars" className="block p-2 hover:bg-gray-700">
            Add Cars
          </Link>
        </li>
      </ul>
    </aside>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav className="bg-white dark:bg-black shadow">
      <Button variant="icon" className="md:hidden">
        <FaBars size={20} className="text-white" />
      </Button>
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">Admin</span> Dashboard
      </h1>
    </nav>
  );
}

export default function CarDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-black">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />

        <div className="bg-white dark:bg-black border rounded-lg shadow">
          <section className="w-full bg-white dark:bg-black p-4 rounded-lg shadow-md overflow-x-auto">
            <Card className="dark:bg-black h-full w-full border border-gray-300 dark:border-gray-700 px-4 md:px-6 xl:px-8">
              <table className="w-full min-w-max table-auto text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-black">
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
                  {TABLE_ROWS.map(
                    ({ image, carName, price, status }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "py-3 px-3"
                        : "py-3 px-3 border-b border-gray-300 dark:border-gray-600";

                      return (
                        <tr key={carName} className="hover:bg-gray-900">
                          <td className={classes}>
                            <img
                              src={image}
                              alt={carName}
                              className="w-12 h-12 rounded-md object-contain"
                            />
                          </td>
                          <td className={classes}>
                            <Typography className="font-bold dark:text-white text-xs md:text-sm xl:text-lg">
                              {carName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg">
                              {price}
                            </Typography>
                          </td>
                          <td className={`${classes} whitespace-nowrap`}>
                            <Typography className="font-normal text-gray-600 dark:text-gray-300 text-xs md:text-sm xl:text-lg flex items-center space-x-2">
                              <Link to={"/edit-car"}>
                                <FiEdit3
                                  title="Edit"
                                  color="action"
                                  className="w-6 h-6 text-black dark:text-white cursor-pointer"
                                />
                              </Link>
                              <FaRegTrashCan
                                title="Delete"
                                color="action"
                                className="text-black dark:text-white cursor-pointer"
                              />
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </Card>
          </section>

          <div className="flex items-center justify-end">
            <Link to={"/add-car"}>
              <Button className="flex items-center gap-2 mr-4 cursor-pointer">
                <FaPlus size={16} /> Add New Car
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
