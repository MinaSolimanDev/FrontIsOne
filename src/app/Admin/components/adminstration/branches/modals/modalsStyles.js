import { makeStyles } from "@material-ui/core";
import { whiteColor } from "../../../../../../common/assets/layout";

export const useStyles1 = makeStyles((theme) => ({
  modal: {
    "&.MuiDialog-paper": {
      borderRadius: 20,
      width: 643,
      height: 828,
      position: "relative",
      paddingTop: 25,
      //   boxSizing: "border-box",
    },
    backgroundColor: whiteColor,
  },
  modal__checkArea: {
    display: "flex",
    justifyContent: "space-around",
    width: "90%",
    margin: "0 auto 25px",
  },
}));
