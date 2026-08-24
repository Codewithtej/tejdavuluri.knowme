import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Portfolio } from "./components/Portfolio";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
