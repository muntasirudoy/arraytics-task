import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PricingPage from "./pages/pricing/index.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <PricingPage />
  </StrictMode>
);
