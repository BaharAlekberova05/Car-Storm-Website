// import { Route, Routes } from "react-router";
// import Home from "./components/Home";
// import About from "./components/About";
// import Cars from "./components/Cars";
// import Contact from "./components/Contact";
// import News from "./components/News";
// import { NavbarContent } from "./layouts/NavbarContent";
// import Footer from "./layouts/Footer";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import NotFound from "./components/NotFound";
// import NewsDetails from "./components/NewsDetails";
// import Cart from "./components/Cart";
// import Wishlist from "./components/Wishlist";
// import CarDetails from "./components/CarDetails";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Checkout from "./components/Checkout";
// import Dashboard from "./components/Dashboard";
// import AddCar from "./components/AddCar";
// import EditCar from "./components/EditCar";
// import Preloader from "./layouts/Preloader";

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   const mode = useSelector((state) => state.theme.mode);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", mode === "dark");
//   }, [mode]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, []);
//   return (
//     {loading && <Preloader />}
//     {!loading && (
//       <div className="bg-[#f5f5f5] dark:bg-[#121212]">
//       <NavbarContent />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cars" element={<Cars />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/news-details/:slug" element={<NewsDetails />} />
//         <Route path="/car-details/:slug" element={<CarDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-car" element={<AddCar />} />
//         <Route path="/edit-car/:id" element={<EditCar />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//     )}

//   );
// };

// export default App;

import { useState, useEffect } from "react"; // useState'yi import ettik
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Cars from "./components/Cars";
import Contact from "./components/Contact";
import News from "./components/News";
import { NavbarContent } from "./layouts/NavbarContent";
import Footer from "./layouts/Footer";
import { useSelector } from "react-redux";
import NotFound from "./components/NotFound";
import NewsDetails from "./components/NewsDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import CarDetails from "./components/CarDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import Preloader from "./layouts/Preloader"; // Preloader'ı import ettik

const App = () => {
  const [loading, setLoading] = useState(true);

  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="bg-[#f5f5f5] dark:bg-[#121212]">
          <NavbarContent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news-details/:slug" element={<NewsDetails />} />
            <Route path="/car-details/:slug" element={<CarDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/edit-car/:id" element={<EditCar />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
