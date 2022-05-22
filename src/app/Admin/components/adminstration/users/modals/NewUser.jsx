import React, { useState, useRef } from "react";
import { Field, reduxForm } from "redux-form";
// @Material-UI
import { Divider, IconButton, TextField, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
// Icons
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
// Assets
import IsOneCustomInput from '../../../../../../common/components/fields/IsOneCustomInput';
// Styles
import { useStyles } from './modalsStyles'

function NewUser({ handleSubmit, handleClose }) {
  const classes = useStyles();
  const [img, setImage] = useState({});
  const inputEl = useRef(null);

  const submit = (values) => {
    console.log(values);
  };

  const handleClick = () => {
    inputEl.current.click();
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({ file: file, imagePreviewUrl: reader.result });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.modal}>
      <Dialog
        fullWidth
        maxWidth="lg"
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
            <div>
              <Typography variant="h5">Create New User</Typography>
            </div>
          </div>

          <form
            onSubmit={handleSubmit((values) => submit(values))}
            className={classes.form}
          >
            <div className={classes.modal__upload}>
              <div className={classes.modal__img}>
                {img.imagePreviewUrl && (
                  <img src={img.imagePreviewUrl} alt="upload profile" />
                )}
              </div>
              <Button
                variant="contained"
                className={classes.modal__uploadBtn}
                startIcon={<CameraAltIcon />}
                onClick={handleClick}
              >
                Upload
              </Button>

              <TextField
                type="file"
                inputProps={{
                  accept: "image/jpeg,image/jpg,image/png",
                }}
                inputRef={inputEl}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
            <div className={classes.modal__inputs}>
              <Field
                name="employee_id"
                type="text"
                placeholder="Employee ID"
                customWidth={268}
                component={IsOneCustomInput}
              />

              <Field
                name="username"
                type="text"
                placeholder="@Username"
                customWidth={268}
                component={IsOneCustomInput}
              />

              <Field
                name="first_name"
                type="text"
                placeholder="First Name"
                customWidth={268}
                component={IsOneCustomInput}
              />

              <Field
                name="middle_name"
                type="text"
                placeholder="Middle Name"
                customWidth={268}
                component={IsOneCustomInput}
              />

              <Field
                name="last_name"
                type="text"
                placeholder="Last Name"
                customWidth={268}
                component={IsOneCustomInput}
              />

              <div
                className={classes.modal__divider}
                style={{ width: "100%", marginBottom: 30 }}
              >
                <Divider />
              </div>

              <div style={{ width: "100%", display: "flex" }}>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  width={268}
                  component={IsOneCustomInput}
                />
              </div>

              <div className={classes.modal__formActions}>
                <Button
                  startIcon={<CheckIcon />}
                  variant="contained"
                  className={classes.submit}
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default reduxForm({
  form: "newUser",
  //   validate,
  destroyOnUnmount: false,
})(NewUser);
