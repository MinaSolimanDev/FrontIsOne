import {
  primaryColor,
  whiteColor,
  lightSilverColor,
  darkGrayColor,
  redColor,
  blackColor,
  subTextColorLight,
} from "../../../../../../common/assets/layout";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles2 = makeStyles(() => ({
  categoryEdit: {
    width: "100%",
  },
  root: {
    border: "none",
    width: 300,
    height: 59,
    fontSize: 16,
    paddingLeft: 10,
    backgroundColor: "transparent",
    "&:focus": {
      outline: "none",
    },
  },
  categoryEdit__header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
  },
  categoryEdit__header_title: {
    color: primaryColor,
    fontSize: 24,
    borderLeft: "10px solid",
    paddingLeft: 10,
  },
  edit__container: {
    backgroundColor: whiteColor,
    minHeight: 200,
    borderRadius: 10,
    padding: 25,
    transition: ".5s",
  },
  edit__container__inner: {
    maxWidth: 1150,
    display: "flex",
    // justifyContent: 'space-between',
    backgroundColor: whiteColor,
    minHeight: 400,
    borderRadius: 10,

    "& .MuiTreeItem-group": {
      marginLeft: 35,
      borderLeft: `2px solid #F1F3F4`,
    },
    // justifyContent: 'center'
  },
  nested: {
    borderLeft: `2px solid #F1F3F4`,
    marginLeft: 30,
  },
  edit__arrow: {
    paddingLeft: 8,

    "& svg": {
      color: darkGrayColor,
    },

    "& .MuiTreeItem-content": {
      position: "relative",
    },
    "& .MuiTreeItem-iconContainer": {
      paddingRight: 45,
      paddingLeft: 30,
      height: 50,
      position: "absolute",
      left: 16,
      zIndex: 99,
      display: "flex",
      alignItems: "center",

      "& svg": {
        fontSize: 26,
      },
    },
    "& .MuiTreeItem-label": {
      backgroundColor: "transparent !important",

      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  edit__input: {
    position: "relative",
    padding: "0 10px",
    // overflow: 'hidden',
    // width: 505,
    height: 59,
    backgroundColor: lightSilverColor,
    borderRadius: "10px 20px 20px 10px",
    display: "flex",
    alignItems: "center",
    border: `1px solid ${darkGrayColor}`,
    margin: 10,
  },
  edit__input_controlls: {
    position: "absolute",
    right: -130,
    display: "flex",
    "& svg": {
      cursor: "pointer !important",
    },
    "& .MuiTooltip-tooltip": {
      backgroundColor: primaryColor,
    },
    "& div": {
      width: 34,
      height: 33,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `1px solid ${darkGrayColor}`,
      marginRight: 10,
      "&:hover": {
        width: 44,
        height: 43,
        backgroundColor: primaryColor,
        "& svg": {
          color: `${whiteColor} `,
        },
      },
    },
  },
  edit__icon: {
    height: "100%",
    width: 50,
    position: "absolute",
    justifyContent: "center",
    right: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end",
    borderLeft: "1px solid",
    color: darkGrayColor,
    "&:hover": {
      borderRadius: "0 20px 20px 0",
      backgroundColor: primaryColor,
      "& svg": {
        color: whiteColor,
      },
    },
  },
  cancel: {
    width: 114,
    height: 39,
    borderRadius: 10,
    margin: 10,
    color: darkGrayColor,
    textTransform: "capitalize",
  },
  submit: {
    width: 144,
    height: 39,
    textTransform: "capitalize",
    backgroundColor: primaryColor,
    color: whiteColor,
    margin: 10,
    borderRadius: 10,
    "&:hover": {
      backgroundColor: redColor,
    },
  },
  hint: {
    position: "relative",
    backgroundColor: "#F1F3F4",
    color: darkGrayColor,
    borderRadius: 10,
    padding: 10,
    margin: "20px auto",
  },
  hint__icon: {
    position: "absolute",
    top: 8,
    right: 20,
    fontSize: 18,
    cursor: "pointer",
  },
  hint__title: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,

    "& span": {
      color: blackColor,
    },

    "& svg": {
      margin: "0 10px",
    },
  },
  hint__body: {
    paddingLeft: 44,
  },
  cat__add: {
    color: subTextColorLight,
    fontWeight: 700,
    minWidth: 190,
    height: 48,
    borderRadius: 10,
    margin: "0 75px",
    textTransform: "capitalize",
    border: `2px solid ${subTextColorLight}`,
    transition: ".3s",
    "&:hover": {
      color: whiteColor,
      backgroundColor: primaryColor,
      "& svg": {
        color: whiteColor,
      },
    },
  },
}));
