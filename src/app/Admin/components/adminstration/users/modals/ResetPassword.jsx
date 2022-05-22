import React from "react";
import { Field, reduxForm } from "redux-form";
// @Material-UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
// Icons
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CloseIcon from "@material-ui/icons/Close";
// Assets
import { validate } from "../../../../../../common/helpers/validate";
import {
  darkGrayColor,
  greenColor,
  primaryColor,
  redColor,
  whiteColor,
} from "../../../../../../common/assets/layout";

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
      height: 380,
      padding: 25,
      position: 'relative'
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
  submit: {
    width: 384,
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
  modal__close: {
    position: "absolute",
    top: 16,
    right: 28,
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
        {/* Close Icon */}
          <IconButton onClick={handleClose} className={classes.modal__close}>
            <CloseIcon />
          </IconButton>
          <div className={classes.modal__header}>
            <div className={classes.modal__lockIcon}>
              <VpnKeyIcon />
            </div>
            <div>
              <Typography variant="h5">Reset Password</Typography>
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
              placeholder="password"
              component={RenderInputField}
              element="password"
              visiblePW={visiblePW}
              setVisiblePW={setVisiblePW}
            />
            <div>
              
              <Button
                variant="contained"
                className={classes.submit}
                type="submit"
                fullWidth
              >
                Reset Password
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default reduxForm({
  form: "resetUserPw",
  validate,
  destroyOnUnmount: false,
})(ChangePW);
