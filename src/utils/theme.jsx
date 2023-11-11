import { createTheme } from "@mui/material";

export const Theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    allVariants: {
      lineHeight: 1.25,
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
