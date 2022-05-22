import React from "react";
import { Field, reduxForm } from "redux-form";
// @Material-UI
import { Divider, IconButton, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
// Icons
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
// Assets
import IsOneCustomInput from '../../../../../../common/components/fields/IsOneCustomInput';
// Styles
import { useStyles } from '../../../../../../common/assets/jss/components/adminstration';
import { primaryColor } from '../../../../../../common/assets/layout';

function ChangePW({ handleSubmit, handleClose }) {
  const classes1 = useStyles();

  const submit = (values) => {
    console.log(values);
  };

  return (
    <div className={classes1.modal}>
      <Dialog
        fullWidth
        maxWidth="sm"
        open
        onClose={handleClose}
        classes={{ paper: classes1.modal }}
      >
        <DialogContent>
          {/* Close Icon */}
          <IconButton onClick={handleClose} className={classes1.modal__close}>
            <CloseIcon />
          </IconButton>
          <div className={classes1.modal__header}>
            <div>
              <Typography style={{ fontSize: 20, lineHeight: "32px", color: primaryColor, fontWeight: "normal" }}>Create New Principal</Typography>
            </div>
          </div>

          <div className={classes1.modal__divider}>
            <Divider />
          </div>

          <form
            onSubmit={handleSubmit((values) => submit(values))}
            className={classes1.form}
          >
            <Field
              name="name"
              type="text"
              placeholder="Name"
              component={IsOneCustomInput}
              element="password"
            />
            <Field
              name="description"
              type="text"
              placeholder="Description"
              component={IsOneCustomInput}
              element="new_password"
            />

            <div className={classes1.modal__formActions}>
              <Button
                startIcon={<CheckIcon />}
                variant="contained"
                className={classes1.submit}
                type="submit"
              >
                Save
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
  //   validate,
  destroyOnUnmount: false,
})(ChangePW);
