import React, { useState } from "react";
// @Material-UI
import { Typography, Button, Slide } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DownloadIcon from "@material-ui/icons/SystemUpdateAlt";
import AddIcon from "@material-ui/icons/Add";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import NewUser from "./modals/NewUser";
import EditUser from "./modals/EditUser";
import DeleteUser from "../../../../../common/components/modals/DeleteModal";
import ResetPassword from "./modals/ResetPassword";
// Assets
import IsOneTable from "../../../../../common/components/table/IsOneTable";
import StyledCheckbox from "../../../../../common/components/checkbox/StyledCheckbox";
// images
import user1 from "../../../../../common/assets/imgs/users/1.png";
import user2 from "../../../../../common/assets/imgs/users/2.png";
import user3 from "../../../../../common/assets/imgs/users/3.png";
import user4 from "../../../../../common/assets/imgs/users/4.png";
import user6 from "../../../../../common/assets/imgs/users/6.png";
import user7 from "../../../../../common/assets/imgs/users/7.png";
import user8 from "../../../../../common/assets/imgs/users/8.png";
// Styles
import { useStyles } from "../../../../../common/assets/jss/components/adminstration";

const rows = [
  createData(1, "Gregoio", "Arturo", "", "IS_0000015", "Gregoio Arturo", "GregyArtury1996S1", user1),
  createData(2, "Maria", "Del Pilar", "Christina", "IS_0000015", "Maria Christina Del Pilar", "GregyArtury1996B2", user2),
  createData(3, "Maria", "De la Cruz", "Victoria", "IS_0000015", "Maria Victoria De la Cruz", "GregyArtury1996Z3", user3),
  createData(4, "Juan", "del Pillar", "", "IS_0000015", "Juan del Pillar", "GregyArtury1996Z3", user4),
  createData(5, "José", "Rizal Mercado", "Protacio", "IS_0000015", "José Protacio Rizal Mercado ", "GregyArtury1996Z3", user8),
  createData(6, "Melchora", "de Ramos", "Aquino", "IS_0000015", "Melchora Aquino de Ramos", "GregyArtury1996Z3", user6),
  createData(7, "Andrés", "y de Castro", "Bonifacio", "IS_0000015", "Andrés Bonifacio y de Castro", "GregyArtury1996Z3", user6),
  createData(8, "John", "Doe", "", "IS_0000015", "John Doe", "GregyArtury1996Z3", user7),
];

function createData(id, first_name, last_name, middle_name, employee_id, name, username, img) {
  return { id, first_name, last_name, middle_name, employee_id, name, username, img };
}

const Users = () => {
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
          inputProps={{ "aria-label": "select all users" }}
        />
      ),
      sortable: false,
      align: "left",
    },
    { name: "id_nemployee_idum", content: "ID Number", sortable: true, align: "left" },
    { name: "name", content: "Name", sortable: true },
    { name: "username", content: "Username", sortable: true },
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
          item.employee_id?.toLowerCase().includes(query.toLowerCase()) ||
          item.name?.toLowerCase().includes(query.toLowerCase()) ||
          item.username?.toLowerCase().includes(query.toLowerCase())
      )
      .map((row, index) => (
        <TableRow key={index} className={checkedList.includes(row.id) ? styles.table__row_hovered : styles.table__row}>
          <TableCell component="th" scope="row">
            <StyledCheckbox
              checked={checkedList.includes(row.id)}
              onChange={() => handleCheckbox(row.id)}
            />
          </TableCell>
          <TableCell align="left">{row.employee_id}</TableCell>
          <TableCell align="center" className={styles.table__cell_name}>
            <div className={styles.table__inlineAvatar}>
              <Avatar alt="profile" src={row.img} />
            </div>
            {row.name}
          </TableCell>
          <TableCell align="center">@{row.username}</TableCell>
          <TableCell align="center" className={styles.table__actions}>
            <div
              className={styles.table__actionIcon}
              onClick={() =>
                setOpen({
                  ...open,
                  edit: { state: true, user: row },
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
            <div
              className={styles.table__actionIcon}
              onClick={() =>
                setOpen({
                  ...open,
                  reset: { state: true, selected: row },
                })
              }
            >
              <VpnKeyIcon />
            </div>
          </TableCell>
        </TableRow>
      ));

  return (
    <Slide in direction="up">
      <div className={classes.adminstration}>
        {/* Title Area */}
        <div className={classes.adminstration__header}>
          <Typography variant="h6">Users</Typography>
        </div>
        {/* Controls Area */}
        <div className={classes.adminstration__controls}>
          <DownloadIcon />

          {/* New User */}
          <Button
            startIcon={<AddIcon style={{ margin: 0, fontSize: 28 }} />}
            variant="outlined"
            className={classes.adminstration__add}
            onClick={() => setOpen({ new: true })}
          >
            Add New User
          </Button>
        </div>
        {/* Table */}
        <IsOneTable
          rows={rows}
          tableHead={tableHead}
          tableBody={renderTableBody}
        />
        {/* Create New USer */}
        {open.new && <NewUser handleClose={() => setOpen({ new: false })} />}
        {/* Edit Existing User */}
        {open.edit?.state && (
          <EditUser
            handleClose={() => setOpen({ edit: false })}
            initialValues={open.edit?.user}
          />
        )}
        {/* Delete Existing User */}
        {open.delete?.state && (
          <DeleteUser
            title="Delete Users ?"
            message="If you proceed, you will lose the data of this User."
            handleClose={() => setOpen({ delete: false })}
            checkedList={checkedList}
            selected={open.delete?.selected}
          />
        )}
        {/* Reset User Password */}
        {open.reset?.state && (
          <ResetPassword
            handleClose={() => setOpen({ reset: false })}
            checkedList={checkedList}
            selected={open.reset?.selected}
          />
        )}
      </div>
    </Slide>
  );
};

export default Users;
