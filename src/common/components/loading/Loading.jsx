import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Cart from "../../assets/imgs/loading.gif";
import { lightGrayColor, primaryColor } from "../../assets/layout";

const useStyles = makeStyles(() => ({
  loading: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightGrayColor,
  },
  loading__title: {
    fontSize: 36,
    fontWeight: 700,
    color: primaryColor,
  },
  loading__img: {
    width: 165,
    position: "relative",
    top: -10,
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <div>
        <Typography
          varinat="h3"
          align="center"
          className={classes.loading__title}
        >
          ISONE
        </Typography>
        <img src={Cart} alt="loading" className={classes.loading__img} />
      </div>
    </div>
  );
};

export default Loading;
