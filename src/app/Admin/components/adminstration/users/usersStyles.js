import { makeStyles } from "@material-ui/core";
import {
  darkGrayColor,
  primaryColor,
  redColor,
  whiteColor,
  maxWidth,
  lightPrimaryColor,
} from "../../../../../common/assets/layout";

export const useStyles = makeStyles((theme) => ({
  brands: {
    width: "100%",
  },
  brands__header: {
    width: "100%",
    height: 35,
    "& h6": {
      color: primaryColor,
      fontSize: 28,
      fontWeight: 700,
    },
  },
  brands__controls: {
    width: "100%",
    maxWidth: maxWidth,
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
}));
