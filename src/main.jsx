import { Theme } from "./utils/theme";
import { Router } from "./utils/router";
import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./style/global.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);
