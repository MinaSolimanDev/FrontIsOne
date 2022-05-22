import { makeStyles } from "@material-ui/core";
import { darkGrayColor, primaryColor } from "../../assets/layout";

const root = {
  width: 224,
  height: 40,
  margin: "10px 0px",
  "& label.Mui-focused": {
    color: primaryColor,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primaryColor,
    },
    color: darkGrayColor,
    borderRadius: "10px",
  },
  "& .MuiSelect-select:focus": {
    borderRadius: 0,
    backgroundColor: "inherit",
  },
  "& .MuiInputLabel-outlined": {
    zIndex: 1,
    transform: "translate(14px, 12px) scale(1)",
  },
  "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.75)",
    fontWeight: 400,
  },
  "& svg": {
    width: 16,
    height: 16,
    padding: 0,
    position: "absolute",
    right: 12,
    top: 12,
    color: darkGrayColor,
    cursor: "pointer",
  },
};

export const useStyles = makeStyles((theme) => ({
  select__Field_layr: {
    color: primaryColor,
  },
  root: {
    ...root,
  },
  root_layr: {
    ...root,
    backgroundColor: "#f7f8fa",
  },
  header_select_input: {
    color: darkGrayColor,
    marginTop: 0,
  },
  header_select: {
    height: 40,
    fontSize: "0.875rem",
    fontFamily: "Helvetica",
    fontWeight: 500,
    lineHeight: 1.57,
    borderRadius: 10,
  },
}));
