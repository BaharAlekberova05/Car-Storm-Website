import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "flowbite";
import "../src/assets/style/index.css";
import "/src/assets/style/style.scss";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  </Provider>
);
