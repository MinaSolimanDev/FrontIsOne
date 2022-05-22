import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "../header/Header";
import SideMenu from "../sidemenu/Sidemenu";

const NavBars = ({ user }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const handleClose = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Header openSideMenu={toggle} />

      <SideMenu open={open} handleClose={handleClose} user={user} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
};
export default connect(mapStateToProps)(NavBars);
