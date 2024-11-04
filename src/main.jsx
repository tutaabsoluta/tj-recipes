import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RecipeApp } from "./RecipeApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <RecipeApp />
    </StrictMode>
  </BrowserRouter>
);
