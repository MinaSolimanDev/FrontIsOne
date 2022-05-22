import React, { useState } from "react";
import { connect } from "react-redux";
// @Material-UI
import { Toolbar, AppBar, Avatar, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
// Assets
import userImg from "../../assets/imgs/user.png";
import Search from "./Search";
import NotificationBell from "../icons/NotificationIcon";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Styles
import { useStyles } from "./headerStyles";
import AvatarMenu from "./menus/AvatarMenu";
import NotificationMenu from "./menus/NotificationMenu";
import ChangePw from "./menus/ChangePw";
import LocationMenu from "./menus/LocationMenu";

const Header = () => {
  const classes = useStyles();
  const [query, setQuery] = useState();
  const [branch, setBranch] = useState("WASHINGTON SUPERMART-WAREHOUSE");
  // state of the 3 menus (avatar, notifications, current branch)
  const [open, setOpen] = useState({});
  const [pwChange, setpwChange] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <div className={classes.header__search}>
            <Search handleSearch={setQuery} />
          </div>

          <div className={classes.header__controls}>
            <Avatar
              className={classes.avatar}
              alt="user profile"
              src={userImg}
              onClick={() => setOpen({ avatar: true })}
            />

            {/* Avatar Menu */}
            {open.avatar && (
              <AvatarMenu
                changePw={() => setpwChange(true)}
                handleClose={() => setOpen({ ...open, avatar: false })}
              />
            )}
            {/* Change PW */}
            {pwChange && <ChangePw handleClose={() => setpwChange(false)} />}

            <div
              className={classes.bell}
              onClick={() => setOpen({ notify: true })}
            >
              <NotificationBell />

              <span></span>
            </div>

            {/* Notification Menu */}
            {open.notify && (
              <NotificationMenu
                handleClose={() => setOpen({ ...open, notify: false })}
              />
            )}

            <div
              className={classes.location}
              onClick={() => setOpen({ branch: true })}
            >
              <LocationOnIcon />

              <Typography variant="subtitle1">{branch}</Typography>

              <IconButton aria-label="location">
                <ExpandMoreIcon />
              </IconButton>
            </div>

            {/* Location Menu */}
            {open.branch && (
              <LocationMenu
                setBranch={setBranch}
                handleClose={() => setOpen({ ...open, branch: false })}
              />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, {})(Header);
