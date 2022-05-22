import { makeStyles } from "@material-ui/core/styles";
import {
  blackColor,
  subTextColorLight,
  primaryColor,
  redColor,
  textColor,
  hrColor,
  whiteColor,
} from "../../../../common/assets/layout";

const dashboard__state = {
  display: "relative",
  backgroundColor: whiteColor,
  boxShadow: "0 0 14px 0 rgba(53,64,82,.05)",
  borderRadius: 4,
};
const dashboard__state__title__disc = {
  float: "right",
  color: subTextColorLight,
  fontSize: "12px",
  lineHeight: "20px",
  fontWeight: 400,
};
const dashboard__state__title__main = {
  float: "left",
  color: blackColor,
  fontSize: "16px",
  lineHeight: "26px",
};
const dashboard__button = {
  fontWeight: 500,
  fontSize: "12px",
  minWidth: 225,
  height: 50,
  textTransform: "capitalize",
  borderRadius: 10,
};

export const useStyles = makeStyles((theme) => ({
  dashboard: {
    width: "100%",
    height: "100%",
    minHeight: 500,
    marginTop: "45px",
  },
  dashboard__header: {
    width: "100%",
    display: "flex",
  },
  dashboard__title: {
    flexGrow: 1,
  },
  dashboard__title__main: {
    fontSize: "27px",
    lineHeight: "43.2px",
    marginBottom: 13,
    color: primaryColor,
    fontWeight: 600,
  },
  dashboard__title__time: {
    fontSize: "16px",
    lineHeight: "25.6px",
    marginBottom: 15,
    color: textColor,
    fontWeight: 400,
  },
  dashboard__button__manage: {
    ...dashboard__button,
    color: redColor,
    marginRight: 16,
    "&:hover": {
      color: redColor,
    },
    "&.MuiButton-outlined": {
      border: `1px solid #d93333`,
    },
  },
  dashboard__button__create: {
    ...dashboard__button,
    backgroundColor: primaryColor,
    color: whiteColor,
    "&:hover": {
      backgroundColor: redColor,
      color: whiteColor,
    },
  },
  hr: {
    border: `1px solid ${hrColor}`,
    height: 0.1,
    marginTop: 19,
    width: "100%",
  },
  dashboard__stats: {
    width: "100%",
    margin: "15px auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  dashboard__state__list__title: {
    padding: "29px 30px 19px 30px",
  },
  dashboard__state__chart__title: {
    paddingBottom: "30px",
  },
  dashboard__state__title__main__chart: {
    ...dashboard__state__title__main,
    fontWeight: 400,
  },
  dashboard__state__title__main__list: {
    ...dashboard__state__title__main,
    fontWeight: 500,
  },
  dashboard__state__title__disc__chart: {
    ...dashboard__state__title__disc,
  },
  dashboard__state__title__disc__list: {
    ...dashboard__state__title__disc,
  },
  dashboard__state__chart: {
    width: "60%",
    height: 330,
    padding: 25,
    ...dashboard__state,
  },
  dashboard__state__list: {
    width: "35%",
    height: 500,
    marginBottom: 15,
    ...dashboard__state,
  },
  dashboard__stats__chart__graph: {
    width: "100%",
    height: "100%",
    marginTop: "30px",
  },
  dashboard__state__list__items: {
    display: "flex",
    height: "50px",
    marginTop: 20,
  },
  dashboard__state__list__items__image: {
    borderRadius: "50%",
    height: 40,
    width: 40,
  },
  dashboard__state__list__items__title: {
    flex: 2,
    textAlign: "center",
    color: "#979797",
    lineHeight: "26px",
    fontSize: "12px",
  },
  dashboard__state__list__items__percent: {
    flex: 1,
    textAlign: "center",
    fontWeight: 500,
    lineHeight: "26px",
    fontSize: "16px",
  },
}));
