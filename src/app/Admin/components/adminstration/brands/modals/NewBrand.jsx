import React from "react";
import { compose } from 'recompose';
import { connect } from 'react-redux';
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
import { createSWA } from '../../../../state/actions';
// Styles
import { useStyles } from '../../../../../../common/assets/jss/components/adminstration';

function ChangePW({ handleSubmit, handleClose, createSWA }) {
  const classes1 = useStyles();

  const submit = (values) => {
    createSWA("success", {
      title: "Brand Entry Added",
      message: "You’ve sucessfully added the Brand",
      time: 2000
    })

    console.log(values);

    handleClose()
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
              <Typography variant="h5">Create New Brand</Typography>
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
              name="code"
              type="text"
              placeholder="Code"
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

export default compose(
  reduxForm({ form: "newBrand", destroyOnUnmount: false }),
  connect(null, { createSWA })
)(ChangePW);
