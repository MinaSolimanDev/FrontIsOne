import { makeStyles } from '@material-ui/core';
import {
    darkGrayColor,
    greenColor,
    lightGrayColor,
    primaryColor,
    redColor,
    whiteColor,
  } from "../../../../../../common/assets/layout";

  export const useStyles = makeStyles((theme) => ({
    modal: {
      "&.MuiDialog-paper": {
        borderRadius: 20,
        width: 850,
        height: 650,
        position: "relative",
        padding: 20,
        paddingBottom: 0,
        //   boxSizing: "border-box",
      },
      backgroundColor: whiteColor,
    },
    form: {
      textAlign: "center",
      display: "flex",
    },
    modal__upload: {
      width: 180,
      margin: "0px 20px",
    },
    modal__img: {
      backgroundColor: lightGrayColor,
      width: 180,
      height: 170,
      marginBottom: 10,
      borderRadius: 8,
      overflow: "hidden",
  
      "& img": {
        width: 180,
      },
    },
    modal__inputs: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 20,
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
      marginTop: 100,
      textAlign: "right",
      width: "100%",
    },
    modal__uploadBtn: {
      width: 180,
      height: 47,
      backgroundColor: whiteColor,
      border: `2px solid ${primaryColor}`,
      color: primaryColor,
      textTransform: "capitalize",
      transition: ".4s",
      boxShadow: "none",
      borderRadius: 8,
  
      "&:hover": {
        backgroundColor: primaryColor,
        color: whiteColor,
      },
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
  }));