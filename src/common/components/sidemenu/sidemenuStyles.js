import { makeStyles } from "@material-ui/core/styles";
import {
  whiteColor,
  drawerWidth,
  redColor,
  primaryColor,
  darkGrayColor,
  lightPrimaryColor,
  lightGrayColor,
  lightSilverColor,
} from "../../assets/layout";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: whiteColor,
    minHeight: "100vh",
    flexShrink: 0,
  },
  drawer__brand: {
    width: 105,
    height: 25,
    display: "block",
    position: "relative",
    right: -10,
  },
  drawer__brandTitle: {
    color: redColor,
    fontSize: 36,
    fontWeight: 900,
    letterSpacing: 4,
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 130,
    backgroundColor: whiteColor,
  },
  drawerPaper: {
    backgroundColor: whiteColor,
    color: whiteColor,
    width: drawerWidth,
    overflow: "hidden",
  },
  drawer__item: {
    height: 50,
    marginBottom: 10,
    paddingRight: 0,
    color: darkGrayColor,
    transition: "position 1s",
    "& svg": {
      fill: darkGrayColor,
      marginLeft: 12,
    },
    "& h5": {
      fontSize: 16,
    },
    // on hover
    "&:hover": {
      position: "relative",
      top: 1,
      left: 1,
      color: primaryColor,
      "& svg": {
        fill: primaryColor,
      },
    },
  },
  drawer__item_selected: {
    paddingLeft: 8,
    paddingRight: 0,
    borderRadius: "0 20px 0 0",
    height: 50,
    borderLeft: `8px solid ${primaryColor}`,
    marginBottom: 10,
    backgroundColor: lightPrimaryColor,
    color: primaryColor,
    "& svg": {
      fill: primaryColor,
      marginLeft: 12,
    },
    "& h5": {
      fontSize: 16,
    },
  },
  nested: {
    height: 40,
    color: darkGrayColor,
    paddingLeft: theme.spacing(8),
    "&:hover": {
      borderRadius: "0px 20px 20px 0px",
    },
  },
  nestedList: {
    backgroundColor: lightGrayColor,
  },
  nestedList__selected: {
    height: 40,
    paddingLeft: theme.spacing(8),
    backgroundColor: lightSilverColor,
    color: primaryColor,
    borderRadius: "0px 20px 20px 0px",
  },
}));
