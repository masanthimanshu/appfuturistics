import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { ServicesPage } from "../pages/services/ServicesPage";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
};
