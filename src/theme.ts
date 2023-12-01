import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#7F56D9",
      light: "#9C7EE6",
    },
    text: {
      primary: "#101828",
      secondary: "#344054",
    },
    info: {
      main: "#D0D5DD",
      light: "#03a9f4",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

export default theme;
