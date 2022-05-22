import { makeStyles } from "@material-ui/core";
import {
  primaryColor,
  redColor,
  whiteColor,
  darkGrayColor,
  maxWidth,
} from "../../../../../../../common/assets/layout";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const MuiTextField = {
  width: "100%",
  height: 46,
  margin: "auto",
  marginBottom: 18,
  fontSize: 16,
  borderRadius: 10,
  lineHeight: "26px",
};

const MuiTextFieldDiscount = {
  width: "95px",
  height: "40px",
  margin: "auto",
  marginBottom: 18,
  textAlign: "center",
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

const discount_box_container = {
  height: "405px",
  border: "0.5px solid #C4C4C4",
  borderRadius: "10px",
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

export const AntSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 21,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: "#C84D55",
    "&$checked": {
      transform: "translateX(22px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#C84D55",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 17,
    height: 17,
    boxShadow: "none",
    backgroundColor: whiteColor,
  },
  track: {
    border: `1px solid "#C84D55"`,
    borderRadius: "9px",
    backgroundColor: "#C84D55",
    opacity: 1,
  },
  checked: {},
}))(Switch);

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
  input__discount: {
    "&.MuiTextField-root": {
      ...MuiTextFieldDiscount,
      background: "linear-gradient(0deg, #FBFBFB, #FBFBFB), #525252",
    },
    "& .MuiOutlinedInput-root": {
      ...muiOutlinedInputRoot,
    },
  },
  input__error__discount: {
    "&.MuiTextField-root": {
      ...MuiTextFieldDiscount,
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
  discount__container: {
    padding: "76px 50px",
    flexGrow: 1,
  },
  entry__first: {
    width: "527px",
    height: "235px",
    border: "0.5px solid #C4C4C4",
    borderRadius: "10px",
  },
  entry__first__title: {
    ...title,
  },
  entry__second: {
    width: "547px",
    padding: "35px 50px",
    height: "235px",
    border: "0.5px solid #C4C4C4",
    borderRadius: "10px",
    position: "relative",
  },
  entry__second__title: {
    ...title,
    color: darkGrayColor,
  },
  entry__third: {
    width: "1200px",
    margin: "22px auto",
    padding: "35px 50px",
    minHeight: "370px",
    border: "0.5px solid #C4C4C4",
    borderRadius: "10px",
  },
  entry__third__title: {
    ...title,
  },
  entry__switch: {
    fontWeight: 400,
    fontsize: "16px",
    lineHeight: "26px",
    color: "#979797",
  },
  discount__first: {
    ...discount_box_container,
  },
  discount__second: {
    ...discount_box_container,
  },
  discount__first__fieldtitle: {
    flex: 4,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#979797",
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
}));
