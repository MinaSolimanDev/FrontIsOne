import React, { useState } from "react";
import { connect } from 'react-redux'
import { closeSWA } from '../../../app/Admin/state/actions';
import { makeStyles } from "@material-ui/core/styles";
import { ClickAwayListener, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteIcon from "../../assets/imgs/success.gif";
import { greenColor, whiteColor } from "../../assets/layout";

const useStyles = makeStyles(() => ({
  modal: {
    "&.MuiDialog-paper": {
      borderRadius: 20,
      width: 419,
      height: 291,
      position: "relative",
      textAlign: "center",
      //   boxSizing: "border-box",
    },
    backgroundColor: whiteColor,
  },
  modal__head: {
    marginBottom: 10,

    "& img": {
      width: 110,
      height: 110
    }
  },
  modal__title: {
    color: greenColor,
    fontSize: 24,
    lineHeight: "38.4px",
    marginBottom: 16,
  },
  modal__message: {
    color: "#979797",
    fontSize: 16,
    padding: '0 25px'
  },
  modal__formActions: {
    marginTop: 30,
    // textAlign: "right",
  },
}));

function AnimatedSuccessModal({ SWA, closeSWA }) {
  const classes = useStyles();

  // self close after 5 seconds
  SWA.open && setTimeout(() => closeSWA(), SWA.time)

  return (
    <ClickAwayListener onClickAway={closeSWA}>
      <div className={classes.modal}>
        <Dialog open={SWA.open || false} fullWidth maxWidth="sm" onClose={closeSWA} classes={{ paper: classes.modal }}>
          <DialogContent>
            <div className={classes.modal__head}>
              <img src={DeleteIcon} alt="success" />
            </div>

            <Typography
              align="center"
              className={classes.modal__title}
              variant="h5"
            >
              {SWA.title}
            </Typography>

            <Typography
              align="center"
              className={classes.modal__message}
              variant="subtitle1"
            >
              {SWA.message}
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    </ClickAwayListener>
  );
}

const mapStateToProps = ({ SWA }) => ({ SWA })

export default connect(mapStateToProps, { closeSWA })(AnimatedSuccessModal);
