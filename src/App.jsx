import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Cars from "./components/Cars";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { NavbarContent } from "./layouts/NavbarContent";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <NavbarContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
