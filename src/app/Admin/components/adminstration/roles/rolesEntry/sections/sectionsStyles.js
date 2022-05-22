import { makeStyles } from "@material-ui/core";
import {
  primaryColor,
  redColor,
  darkGrayColor,
  maxWidth,
  whiteColor,
} from "../../../../../../../common/assets/layout";

const MuiTextField = {
  width: "100%",
  height: 46,
  margin: "auto",
  marginBottom: 18,
  fontSize: 16,
  borderRadius: 10,
  lineHeight: "26px",
};

const title = {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "26px",
  color: "#313131",
};

const muiOutlinedInputRoot = {
  borderRadius: 10,
  height: "100%",
  color: darkGrayColor,
  paddingLeft: 15,
  "&.Mui-focused fieldset": {
    borderColor: primaryColor,
  },
};

const muiOutlinedInputRootError = {
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
};

export const useStyles = makeStyles((theme) => ({
  login__input: {
    "&.MuiTextField-root": {
      ...MuiTextField,
      background: "linear-gradient(0deg, #FBFBFB, #FBFBFB), #525252",
    },
    "& .MuiOutlinedInput-root": {
      ...muiOutlinedInputRoot,
    },
  },
  login__input_error: {
    "&.MuiTextField-root": {
      ...MuiTextField,
      background: "#fae7e7",
    },
    "& .MuiOutlinedInput-root": {
      ...muiOutlinedInputRootError,
    },
  },
  entry__container: {
    padding: "50px",
    flexGrow: 1,
  },
  entry__first: {
    width: "447px",
    height: "235px",
    border: "0.5px solid #C4C4C4",
    borderRadius: "10px",
  },
  entry__first__title: {
    ...title,
  },
  principals: {
    padding: "30px 10px",
  },
  principals__controls: {
    width: "100%",
    maxWidth: maxWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 25,
    "& button": {
      color: primaryColor,
      fontWeight: 700,
      minWidth: 190,
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
}));
