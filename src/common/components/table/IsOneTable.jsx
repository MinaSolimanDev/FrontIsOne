import React, { useState } from "react";
// @Material-UI
import { Button } from "@material-ui/core";
import { TextField, Paper } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import { Popover } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
// icons
import DownIcon from "../icons/DownIcon";
import UpIcon from "../icons/UpIcon";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import empty from "../../assets/imgs/empty.gif";
// Styles
import { useStyles } from "./isOneTableStyles";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const defineRowsPerPage = (rows) => {
  const options = [10];
  if (rows.length > 100) options.push(20, 50, 100);
  else if (rows.length > 50) options.push(20, 50);
  else if (rows.length > 20) options.push(20);

  return options;
};

const IsOneTable = ({ tableHead, rows, tableBody }) => {
  const classes = useStyles();
  // Search
  const [query, setQuery] = useState("");
  //   sorting
  const { items, requestSort, sortConfig } = useSortableData(rows);
  // Pagination
  const [page, setPage] = React.useState(0);
  const paginationOptions = defineRowsPerPage(rows);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeRowsPerPage = (event, newTimeframe) => {
    setRowsPerPage(newTimeframe);
    setPage(0);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <div className={classes.table}>
      {/* Search & Pagination */}
      <div className={classes.table__controls}>
        <div className={classes.table__search}>
          <TextField
            variant="outlined"
            placeholder="Search"
            type="text"
            fullWidth
            className={classes.table__input}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Button variant="contained">
            <SearchIcon />
          </Button>
        </div>
        <div className={classes.table__pagination}>
          Rows Per Page :
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            variant="contained"
            onClick={handleClick}
            className={classes.table__pagination_select}
          >
            {`${rowsPerPage} Entries`}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <List component="nav" aria-label="table pagination">
              {paginationOptions.map((option, index) => (
                <ListItem button key={index}>
                  <ListItemText
                    primary={option}
                    onClick={(event) => handleChangeRowsPerPage(event, option)}
                  />
                </ListItem>
              ))}
            </List>
          </Popover>
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page + 1}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            onChange={handleChangePage}
          />
        </div>
      </div>
      {/* Table */}
      <TableContainer
        classes={{ root: classes.table__container }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHead.map((cell, index) => {
                return (
                  <TableCell
                    key={index}
                    className={classes.table__head}
                    align={cell.align || "center"}
                    onClick={() => cell.sortable && requestSort(cell.name)}
                  >
                    {cell.content}
                    {/* sorting */}
                    {getClassNamesFor(cell.name) === "descending"
                      ? cell.sortable && (
                          <DownIcon className={classes.table_sortIcon} />
                        )
                      : cell.sortable && (
                          <UpIcon className={classes.table_sortIcon} />
                        )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              tableBody(items, query, classes, { page, rowsPerPage })
            ) : (
              <TableRow>
                <TableCell style={{ textAlign: "center" }} colSpan={6}>
                  <img src={empty} alt="empty table" />
                </TableCell>
              </TableRow>
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 40 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default IsOneTable;
