import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion } from "framer-motion";
import App from "./App";
import "./index.css";

const loadFeatures = () => import("framer-motion").then(res => res.domAnimation);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <LazyMotion features={loadFeatures} strict>
        <App />
      </LazyMotion>
    </HelmetProvider>
  </React.StrictMode>
);
