import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { greenColor, darkGrayColor, primaryColor, redColor } from "../../assets/layout";

const Styles = (width) => {
  const MuiTextField = {
    width,
    height: 47,
    marginBottom: 30,
    fontSize: 16,
    borderRadius: 10,
  };

  const useStyles = makeStyles((theme) => ({
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
    login__input_success: {
      "&.MuiTextField-root": {
        ...MuiTextField,
        background: "rgba(221, 243, 223, 0.5)",
      },

      "& .MuiOutlinedInput-root": {
        borderRadius: 10,
        height: "100%",
        color: greenColor,
        border: `2px solid ${greenColor}`,
        "&.Mui-focused fieldset": {
          border: "none",
        },

        "& fieldset": {
          border: "none",
        },
      },
      // style icons
      "& svg": {
        color: greenColor,
        margin: "0 15px",
      },
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
  }));

  return useStyles();
};

const IsOneCustomInput = ({
  meta: { touched, invalid, error },
input,
  name,
  type,
  placeholder,
  customWidth = 413,
}) => {
  const classes = Styles(customWidth);

  return (
    <>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        required
        className={
          touched && error ? classes.login__input_error : classes.login__input
        }
        name={name}
        type={type}
        error={touched && invalid}
        {...input}
      />
      <div className={`helperText_error ${classes.login__helper_text_error}`}>
        {touched && error}
      </div>
    </>
  );
};

export default IsOneCustomInput;
