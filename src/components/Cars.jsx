// "use client";
// import { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// import { AiOutlineClose } from "react-icons/ai";
// import { AiOutlineMinus } from "react-icons/ai";
// import { AiOutlinePlus } from "react-icons/ai";
// import CarCard from "./CarCard";
// import { getCars, getCategories } from "../services/apiProducts";

// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       { value: "white", label: "White", checked: false },
//       { value: "beige", label: "Beige", checked: false },
//       { value: "blue", label: "Blue", checked: true },
//       { value: "brown", label: "Brown", checked: false },
//       { value: "green", label: "Green", checked: false },
//       { value: "purple", label: "Purple", checked: false },
//     ],
//   },
//   {
//     id: "category",
//     name: "Category",
//     options: [
//       { value: "new-arrivals", label: "New Arrivals", checked: false },
//       { value: "sale", label: "Sale", checked: false },
//       { value: "travel", label: "Travel", checked: true },
//       { value: "organization", label: "Organization", checked: false },
//       { value: "accessories", label: "Accessories", checked: false },
//     ],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Cars() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [cars, setCars] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     getCars().then((data) => {
//       setCars(data);
//     });
//   }, []);

//   useEffect(() => {
//     getCategories().then((categoriesAPI) => {
//       setCategories(categoriesAPI);
//     });
//   }, []);

//   return (
//     <div className="bg-white dark:bg-black">
//       <div>
//         {/* Mobile filter dialog */}
//         <Dialog
//           open={mobileFiltersOpen}
//           onClose={setMobileFiltersOpen}
//           className="relative z-40 lg:hidden"
//         >
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
//           />

//           <div className="fixed inset-0 z-40 flex">
//             <DialogPanel
//               transition
//               className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
//             >
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button
//                   type="button"
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <AiOutlineClose aria-hidden="true" className="size-6" />
//                 </button>
//               </div>

//               {/* Filters */}
//               <form className="mt-4 border-t border-gray-200">
//                 <h3 className="sr-only dark:text-white">Categories</h3>
//                 <ul
//                   role="list"
//                   className="px-2 pb-3 pt-40 font-medium text-gray-900"
//                 >
//                   {cars.map((car) => (
//                     <li key={car.id}>
//                       <a href="#" className="block px-2 py-3">
//                         {car.brand}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>

//                 {filters.map((section) => (
//                   <Disclosure
//                     key={section.id}
//                     as="div"
//                     className="border-t border-gray-200 px-4 py-6"
//                   >
//                     <h3 className="-mx-2 -my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {section.name}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <AiOutlinePlus
//                             aria-hidden="true"
//                             className="size-5 group-data-open:hidden"
//                           />
//                           <AiOutlineMinus
//                             aria-hidden="true"
//                             className="size-5 group-not-data-open:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <div className="space-y-6">
//                         {section.options.map((option, optionIdx) => (
//                           <div key={option.value} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid size-4 grid-cols-1">
//                                 <input
//                                   defaultValue={option.value}
//                                   id={`filter-mobile-${section.id}-${optionIdx}`}
//                                   name={`${section.id}[]`}
//                                   type="checkbox"
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                 />
//                                 <svg
//                                   fill="none"
//                                   viewBox="0 0 14 14"
//                                   className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                 >
//                                   <path
//                                     d="M3 8L6 11L11 3.5"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-checked:opacity-100"
//                                   />
//                                   <path
//                                     d="M3 7H11"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-indeterminate:opacity-100"
//                                   />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label
//                               htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                               className="min-w-0 flex-1 text-gray-500 dark:text-white"
//                             >
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//               </form>
//             </DialogPanel>
//           </div>
//         </Dialog>

//         <main className="container">
//           <div className="flex flex-col  border-b border-gray-200 pt-8 pb-6">
//             <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white text-center w-full mb-6">
//               Our <span className="my-blue">Cars</span>
//             </h1>

//             <form className="w-full max-w-sm min-w-[200px] mx-auto">
//               <div className="relative flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <input
//                   className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 dark:border-gray-500 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow placeholder:font-medium"
//                   placeholder="Search Your Dream Car..."
//                 />
//                 <button
//                   className="rounded-md bg-my-blue py-2 px-4 border border-transparent text-center text-sm text-white font-semibold transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer"
//                   type="button"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>

//           <section aria-labelledby="products-heading" className="pt-6 pb-16">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//               {/* Filters */}
//               <form className="hidden lg:block">
//                 <h3 className="sr-only">Categories</h3>
//                 {/* <ul
//                   role="list"
//                   className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   {cars.map((car) => (
//                     <li key={car.id}>
//                       <a href="#">{car.brand}</a>
//                     </li>
//                   ))}
//                 </ul> */}

//                 {Object.keys(categories).map((cat, i) => (
//                   <Disclosure
//                     key={i}
//                     as="div"
//                     className="border-b border-gray-200 py-6"
//                   >
//                     <h3 className="-my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-black py-3 text-sm text-gray-400 dark:text-white hover:text-gray-500">
//                         <span className="font-medium text-gray-900 dark:text-white">
//                           {cat}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <AiOutlinePlus
//                             aria-hidden="true"
//                             className="size-5 group-data-open:hidden"
//                           />
//                           <AiOutlineMinus
//                             aria-hidden="true"
//                             className="size-5 group-not-data-open:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <div className="space-y-4">
//                         {categories[cat].map((subcat, i) => (
//                           <div key={i} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid size-4 grid-cols-1">
//                                 <input
//                                   id={`filter-${i}-${i}`}
//                                   name={`${i}[]`}
//                                   type="checkbox"
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                 />
//                                 <svg
//                                   fill="none"
//                                   viewBox="0 0 14 14"
//                                   className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                 >
//                                   <path
//                                     d="M3 8L6 11L11 3.5"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-checked:opacity-100"
//                                   />
//                                   <path
//                                     d="M3 7H11"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-indeterminate:opacity-100"
//                                   />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label
//                               htmlFor={`filter-${i}-${i}`}
//                               className="text-sm text-gray-600 dark:text-white"
//                             >
//                               {subcat}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//               </form>

//               {/* Product grid */}
//               <div className="lg:col-span-3 px-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-6">
//                   {cars.map((car, i) => (
//                     <CarCard
//                       key={i}
//                       brand={car.brand}
//                       model={car.model}
//                       price={car.price}
//                       img1={car.img1}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FiFilter } from "react-icons/fi"; // Added filter icon
import CarCard from "./CarCard";
import { getCars, getCategories } from "../services/apiProducts";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Cars() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getCars().then((data) => {
      setCars(data);
    });
  }, []);

  useEffect(() => {
    getCategories().then((categoriesAPI) => {
      setCategories(categoriesAPI);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-gray-900 py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Filters
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white dark:bg-gray-900 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close menu</span>
                  <AiOutlineClose aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200 dark:border-gray-700">
                {Object.keys(categories).length > 0 &&
                  Object.keys(categories).map((cat, i) => (
                    <Disclosure
                      key={i}
                      as="div"
                      className="border-b border-gray-200 dark:border-gray-700 px-4 py-6"
                      defaultOpen={i === 0}
                    >
                      <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-900 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {cat}
                          </span>
                          <span className="ml-6 flex items-center">
                            <AiOutlinePlus
                              aria-hidden="true"
                              className="size-5 group-data-open:hidden"
                            />
                            <AiOutlineMinus
                              aria-hidden="true"
                              className="size-5 group-not-data-open:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {categories[cat].map((subcat, i) => (
                            <div key={i} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    id={`filter-mobile-${cat}-${i}`}
                                    name={`${cat}[]`}
                                    value={subcat}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label
                                htmlFor={`filter-mobile-${cat}-${i}`}
                                className="text-sm text-gray-600 dark:text-gray-300"
                              >
                                {subcat}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="py-8">
          <div className="flex flex-col border-b border-gray-200 dark:border-gray-700 pt-4 pb-6">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white text-center w-full mb-6">
              Our <span className="my-blue">Cars</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-3xl mx-auto">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600 dark:text-slate-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 dark:text-slate-300 text-sm border border-slate-200 dark:border-gray-600 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow placeholder:font-medium"
                    placeholder="Search Your Dream Car..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="rounded-md bg-my-blue py-2 px-4 border border-transparent text-center text-sm text-white font-semibold transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer whitespace-nowrap"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Mobile filter button */}
              <button
                type="button"
                className="lg:hidden inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <FiFilter className="-ml-1 mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                Filters
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-16">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {Object.keys(categories).length > 0 &&
                  Object.keys(categories).map((cat, i) => (
                    <Disclosure
                      key={i}
                      as="div"
                      className="border-b border-gray-200 dark:border-gray-700 py-6"
                      defaultOpen={i === 0}
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-black py-3 text-sm text-gray-400 dark:text-white hover:text-gray-500">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {cat}
                          </span>
                          <span className="ml-6 flex items-center">
                            <AiOutlinePlus
                              aria-hidden="true"
                              className="size-5 group-data-open:hidden"
                            />
                            <AiOutlineMinus
                              aria-hidden="true"
                              className="size-5 group-not-data-open:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {categories[cat].map((subcat, i) => (
                            <div key={i} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    id={`filter-${cat}-${i}`}
                                    name={`${cat}[]`}
                                    value={subcat}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label
                                htmlFor={`filter-${cat}-${i}`}
                                className="text-sm text-gray-600 dark:text-white"
                              >
                                {subcat}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {cars.length === 0 ? (
                  <div className="flex items-center justify-center h-64">
                    <p className="text-gray-500 dark:text-gray-400">
                      Loading cars...
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6">
                    {cars.map((car, i) => (
                      <CarCard
                        key={i}
                        brand={car.brand}
                        model={car.model}
                        price={car.price}
                        img1={car.img1}
                      />
                    ))}
                  </div>
                )}

                {/* Pagination - Optional */}
                <div className="mt-8 flex justify-center">
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 bg-indigo-50 dark:bg-indigo-900 border-indigo-500 dark:border-indigo-700 text-indigo-600 dark:text-indigo-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      3
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
