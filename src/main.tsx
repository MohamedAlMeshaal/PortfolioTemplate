import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

const ScrollRestoration = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      setTimeout(() => {
        window.scrollTo(0, location.state.scrollY);
      }, 100);
    }
  }, [location]);
  
  return null;
};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollRestoration />
    <App />
    <Analytics />
  </BrowserRouter>
);