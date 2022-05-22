import React, { useState } from 'react';
import { Button, Slide } from '@material-ui/core';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import StyledCheckbox from '../../../../../../../common/components/checkbox/StyledCheckbox';
// icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import NewComponentAccess from "../../modals/NewComponentAccess";
import EditComponentAccess from "../../modals/EditComponentAccess";
import DeleteComponentAccess from "../../../../../../../common/components/modals/DeleteModal";
import IsOneTable from "../../../../../../../common/components/table/IsOneTable";
// Styles
import { useStyles } from './sectionsStyles'

const rows = [
    createData(1, "Component Name", "System Admin"),
    createData(2, "Component Name", "System Admin"),
];

function createData(id, name, description) {
    return { id, name, description };
}

const EntryComponentAccess = () => {
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
        { name: "name", content: "Component Key", sortable: true, align: "left" },
        { name: "description", content: "Access", sortable: true },
        { name: "actions", content: "Actions Buttons", sortable: false },
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
                        <div
                            className={styles.table__actionIcon}
                            onClick={() =>
                                setOpen({
                                    ...open,
                                    edit: { state: true, principals: row },
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
        <Slide in direction="up">
            <div className={classes.principals}>
                <div className={classes.principals__controls}>
                    {/* New principals */}
                    <Button
                        startIcon={<AddIcon style={{ margin: 0, fontSize: 28 }} />}
                        variant="outlined"
                        className={classes.principals__add}
                        onClick={() => setOpen({ new: true })}
                    >
                        Add New Component Access
                    </Button>
                </div>
                {/* Table */}
                <IsOneTable
                    rows={rows}
                    tableHead={tableHead}
                    tableBody={renderTableBody}
                />
                {/* New Principals Modal */}
                {open.new && <NewComponentAccess handleClose={() => setOpen({ new: false })} />}
                {/* Edit Existing Principals Modal */}
                {open.edit?.state && (
                    <EditComponentAccess
                        handleClose={() => setOpen({ edit: false })}
                        initialValues={open.edit?.principals}
                    />
                )}
                {/* Delete Component Access */}
                {open.delete?.state && (
                    <DeleteComponentAccess
                        title="Delete Component Access ?"
                        message="If you proceed, you will lose the data of this Component Access."
                        handleClose={() => setOpen({ delete: false })}
                        checkedList={checkedList}
                        selected={open.delete?.selected}
                    />
                )}
            </div>
        </Slide>
    );
}

export default EntryComponentAccess;