import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home, Services } from "../pages/pages";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </>
  );
};
