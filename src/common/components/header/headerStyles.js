import { makeStyles } from "@material-ui/core/styles";
import {
  whiteColor,
  blackColor,
  drawerWidth,
  darkGrayColor,
  lightGrayColor,
  redColor,
  lightPrimaryColor,
  primaryColor,
} from "../../../common/assets/layout";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: whiteColor,
    boxShadow: "rgba(53, 64, 82, 0.05) 0px 0px 14px 0px",
    height: 50,
  },
  header: {
    backgroundColor: whiteColor,
    color: blackColor,
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    "&.MuiToolbar-root": {
      borderBottomStyle: "inset",
    },
  },
  // controls
  header__controls: {
    display: "flex",
  },
  avatar: {
    width: 40,
    height: 40,
    cursor: "pointer",
    margin: "0 10px",
  },
  bell: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#f4f4f4",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
      fill: darkGrayColor,
    },

    "& span": {
      width: 9,
      height: 9,
      backgroundColor: redColor,
      borderRadius: "50%",
      position: "absolute",
      top: 7,
      right: 12,
    },
  },
  location: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: lightPrimaryColor,
    borderRadius: 25,
    height: 40,
    padding: "0 0px 0 5px",
    margin: "0 10px",
    cursor: "pointer",

    "& svg": {
      margin: "0 10px",
      color: primaryColor,
    },
  },
}));
