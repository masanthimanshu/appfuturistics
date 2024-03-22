import { lazy, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const HireUsPage = lazy(() => import("../pages/hire/HireUsPage"));
const CareerPage = lazy(() => import("../pages/career/CareerPage"));
const ServicesPage = lazy(() => import("../pages/services/ServicesPage"));
const PortfolioPage = lazy(() => import("../pages/portfolio/PortfolioPage"));

export const Router = () => {
  return (
    <Suspense>
      <CssBaseline />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/hire-us" element={<HireUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Suspense>
  );
};
