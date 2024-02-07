import { lazy, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const ServicesPage = lazy(() => import("../pages/services/ServicesPage"));
const PortfolioPage = lazy(() => import("../pages/portfolio/PortfolioPage"));

export const Router = () => {
  return (
    <Suspense>
      <CssBaseline />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Suspense>
  );
};
