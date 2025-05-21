import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PricingPage from "./pages/pricing/index.jsx";
import store from "./store/index.js";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global.style.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PricingPage />
    </Provider>
  </StrictMode>
);
