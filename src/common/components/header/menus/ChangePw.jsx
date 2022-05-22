import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { validate } from "../../../helpers/validate";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import { Field, reduxForm } from "redux-form";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {
  darkGrayColor,
  greenColor,
  primaryColor,
  redColor,
  whiteColor,
} from "../../../assets/layout";

const MuiTextField = {
  width: 384,
  height: 64,
  margin: "auto",
  marginBottom: 30,
  fontSize: 16,
  borderRadius: 10,
};

const useStyles = makeStyles((theme) => ({
  modal: {
    "&.MuiDialog-paper": {
      borderRadius: 20,
      width: 600,
      height: 550,
      //   boxSizing: "border-box",
    },
    backgroundColor: whiteColor,
  },
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
  form: {
    textAlign: "center",
  },
  modal__header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,

    "& h5": {
      fontSize: 24,
      lineHeight: "38.4px",
      color: primaryColor,
    },
    "& h6": {
      fontSize: 16,
      color: "#979797",
    },
  },
  modal__lockIcon: {
    margin: 20,
    width: 40,
    height: 40,
    borderRadius: "50%",
    color: whiteColor,
    backgroundColor: primaryColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal__formActions: {
    marginTop: 30,
    textAlign: "right",
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
    width: 114,
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

const RenderInputField = ({
  meta: { touched, invalid, error },
  input,
  name,
  type,
  disabled,
  placeholder,
  element,
  visiblePW,
  setVisiblePW,
}) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          startAdornment: <LockIcon />,
          endAdornment: visiblePW[`${element}`] ? (
            <VisibilityIcon
              className={classes.login__eye}
              onClick={() =>
                setVisiblePW({ ...visiblePW, [`${element}`]: false })
              }
            />
          ) : (
            <VisibilityOffIcon
              className={classes.login__eye}
              onClick={() =>
                setVisiblePW({ ...visiblePW, [`${element}`]: true })
              }
            />
          ),
        }}
        disabled={disabled}
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

function ChangePW({ handleSubmit, handleClose }) {
  const classes = useStyles();
  const [visiblePW, setVisiblePW] = React.useState({});

  const submit = (values) => {
    console.log(values);
  };

  return (
    <div className={classes.modal}>
      <Dialog
        fullWidth
        maxWidth="sm"
        open
        onClose={handleClose}
        classes={{ paper: classes.modal }}
      >
        <DialogContent>
          <div className={classes.modal__header}>
            <div className={classes.modal__lockIcon}>
              <VpnKeyIcon />
            </div>
            <div>
              <Typography variant="h5">Change Password</Typography>
              <Typography variant="subtitle1">
                User will notifiy with the new password changed
              </Typography>
            </div>
          </div>
          <form
            onSubmit={handleSubmit((values) => submit(values))}
            className={classes.form}
          >
            <Field
              name="password"
              type={visiblePW.password ? "text" : "password"}
              placeholder="old password"
              component={RenderInputField}
              element="password"
              visiblePW={visiblePW}
              setVisiblePW={setVisiblePW}
            />
            <Field
              name="new_password"
              type={visiblePW.new_password ? "text" : "password"}
              placeholder="New password"
              component={RenderInputField}
              element="new_password"
              visiblePW={visiblePW}
              setVisiblePW={setVisiblePW}
            />
            <Field
              name="confirm_password"
              type={visiblePW.confirm_password ? "text" : "password"}
              element="confirm_password"
              placeholder="Confirm password"
              component={RenderInputField}
              visiblePW={visiblePW}
              setVisiblePW={setVisiblePW}
            />

            <div className={classes.modal__formActions}>
              <Button
                variant="outlined"
                onClick={handleClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className={classes.submit}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default reduxForm({
  form: "change pw",
  validate,
  destroyOnUnmount: false,
})(ChangePW);
