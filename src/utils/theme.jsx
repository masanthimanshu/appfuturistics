import { createTheme } from "@mui/material";

export const Theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "inherit",
          },
        },
      },
    },
  },
});
