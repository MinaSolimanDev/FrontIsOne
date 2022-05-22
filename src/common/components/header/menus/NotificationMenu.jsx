import React from "react";
import {
  ClickAwayListener,
  Zoom,
  Paper,
  makeStyles,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
// icons
import ErrorIcon from "@material-ui/icons/Error";
import BagIcon from "@material-ui/icons/ShoppingBasket";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
// Colors
import {
  darkGrayColor,
  lightGrayColor,
  primaryColor,
} from "../../../assets/layout";

const useStyles = makeStyles((theme) => ({
  popover: {
    position: "absolute",
    top: 80,
    right: 60,
    width: 436,
    height: 344,
    zIndex: 9999,
    padding: "15px 0",
    justifyContent: "center",
    boxSizing: "border-box",
    // overflow: "scroll",
    // overflowX: "hidden",
    borderRadius: 8,
    // boxShadow: "0px 12px 26px rgba(137, 137, 138, 0.06)",
  },
  popover__profile: {
    height: 70,
    width: "100%",
    borderBottom: `1px solid ${darkGrayColor}`,
    display: "flex",
    alignItems: "center",

    "& h6": {
      fontSize: 16,
      fontWeight: 700,
      padding: 20,
    },
  },
  popover__list: {
    // padding: 20,
  },
  popover__listItem: {
    height: 64,
    borderBottom: `1px solid rgba( 59.2, 59.2, 59.2, 50% )`,
    padding: 10,
    "& svg": {
      padding: 3,
      border: `1px solid ${primaryColor}`,
      borderRadius: "50%",
      fill: primaryColor,
      color: primaryColor,
      marginRight: 10,
    },
  },
  alertName: {
    fontSize: 12,
    lineHeight: "20px",
    color: "#979797",
  },
  alertDetails: {
    fontSize: 12,
    color: "#4E4E4E",
  },
}));

const AvatarMenu = ({ handleClose }) => {
  const classes = useStyles();

  const fakeNotifications = [
    {
      icon: <BagIcon />,
      title: "YOUR SALES ALERT",
      details: "Amazing discounts and exclusive offers on Feb 26 and 27",
    },
    {
      icon: <WalletIcon />,
      title: "PERFORMANCE INCENTIVE ALERT",
      details:
        "Please check your E-Wallet, your performance incentive is been added for Sept. 2020 to Jan. 2021",
    },
    {
      icon: <ErrorIcon />,
      title: "PURCHASE ORDER ALERT",
      details: "Product Code IS_12323 is out of stock.",
    },
  ];

  const renderMenu = () => (
    <ClickAwayListener onClickAway={() => handleClose()}>
      <Zoom in>
        <Paper elevation={3} className={classes.popover}>
          <div className={classes.popover__profile}>
            <Typography variant="subtitle1">Notifications</Typography>
          </div>

          <div className={classes.popover__list}>
            <List>
              {fakeNotifications.map((item, key) => (
                <ListItem button className={classes.popover__listItem}>
                  {item.icon}
                  <div>
                    <Typography
                      varinat="subtitle1"
                      className={classes.alertName}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      varinat="subtitle1"
                      className={classes.alertDetails}
                    >
                      {item.details}
                    </Typography>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </Paper>
      </Zoom>
    </ClickAwayListener>
  );

  return <>{renderMenu()}</>;
};

export default AvatarMenu;
