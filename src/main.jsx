import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/style/index.css";
import "/src/assets/style/style.scss";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
