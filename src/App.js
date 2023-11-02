import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./router";

const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          transition: "background-color 300ms",
          "& .MuiOutlinedInput-notchedOutline": {
            transition: "border 300ms",
          },
          ":hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0000003b",
            },
          },
          "&.Mui-focused": {
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#14a077",
              borderWidth: 1,
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          "&.Mui-selected": {
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: "transparent",
            },
            ":focus": {
              backgroundColor: "transparent",
            },
          },
          ":focus": {
            color: "#14a077",
            backgroundColor: "transparent",
          },
          ":hover": {
            color: "#14a077",
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root": {
            transition: "background-color 300ms",
            "& .MuiAvatar-root": {
              transition: "background-color 300ms",
            },
            ":hover": {
              backgroundColor: "#f5f5f5",
              "& .MuiAvatar-root": {
                backgroundColor: "white",
              },
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
