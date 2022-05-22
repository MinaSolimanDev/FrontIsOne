import React from "react";
import {
  ClickAwayListener,
  Zoom,
  Paper,
  makeStyles,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import logoImg from "../../../assets/imgs/user.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  blackColor,
  darkGrayColor,
  lightGrayColor,
  primaryColor,
} from "../../../assets/layout";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  popover: {
    position: "absolute",
    top: 80,
    right: 110,
    width: 436,
    height: 280,
    zIndex: 9999,
    padding: "15px",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  popover__profile: {
    height: 110,
    width: "100%",
    borderBottom: `1px solid ${darkGrayColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  popover__user: {
    display: "flex",
    alignItems: "center",
    width: "70%",
  },
  avatar: {
    width: 64,
    height: 64,
    marginRight: 20,
    border: `3px solid ${primaryColor}`,

    "& img": {
      borderRadius: "50%",
    },
  },
  name: {
    fontSize: 16,
    lineHeight: "25.6px",
    fontWeight: 700,
    color: "#433D3D",
  },
  role: {
    fontSize: 16,
    lineHeight: "25.6px",
    fontWeight: 400,
    color: "#979797",
  },
  logout: {
    fontSize: 12,
    lineHeight: "25.6px",
    color: "#979797",
  },
  popover__signout: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#F4F4F4",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
      width: 25,
      height: 25,
      color: darkGrayColor,
    },
  },
  popover__listTitle: {
    fontSize: 16,
    color: blackColor,
    "& span": {
      fontWeight: 700,
      color: "#433D3D",
    },
  },
  popover__listItem: {
    height: 30,
    fontSize: 16,
    color: "#979797",

    "&:hover": {
      color: primaryColor,
    },
  },
}));

const AvatarMenu = ({ handleClose, changePw, history }) => {
  const classes = useStyles();

  const renderMenu = () => (
    <ClickAwayListener onClickAway={() => handleClose()}>
      <Zoom in>
        <Paper elevation={3} className={classes.popover}>
          <div className={classes.popover__profile}>
            <div className={classes.popover__user}>
              <Avatar src={logoImg} className={classes.avatar} />

              <div>
                <Typography variant="subtitle1" className={classes.name}>
                  Gregorio Aturo
                </Typography>
                <Typography variant="subtitle1" className={classes.role}>
                  Officer Supervisor
                </Typography>
              </div>
            </div>
            <div onClick={() => history.push("/auth/login")}>
              <div className={classes.popover__signout} >
                <ExitToAppIcon />
              </div>

              <Typography variant="subtitle1" className={classes.logout}>
                Logout
              </Typography>
            </div>
          </div>
          <div className={classes.popover__list}>
            <List>
              <ListItem className={classes.popover__listTitle}>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button className={classes.popover__listItem}>
                <ListItemText primary="Account Information" />
              </ListItem>
              <ListItem
                button
                className={classes.popover__listItem}
                onClick={changePw}
              >
                <ListItemText primary="Change your Password" />
              </ListItem>
              <ListItem button className={classes.popover__listItem}>
                <ListItemText primary="Help" />
              </ListItem>
            </List>
          </div>
        </Paper>
      </Zoom>
    </ClickAwayListener>
  );

  return <>{renderMenu()}</>;
};

export default withRouter(AvatarMenu);
