import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DeleteIcon from "../../assets/imgs/delete.png";
import {
  darkGrayColor,
  primaryColor,
  redColor,
  whiteColor,
} from "../../assets/layout";

const useStyles = makeStyles(() => ({
  modal: {
    "&.MuiDialog-paper": {
      borderRadius: 20,
      width: 419,
      height: 320,
      position: "relative",
      textAlign: "center",
      //   boxSizing: "border-box",
    },
    backgroundColor: whiteColor,
  },
  modal__head: {
    marginBottom: 10,
  },
  modal__title: {
    color: primaryColor,
    fontSize: 24,
    lineHeight: "38.4px",
    marginBottom: 16,
  },
  modal__message: {
    color: "#979797",
    fontSize: 16,
  },
  modal__formActions: {
    marginTop: 30,
    // textAlign: "right",
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
}));

function DeleteBranch({ handleClose, title, message, checkedList, selected, submit }) {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <Dialog fullWidth maxWidth="sm" open onClose={handleClose} classes={{ paper: classes.modal }}>
        <DialogContent>
          <div className={classes.modal__head}>
            <img src={DeleteIcon} alt="delete" />
          </div>

          <Typography
            align="center"
            className={classes.modal__title}
            variant="h5"
          >
            {title}
          </Typography>

          <Typography
            align="center"
            className={classes.modal__message}
            variant="subtitle1"
          >
            {message}
          </Typography>

          <div className={classes.modal__formActions}>
            <Button
              variant="outlined"
              onClick={handleClose}
              className={classes.cancel}
            >
              Cancel
            </Button>
            <Button variant="contained"
              onClick={submit}
              className={classes.submit}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeleteBranch;
