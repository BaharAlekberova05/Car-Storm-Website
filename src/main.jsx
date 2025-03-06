import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "flowbite";
import "../src/assets/style/index.css";
import "/src/assets/style/style.scss";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
