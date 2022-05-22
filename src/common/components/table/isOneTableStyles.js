import { makeStyles } from "@material-ui/core";
import {
  primaryColor,
  whiteColor,
  redColor,
  darkGrayColor,
  lightPrimaryColor,
  lightSilverColor,
  subTextColorHeavy,
} from "../../assets/layout";

export const useStyles = makeStyles((theme) => ({
  //   *=======> Table <=======*
  table__container: {
    boxSizing: "border-box",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    padding: "0 20px",
    paddingBottom: 20,
    "& .MuiButtonBase-root ": {
      padding: 0,
    },
    "& td,th": {
      borderBottom: "none",
    },
    "& tbody": {
      borderRadius: 20,
    },
  },
  table: {},
  table__controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px auto",
  },
  table__search: {
    width: 275,
    height: 41,
    display: "flex",
    position: "relative",

    // button
    "& button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 41,
      width: 49,
      color: whiteColor,
      position: "absolute",
      right: 0,
      boxShadow: "none",
      backgroundColor: primaryColor,
      "&:hover": {
        backgroundColor: redColor,
        boxShadow: "none",
      },
    },
  },
  table__pagination: {
    display: "flex",
    alignItems: "center",

    "& .MuiPaginationItem-root": {
      width: 33,
      height: 28,
      borderRadius: 5,
      fontSize: 12,
      boxShadow: "1.5px 1.5px 3px #E0E0E0",
      border: "none",
    },

    "& .MuiPaginationItem-outlined": {
      color: subTextColorHeavy,
      backgroundColor: lightSilverColor,
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: primaryColor,
      color: whiteColor,
    },
  },
  table__pagination_select: {
    textTransform: "capitalize",
    height: 28,
    width: 130,
    borderRadius: 5,
    backgroundColor: lightSilverColor,
    boxShadow: "1.5px 1.5px 3px #E0E0E0",
    fontSize: 12,
    color: subTextColorHeavy,
    marginRight: 16,
    marginLeft: 16,

    "& svg": {
      color: subTextColorHeavy,
    },
  },
  table__input: {
    "&.MuiTextField-root": {
      height: 41,
      fontSize: 16,
      borderRadius: 10,
      background: "linear-gradient(0deg, #FBFBFB, #FBFBFB), #525252",
    },

    "& .MuiOutlinedInput-root": {
      height: "100%",
      color: darkGrayColor,
      paddingRight: 60,
      "&.Mui-focused fieldset": {
        borderColor: primaryColor,
      },
    },
  },
  table__head: {
    height: 31,
    fontWeight: 700,
    fontSize: 16,
  },
  table_sortIcon: {
    position: "relative",
    top: 4,
    left: 12,
    cursor: "pointer",
  },
  table__row: {
    cursor: "pointer",
    "&:nth-child(odd)": {
      backgroundColor: "#F4F4F4",
    },
    "&:nth-child(even)": {
      backgroundColor: "#FBFBFB",
    },
    "&:hover": {
      backgroundColor: lightPrimaryColor,
    },
  },
  table__row_hovered: {
    backgroundColor: lightPrimaryColor,
  },
  table__inlineAvatar: {
    display: 'inline-block',
    marginRight: 20
  },
  table__cell_name: {
    display: 'flex', 
    paddingLeft: 150, 
    alignItems: 'center'
  },
  table__actions: {
    display: "flex",
    justifyContent: "center",
    height: 25,
  },
  table__actionIcon: {
    position: "relative",
    top: -8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: "0 10px",
    boxSizing: "border-box",
    border: `1px solid ${darkGrayColor}`,
    borderRadius: "50%",
    width: 40,
    height: 40,
    backgroundColor: whiteColor,
    "& svg": {
      color: "#979797",
    },

    "&:hover": {
      backgroundColor: primaryColor,
      border: `1px solid ${primaryColor}`,

      "& svg": {
        color: whiteColor,
      },
    },
  },
}));
