import { createMuiTheme } from "@material-ui/core";

// ==> Theme
export const theme = createMuiTheme({
  typography: {
    fontFamily: "Work Sans",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Work Sans",
      },
    },
  },
});

export {};
