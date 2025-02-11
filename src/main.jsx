import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/style/index.css";
import "/src/assets/style/style.scss";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
