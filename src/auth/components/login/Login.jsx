import React, { useState } from "react";
import { compose } from "recompose";
import { Field, reduxForm } from "redux-form";
import { Typography, Button, TextField } from "@material-ui/core";
// icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// assets
import { validate } from "../../../common/helpers/validate";
// Styles
import { useStyles } from "./loginStyles";

const RenderInputField = ({
  meta: { touched, invalid, error },
  input,
  name,
  type,
  disabled,
  placeholder,
  eye,
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
          startAdornment:
            type === "password" || (type === "text" && eye) ? (
              <LockIcon />
            ) : (
              <AccountCircle />
            ),
          endAdornment:
            // show lock icon if the type is password or TEXT but in this case the input is originally password but under view mode is text
            eye &&
            (visiblePW ? (
              <VisibilityIcon
                className={classes.login__eye}
                onClick={() => setVisiblePW(false)}
              />
            ) : (
              <VisibilityOffIcon
                className={classes.login__eye}
                onClick={() => setVisiblePW(true)}
              />
            )),
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
      <span className={`helperText_error ${classes.login__helper_text_error}`}>
        {touched && error}
      </span>
    </>
  );
};

const Login = ({ handleSubmit }) => {
  const [visiblePW, setVisiblePW] = useState(false);
  const classes = useStyles();

  const submit = (values) => {
    console.log(values);
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__inner}>
        <div className={classes.login__typography}>
          <Typography variant="h3" className={classes.login__title}>
            ISONE
          </Typography>
          <Typography variant="h6" className={classes.login__subtitle}>
            Providing the simplest solution for the most complex problem.
          </Typography>
        </div>

        <div className={classes.login__box}>
          <form
            onSubmit={handleSubmit((values) => submit(values))}
            className={classes.login__form}
          >
            <Field
              placeholder="username"
              name="username"
              type="text"
              component={RenderInputField}
            />
            <Field
              placeholder="password"
              name="password"
              type={visiblePW ? "text" : "password"}
              eye
              visiblePW={visiblePW}
              setVisiblePW={setVisiblePW}
              component={RenderInputField}
            />

            <Button
              type="submit"
              variant="contained"
              className={classes.login__button}
            >
              Log In
            </Button>

            <Typography className={classes.login__forgot} align="center">
              Forgot Password ?
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default compose(reduxForm({ form: "login", validate }))(Login);
