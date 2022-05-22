import {
  primaryColor,
  whiteColor,
  greenColor,
  redColor,
  darkGrayColor,
} from "../../layout";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

export const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: primaryColor,
    color: whiteColor,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    "& .MuiTooltip-arrow": {
      color: primaryColor,
    },
  },
}))(Tooltip);

const MuiTextField = {
  width: 413,
  height: 47,
  margin: "auto",
  marginBottom: 30,
  fontSize: 16,
  borderRadius: 10,
};

export const useStyles = makeStyles((theme) => ({
  adminstration: {
    width: "100%",
  },
  adminstration__header: {
    width: "100%",
    height: 35,
    "& h6": {
      color: primaryColor,
      fontSize: 28,
      fontWeight: 700,
    },
  },
  adminstration__controls: {
    width: "100%",
    // maxWidth: maxWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 25,

    "& svg": {
      fontSize: 32,
      color: primaryColor,
      margin: "0 35px",
    },
    "& button": {
      color: primaryColor,
      fontWeight: 700,
      width: 190,
      height: 48,
      borderRadius: 10,
      margin: "0 10px",
      textTransform: "capitalize",
      border: `2px solid ${primaryColor}`,
      transition: ".3s",

      "&:hover": {
        color: whiteColor,
        backgroundColor: primaryColor,

        "& svg": {
          color: whiteColor,
        },
      },
    },
  },
  // Modal
  modal: {
    "&.MuiDialog-paper": {
      borderRadius: 20,
      width: 543,
      height: 428,
      position: "relative",
      padding: "30px 30px 0px",
      //   boxSizing: "border-box",
    },
    backgroundColor: whiteColor,
  },
  modal__header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    "& h5": {
      fontSize: 24,
      lineHeight: "38.4px",
      color: primaryColor,
    },
    "& div": {
      borderLeft: `10px solid ${primaryColor}`,
      paddingLeft: 18,
    },
  },
  modal__divider: {
    marginBottom: 50,
  },
  modal__formActions: {
    marginTop: 30,
    textAlign: "right",
  },
  form: {
    textAlign: "center",
  },
  submit: {
    width: 170,
    height: 49,
    margin: 10,
    textTransform: "capitalize",
    backgroundColor: whiteColor,
    color: greenColor,
    border: `1px solid ${greenColor}`,
    borderRadius: 10,
    boxShadow: "none",
    "& svg": {
      color: greenColor,
    },
    "&:hover": {
      boxShadow: "none",
      backgroundColor: greenColor,
      color: whiteColor,
      "& svg": {
        color: whiteColor,
      },
    },
  },
  modal__close: {
    position: "absolute",
    top: 16,
    right: 28,
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
  modal__close: {
    position: "absolute",
    top: 16,
    right: 28,
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
      paddingLeft: 15,
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
}));
