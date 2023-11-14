import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../navigation/Footer";
import { Header } from "../navigation/Header";
import { Home, Services } from "../pages/pages";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};
