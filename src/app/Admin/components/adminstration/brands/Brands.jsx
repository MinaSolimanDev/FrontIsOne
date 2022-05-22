import React, { useState } from "react";
// @Material-UI
import { Typography, Button } from "@material-ui/core";
import Silde from "@material-ui/core/Slide";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DownloadIcon from "@material-ui/icons/SystemUpdateAlt";
import AddIcon from "@material-ui/icons/Add";
import NewBrand from "./modals/NewBrand";
import EditBrand from "./modals/EditBrand";
import DeleteBrand from "../../../../../common/components/modals/DeleteModal";
import StyledCheckbox from "../../../../../common/components/checkbox/StyledCheckbox";
// Assets
import IsOneTable from "../../../../../common/components/table/IsOneTable";
// Styles
import { useStyles } from "../../../../../common/assets/jss/components/adminstration";

const rows = [
  createData(1, "IS_0000015", "ALACTAGROWS1"),
  createData(2, "IS_0000016", "ALACTAGROWB2"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
  createData(3, "IS_0000017", "ALACTAGROWZ3"),
];

function createData(id, code, description) {
  return { id, code, description };
}

const Brands = () => {
  const classes = useStyles();
  //Checkbox
  const [selectAll, setSelectAll] = useState(false);
  const [checkedList, setCheckedList] = useState([]);
  //   models
  const [open, setOpen] = useState({});

  const handleCheckbox = (id) => {
    if (checkedList.includes(id)) {
      let newCheckList = checkedList.filter((item) => item !== id);
      setCheckedList(newCheckList);
    } else {
      setCheckedList([...checkedList, id]);
    }
  };

  const handleSelectAll = (selectAllNewValue) => {
    setSelectAll(selectAllNewValue);

    if (selectAllNewValue) {
      // push all of students ids in the checked array
      let id_list = rows.map((cell) => cell.id);
      return setCheckedList(id_list);
    } else {
      // clear all
      return setCheckedList([]);
    }
  };

  const tableHead = [
    {
      name: "checkbox",
      content: (
        <StyledCheckbox
          onChange={() => handleSelectAll(!selectAll)}
          inputProps={{ "aria-label": "select all desserts" }}
        />
      ),
      sortable: false,
      align: "left",
    },
    { name: "code", content: "Code", sortable: true, align: "left" },
    { name: "description", content: "Description", sortable: true },
    { name: "actions", content: "Actions", sortable: false },
  ];

  // Render with applying search
  const renderTableBody = (items, query, styles, pagination) =>
    items
      .slice(
        pagination.page * pagination.rowsPerPage,
        pagination.page * pagination.rowsPerPage + pagination.rowsPerPage
      )
      .filter(
        (item) =>
          item.code?.toLowerCase().includes(query.toLowerCase()) ||
          item.description?.toLowerCase().includes(query.toLowerCase())
      )
      .map((row, index) => (
        <TableRow key={index} className={styles.table__row}>
          <TableCell component="th" scope="row">
            <StyledCheckbox
              checked={checkedList.includes(row.id)}
              onChange={() => handleCheckbox(row.id)}
            />
          </TableCell>
          <TableCell align="left">{row.code}</TableCell>
          <TableCell align="center">{row.description}</TableCell>
          <TableCell align="center" className={styles.table__actions}>
            <div
              className={styles.table__actionIcon}
              onClick={() =>
                setOpen({
                  ...open,
                  edit: { state: true, brand: row },
                })
              }
            >
              <EditIcon />
            </div>
            <div
              className={styles.table__actionIcon}
              onClick={() =>
                setOpen({
                  ...open,
                  delete: { state: true, selected: row },
                })
              }
            >
              <DeleteOutlineIcon />
            </div>
          </TableCell>
        </TableRow>
      ));

  return (
    <Silde in direction="up">
      <div className={classes.adminstration}>
        {/* Title Area */}
        <div className={classes.adminstration__header}>
          <Typography variant="h6">Brands</Typography>
        </div>
        {/* Controls Area */}
        <div className={classes.adminstration__controls}>
          <DownloadIcon />

          {/* New Brand */}
          <Button
            startIcon={<AddIcon style={{ margin: 0, fontSize: 28 }} />}
            variant="outlined"
            className={classes.adminstration__add}
            onClick={() => setOpen({ new: true })}
          >
            Add New Brand
          </Button>
        </div>
        {/* Table */}
        <IsOneTable
          rows={rows}
          tableHead={tableHead}
          tableBody={renderTableBody}
        />
        {/* Create New Brand */}
        {open.new && <NewBrand handleClose={() => setOpen({ new: false })} />}
        {/* Edit Existing Brand */}
        {open.edit?.state && (
          <EditBrand
            handleClose={() => setOpen({ edit: false })}
            initialValues={open.edit?.brand}
          />
        )}
        {/* Delete Existing Brand */}
        {open.delete?.state && (
          <DeleteBrand
            title="Delete Brands ?"
            message="If you proceed, you will lose the data of this brand."
            handleClose={() => setOpen({ delete: false })}
            checkedList={checkedList}
            selected={open.delete?.selected}
          />
        )}
      </div>
    </Silde>
  );
};

export default Brands;
