import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PricingPage from "./pages/pricing/index.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";
import store from "./store/index.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PricingPage />
    </Provider>
  </StrictMode>
);
