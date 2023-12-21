import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
};
