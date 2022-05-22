import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { darkGrayColor, primaryColor } from "../../assets/layout";

const useStyles = makeStyles((theme) => ({
  search: {
    "&.MuiTextField-root": {
      width: 320,
      height: 45,
      margin: "auto",
      fontSize: 12,
      borderRadius: 25,
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: 25,
      height: "100%",
      color: darkGrayColor,
      "&.Mui-focused fieldset": {
        borderColor: primaryColor,
      },
    },
    // style icons
    "& svg": {
      color: darkGrayColor,
      margin: "0 15px",
    },
  },
}));

const Search = ({ handleSearch }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.search}
      variant="outlined"
      placeholder="Search.."
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
