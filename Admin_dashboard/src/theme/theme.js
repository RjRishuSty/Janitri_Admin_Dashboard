// theme.js
import { createTheme } from "@mui/material/styles";

const commonTypography = {
  fontFamily: '"Nunito", sans-serif',
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff", // body color
    },
    primary: {
      main: "#fffadc", // header color
      bg: "#f2f2f2",
    },
    secondary: {
      main: "#fffbe6", // sidebar color
    },
    text: {
      primary: "#000", // text color
      secondary: "#fff",
    },
    custom: {
      icon: "#0000ff",
      bg: "#e6e6ff",
      isActive: "#b3b3ff",
    },
  },
  typography: commonTypography,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            // input border
            "& fieldset": {
              borderColor: "#000", // default border
            },
            // input border on hover
            "&:hover fieldset": {
              borderColor: "#000",
            },
            // input border on focus
            "&.Mui-focused fieldset": {
              borderColor: "#000",
            },
            // input text color
            color: "#000",
          },
          // label color (e.g., placeholder/label text)
          "& .MuiInputLabel-root": {
            color: "#000",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#000",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000", // body color
    },
    primary: {
      main: "#000", // header color
      bg: "#262626",
    },
    secondary: {
      main: "#000", // sidebar color
    },
    text: {
      primary: "#fff", // text color
      secondary: "#000",
    },
    custom: {
      icon: "#948979",
      bg: "#f2f2f2",
      isActive: "#8c8c8c",
    },
  },
  typography: commonTypography,
  components: {
   MuiTextField: {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-root": {
        // input border
        "& fieldset": {
          borderColor: "#ccc", // default border
        },
        // input border on hover
        "&:hover fieldset": {
          borderColor: "#ccc",
        },
        // input border on focus
        "&.Mui-focused fieldset": {
          borderColor: "#ccc",
        },
        // input text color
        color: "#ccc",
      },
      // label color (e.g., placeholder/label text)
      "& .MuiInputLabel-root": {
        color: "#ccc",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#ccc",
      },
    },
  },
}

  },
});

export { lightTheme, darkTheme };
