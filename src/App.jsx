import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Cars from "./components/Cars";
import Contact from "./components/Contact";
import News from "./components/News";
import { NavbarContent } from "./layouts/NavbarContent";
import Footer from "./layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMode } from "./redux/ThemeSlice";
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

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") || "light";
    dispatch(setMode(savedMode));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);
  return (
    <div className="bg-[#f5f5f5] dark:bg-black">
      <NavbarContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/news-details/:slug" element={<NewsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/edit-car" element={<EditCar />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
