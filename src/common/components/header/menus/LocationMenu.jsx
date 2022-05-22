import React, { useState } from "react";
import {
  ClickAwayListener,
  Zoom,
  Paper,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
// icons
import SearchIcon from "@material-ui/icons/Search";
// Colors
import {
  darkGrayColor,
  primaryColor,
  whiteColor,
} from "../../../assets/layout";
// images
import supm1 from "../../../assets/imgs/branches/spum1.png";
import supm2 from "../../../assets/imgs/branches/spum2.png";
import supm3 from "../../../assets/imgs/branches/spum3.png";
import supm4 from "../../../assets/imgs/branches/spum4.png";
import supm5 from "../../../assets/imgs/branches/spum5.png";
import supm6 from "../../../assets/imgs/branches/spum6.png";

const useStyles = makeStyles((theme) => ({
  popover: {
    position: "absolute",
    top: 80,
    right: 60,
    width: 436,
    minHeight: 600,
    zIndex: 9999,
    padding: "15px 0",
    justifyContent: "center",
    boxSizing: "border-box",
    borderRadius: 8,
    // boxShadow: "0px 12px 26px rgba(137, 137, 138, 0.06)",
  },
  popover__profile: {
    height: 110,
    width: "100%",
    borderBottom: `1px solid ${darkGrayColor}`,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    "& h6": {
      fontSize: 16,
      fontWeight: 700,
      paddingLeft: 40,
      width: "100%",
    },
  },
  search: {
    display: "block",
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    color: darkGrayColor,
    position: "relative",
    top: -10,
    "& svg": {
      marginRight: 15,
      color: darkGrayColor,
    },
      '& label.Mui-focused': {
        color: primaryColor,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: primaryColor,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: primaryColor,
        },
        '&:hover fieldset': {
          borderColor: primaryColor,
        },
        '&.Mui-focused fieldset': {
          borderColor: primaryColor,
        },
      },
  },
  popover__list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: 8,
  },
  branch: {
    width: 174,
    height: 71,
    borderRadius: 8,
    border: `1px solid ${whiteColor}`,
    margin: 5,
    position: "relative",
    backgroundColor: primaryColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".6s",
    cursor: "pointer",
    boxSizing: "border-box",
    textAlign: "center",

    "&:hover": {
      backgroundColor: "transparent",
    },

    "& h6": {
      //   position: "absolute",
      fontSize: 12,
      color: "#F4F4F4",
      padding: 4,
      //   fontWeight: 700,
    },

    "& img": {
      position: "absolute",
      top: 0,
      zIndex: -1,
      width: "100%",
    },
  },
}));

const LocationMenu = ({ handleClose, setBranch }) => {
  const classes = useStyles();
  const [query, setQuery] = useState("");

  const branches = [
    { title: "CENTRAL WAREHOUSE", image: supm1 },
    { title: "ILOILO SUPERMART INC.ATRIUM2", image: supm2 },
    { title: "MOLO PLAZA SUPERMART INC", image: supm4 },
    { title: "JARO SUPERMART", image: supm3 },
    { title: "NEW ILOILO GQ ENTERPRISE INC", image: supm5 },
    { title: "WASHINGTON SUPERMART WAREHOUSE", image: supm6 },
    { title: "CENTRAL WAREHOUSE", image: supm1 },
    { title: "ILOILO SUPERMART INC.ATRIUM2", image: supm2 },
    { title: "MOLO PLAZA SUPERMART INC", image: supm4 },
    { title: "JARO SUPERMART", image: supm3 },
    { title: "NEW ILOILO GQ ENTERPRISE INC", image: supm5 },
    { title: "WASHINGTON SUPERMART WAREHOUSE", image: supm6 },
  ];

  const handleSelect = (branchName) => {
    setBranch(branchName);
    handleClose();
  };

  const renderMenu = () => (
    <ClickAwayListener onClickAway={() => handleClose()}>
      <Zoom in>
        <Paper elevation={3} className={classes.popover}>
          <div className={classes.popover__profile}>
            <Typography variant="subtitle1">Select a Branch</Typography>

            <TextField
              fullWidth
              className={classes.search}
              placeholder="Search.."
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className={classes.popover__list}>
            {/* redner branches based on filter */}
            {branches
              .filter((branch) =>
                branch.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((branch, index) => (
                <div
                  key={index}
                  className={classes.branch}
                  onClick={() => handleSelect(branch.title)}
                >
                  <Typography variant="subtitle1">{branch.title}</Typography>
                  <img src={branch.image} alt="branch" />
                </div>
              ))}
          </div>
        </Paper>
      </Zoom>
    </ClickAwayListener>
  );

  return <>{renderMenu()}</>;
};

export default LocationMenu;
