import { makeStyles } from "@material-ui/core";
import {
  darkGrayColor,
  greenColor,
  lightGrayColor,
  primaryColor,
  redColor,
  textColor,
  whiteColor,
} from "../../../common/assets/layout";

const MuiTextField = {
  width: 384,
  height: 64,
  margin: "auto",
  marginBottom: 30,
  fontSize: 16,
  borderRadius: 10,
};

export const useStyles = makeStyles(() => ({
  login: {
    width: "100%",
    height: "100vh",
    backgroundColor: lightGrayColor,
    fontFamily: "Work Sans",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login__inner: {
    height: "80%",
    width: 1100,

    display: "flex",
    alignItems: "center",
  },
  login__typography: {
    width: "50%",

    // lift the text up
    position: "relative",
    top: -50,
  },
  login__title: {
    color: redColor,
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "102.4px",
  },
  login__subtitle: {
    fontSize: 20,
    color: textColor,
    lineHeight: "32px",
    width: 450,
  },
  // Box
  login__box: {
    position: "relative",
    width: 460,
    height: 440,
    borderRadius: 20,
    background:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
    boxShadow:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
  },
  login__form: {
    position: "absolute",
    width: 399.84,
    height: 321.8,
    left: 29,
    top: 59,
  },
  login__forgot: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "25.6px",
    color: primaryColor,
    cursor: "pointer",
    width: 165,
    height: 23,
    margin: "auto",
  },
  // input
  login__input: {
    "&.MuiTextField-root": {
      ...MuiTextField,
      background: "linear-gradient(0deg, #FBFBFB, #FBFBFB), #525252",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
      height: "100%",
      color: darkGrayColor,
      "&.Mui-focused fieldset": {
        borderColor: primaryColor,
      },
    },
    // style icons
    "& svg": {
      color: darkGrayColor,
      margin: "0 15px",
    },
  },
  login__input_error: {
    "&.MuiTextField-root": {
      ...MuiTextField,
      background: "#fae7e7",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
      height: "100%",
      color: redColor,
      border: `2px solid ${redColor}`,
      "&.Mui-focused fieldset": {
        border: "none",
      },

      "& fieldset": {
        border: "none",
      },
    },
    // style icons
    "& svg": {
      color: redColor,
      margin: "0 15px",
    },
  },
  login__input_success: {
    "&.MuiTextField-root": {
      ...MuiTextField,
      background: "rgba(221, 243, 223, 0.5)",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
      height: "100%",
      color: greenColor,
      border: `2px solid ${greenColor}`,
      "&.Mui-focused fieldset": {
        border: "none",
      },

      "& fieldset": {
        border: "none",
      },
    },
    // style icons
    "& svg": {
      color: greenColor,
      margin: "0 15px",
    },
  },
  login__button: {
    width: 384,
    height: 64,
    marginBottom: 32,
    borderRadius: 10,
    backgroundColor: primaryColor,
    color: whiteColor,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: redColor,
    },
  },
  login__eye: {
    cursor: "pointer",
  },
  login__helper_text_error: {
    color: redColor,
    top: -20,
  },
  login__helper_text_success: {
    color: greenColor,
    top: -20,
  },
}));
