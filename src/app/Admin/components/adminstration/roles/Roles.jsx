import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
// @Material-UI
import { Typography, Button, Slide } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DownloadIcon from "@material-ui/icons/SystemUpdateAlt";
import AddIcon from "@material-ui/icons/Add";
import DeleteRole from "../../../../../common/components/modals/DeleteModal";
// Assets
import IsOneTable from "../../../../../common/components/table/IsOneTable";
import StyledCheckbox from "../../../../../common/components/checkbox/StyledCheckbox";
import { fakeRoles } from '../../../../../common/helpers/FakeData'
// Styles
import { useStyles } from "../../../../../common/assets/jss/components/adminstration";


const Roles = ({ history }) => {
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
      let id_list = fakeRoles.map((cell) => cell.id);
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
    { name: "name", content: "Name", sortable: true, align: "left" },
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
          item.name?.toLowerCase().includes(query.toLowerCase()) ||
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
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="center">{row.description}</TableCell>
          <TableCell align="center" className={styles.table__actions}>
            <div className={styles.table__actionIcon} onClick={() => history.push(`/admin/administration/roles/entry/${row.id}`)}>
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
    <Slide in direction="up">
      <div className={classes.adminstration}>

        {/* Title Area */}
        <div className={classes.adminstration__header}>
          <Typography variant="h6">Roles</Typography>
        </div>

        {/* Controls Area */}
        <div className={classes.adminstration__controls}>
          <DownloadIcon />

          {/* New Brand */}
          <Button
            startIcon={<AddIcon style={{ margin: 0, fontSize: 28 }} />}
            variant="outlined"
            className={classes.adminstration__add}
            onClick={() => history.push("/admin/administration/roles/entry/new")}
          >
            Add New Role
          </Button>
        </div>

        {/* Table */}
        <IsOneTable rows={fakeRoles} tableHead={tableHead} tableBody={renderTableBody} />

        {/* Delete Existing Role */}
        {open.delete?.state && (
          <DeleteRole
            title="Delete Roles ?"
            message="If you proceed, you will lose the data of this Role."
            handleClose={() => setOpen({ delete: false })}
            checkedList={checkedList}
            selected={open.delete?.selected}
          />
        )}
      </div>
    </Slide>
  );
};

export default withRouter(Roles);
