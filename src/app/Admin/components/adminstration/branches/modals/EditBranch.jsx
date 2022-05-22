import React from "react";
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
// @Material-UI
import { FormControlLabel } from "@material-ui/core";
import { Divider, IconButton, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
// Icons
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
// Assets
import StyledCheckbox from "../../../../../../common/components/checkbox/StyledCheckbox";
import IsOneCustomInput from '../../../../../../common/components/fields/IsOneCustomInput';
import { createSWA } from '../../../../state/actions';
// Styles
import { useStyles1 } from './modalsStyles';
import { useStyles } from '../../../../../../common/assets/jss/components/adminstration'

function EditBranch({ handleSubmit, handleClose, createSWA }) {
  const classes = useStyles1();
  const classes1 = useStyles();
  const [state, setState] = React.useState({
    WH: false,
    HO: false,
  });

  const handleChange = (event) => {
    // make sure only one of two is selected
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const submit = (values) => {
    handleClose()

    createSWA("success", {
      title: "Branch Entry Updated",
      message: "You’ve sucessfully updated the branch",
      time: 2000
    })

    const reqData = {
      ...values,
      ...state,
    };
    console.log(reqData);
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
            <div className={classes.modal__checkArea}>
              <FormControlLabel
                control={
                  <StyledCheckbox
                    checked={state.HO}
                    onChange={handleChange}
                    name="HO"
                  />
                }
                label="Head Office?"
              />

              <FormControlLabel
                control={
                  <StyledCheckbox
                    checked={state.WH}
                    onChange={handleChange}
                    name="WH"
                  />
                }
                label="WareHouse?"
              />
            </div>

            <Field
              name="code"
              type="text"
              placeholder="Code"
              component={IsOneCustomInput}
            />
            <Field
              name="short_description"
              type="text"
              placeholder="Short Description"
              component={IsOneCustomInput}
            />

            <Field
              name="description"
              type="text"
              placeholder="Description"
              component={IsOneCustomInput}
            />

            <Field
              name="tin"
              type="text"
              placeholder="TIN"
              component={IsOneCustomInput}
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

export default compose(connect(null, { createSWA }), reduxForm({ form: 'editBranch', destroyOnUnmount: false }))(EditBranch);
