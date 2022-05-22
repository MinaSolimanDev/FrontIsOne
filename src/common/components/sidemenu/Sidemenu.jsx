import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Collapse, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Logo from "../../assets/imgs/logo.png";
import nestedLists from "./nestedLists";
// Icons
import AdminIcon from "../icons/AdminIcon";
import HomeIcon from "../icons/HomeIcon";
import BankIcon from "../icons/BankIcon";
import InvetoryIcon from "../icons/InventoryIcon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// styles
import { useStyles } from "./sidemenuStyles";

const SideMenu = ({ open, handleClose, history, window }) => {
  const classes = useStyles();
  const currentPath = history?.location?.pathname;
  // make sure when the used refresh the page keep the nested list open
  const defaultOpenList = {
    home: currentPath === "/admin/home",
    admins: currentPath.includes("/admin/administration"),
    bank: currentPath.includes("/admin/bank"),
    inventory: currentPath.includes("/admin/inventory"),
    purch: currentPath.includes("/admin/purchasing"),
  };
  const [openlist, setOpenList] = useState(defaultOpenList);
  const isSelected = (path) => (currentPath.includes(path) ? "_selected" : "");
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div>
          <img className={classes.drawer__brand} src={Logo} alt="" />
          <Typography variant="h3" className={classes.drawer__brandTitle}>
            ISONE
          </Typography>
        </div>
      </div>

      <List className={classes.drawer__list}>
        <Link to="/admin/home">
          <ListItem
            button
            onClick={() => setOpenList({})}
            className={classes[`drawer__item${isSelected("/admin/home")}`]}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h5">Home</Typography>
            </ListItemText>
          </ListItem>
        </Link>

        <ListItem
          button
          onClick={() => setOpenList({ admins: !openlist.admins })}
          className={classes[`drawer__item${isSelected("/admin/administration")}`]}
        >
          <ListItemIcon>
            <AdminIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h5">Administration</Typography>
          </ListItemText>

          <ListItemIcon>
            {openlist.admins ? (
              <KeyboardArrowUpIcon className="list_arrow" />
            ) : (
              <KeyboardArrowDownIcon className="list_arrow" />
            )}
          </ListItemIcon>
        </ListItem>

        {/* Admistrators list */}
        <Collapse in={openlist.admins} timeout="auto" unmountOnExit>
          <List component="div" className={classes.nestedList}>
            {nestedLists.admins.map((item, key) => (
              <Link to={item.link} key={key}>
                <ListItem button className={isSelected(item.link) ? classes.nestedList__selected : classes.nested}>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => setOpenList({ bank: !openlist.bank })}
          className={classes[`drawer__item${isSelected("/admin/bank")}`]}
        >
          <ListItemIcon>
            <BankIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h5">Product Bank</Typography>
          </ListItemText>

          <ListItemIcon>
            {openlist.bank ? (
              <KeyboardArrowUpIcon className="list_arrow" />
            ) : (
              <KeyboardArrowDownIcon className="list_arrow" />
            )}
          </ListItemIcon>
        </ListItem>

        {/* bank list */}
        <Collapse in={openlist.bank} timeout="auto" unmountOnExit>
          <List component="div" className={classes.nestedList}>
            <Link to="/bank/product-bank">
              <ListItem button className={isSelected("/bank/product-bank") ? classes.nestedList__selected : classes.nested}>
                <ListItemText primary="Product Bank" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => setOpenList({ inv: !openlist.inv })}
          className={classes[`drawer__item${isSelected("/admin/inventory")}`]}
        >
          <ListItemIcon>
            <InvetoryIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h5">Inventory</Typography>
          </ListItemText>

          <ListItemIcon>
            {openlist.inv ? (
              <KeyboardArrowUpIcon className="list_arrow" />
            ) : (
              <KeyboardArrowDownIcon className="list_arrow" />
            )}
          </ListItemIcon>
        </ListItem>

        {/* Inventory list */}
        <Collapse in={openlist.inv} timeout="auto" unmountOnExit>
          <List component="div" className={classes.nestedList}>
            {nestedLists.inventory.map((item, key) => (
              <Link to={item.link} key={key}>
                <ListItem button className={isSelected(item.link) ? classes.nestedList__selected : classes.nested}>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => setOpenList({ purch: !openlist.purch })}
          className={classes[`drawer__item${isSelected("/admin/purchasing")}`]}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h5">Purchasing</Typography>
          </ListItemText>

          <ListItemIcon>
            {openlist.purch ? (
              <KeyboardArrowUpIcon className="list_arrow" />
            ) : (
              <KeyboardArrowDownIcon className="list_arrow" />
            )}
          </ListItemIcon>
        </ListItem>

        {/* Purch list */}
        <Collapse in={openlist.purch} timeout="auto" unmountOnExit>
          <List component="div" className={classes.nestedList}>
            {nestedLists.purchase.map((item, key) => (
              <Link to={item.link} key={key}>
                <ListItem button className={isSelected(item.link) ? classes.nestedList__selected : classes.nested}>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );

  return <nav className={classes.drawer}>{drawer}</nav>;
};

export default compose(withRouter)(SideMenu);
