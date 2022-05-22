import { makeStyles } from "@material-ui/core";
import {
  primaryColor,
  redColor,
  lightSilverColor,
  darkGrayColor,
  whiteColor,
  maxWidth,
} from "../../../../../../common/assets/layout";

const dashboard__button = {
  fontSize: "16px",
  lineHeight: "26px",
  height: 39,
  textTransform: "capitalize",
  borderRadius: 10,
};

export const useStyles = makeStyles((theme) => ({
  entry: {
    width: "100%",
    height: "100%",
    minHeight: 500,
    marginTop: "45px",
  },
  entry__header: {
    width: "95%",
    padding: "0px 20px",
    display: "flex",
    marginBottom: "37px",
  },
  entry__title: {
    flexGrow: 1,
  },
  entry__title__main: {
    fontSize: "24px",
    lineHeight: "38px",
    marginBottom: 13,
    color: primaryColor,
    fontWeight: 600,
    borderLeft: "10px solid",
    paddingLeft: "10px",
  },
  entry__title__back: {
    fontSize: "12px",
    lineHeight: "19px",
    marginBottom: 15,
    color: darkGrayColor,
  },
  dashboard__button__cancel: {
    ...dashboard__button,
    minWidth: 114,
    color: darkGrayColor,
    marginRight: 16,
    "&.MuiButton-outlined": {
      border: `2px solid ${darkGrayColor}`,
    },
  },
  dashboard__button__save: {
    ...dashboard__button,
    minWidth: 144,
    backgroundColor: primaryColor,
    color: whiteColor,
    "&:hover": {
      backgroundColor: redColor,
      color: whiteColor,
    },
  },
  section__inner: {
    // maxWidth: 1054,
    maxWidth: maxWidth,
    margin: "auto",
  },
  section__inner__tabs: {
    paddingBottom: 0,
    backgroundColor: whiteColor,
    minHeight: 600,
    borderRadius: "8px",
  },
}));

export const useTabsStyles = makeStyles(() => ({
  indicator: {
    display: "none",
  },
}));

export const useTabStyles = makeStyles(({ breakpoints }) => {
  return {
    root: ({}) => ({
      opacity: 1,
      minWidth: "220px",
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 400,
      overflow: "initial",
      color: darkGrayColor,
      transition: "0.2s",
      height: 50,
      backgroundColor: lightSilverColor,
      marginRight: "8px",
      borderRadius: "0px 20px 0px 0px",
      "&:before": {
        transition: "0.2s",
      },
      "&:hover": {
        "&:not($selected)": {
          backgroundColor: lightSilverColor,
          borderBottom: `5px solid ${primaryColor}`,
          color: "#000",
        },
      },
    }),
    selected: ({}) => ({
      backgroundColor: whiteColor,
      "&.MuiTab-textColorPrimary.Mui-selected": {
        color: primaryColor,
      },
      borderBottom: `4px solid ${primaryColor}`,
      "& + $root": {
        zIndex: 1,
      },
    }),
    wrapper: {
      zIndex: 2,
      textTransform: "initial",
    },
  };
});
