import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

// Pages Imported Here
import { Home, Services } from "./pages/pages";

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
