import React, { useState } from "react";
// web.cjs is required for IE 11 support
import { useSpring, animated } from 'react-spring/web.cjs';
// @Material-UI
import { Typography, Button, Slide } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
// icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DownloadIcon from "@material-ui/icons/SystemUpdateAlt";
import AddIcon from "@material-ui/icons/Add";
import NewCategory from "./modals/NewCategory";
import DeleteCategory from "../../../../../common/components/modals/DeleteModal";
import ClosedFolderIcon from "../../../../../common/components/icons/ClosedFolderIcon";
import OpenFolderIcon from "../../../../../common/components/icons/OpenFolderIcon";
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// Assets
import IsOneTable from "../../../../../common/components/table/IsOneTable";
// Styles
import { fade, withStyles } from '@material-ui/core/styles';
import { useStyles } from "../../../../../common/assets/jss/components/adminstration";
import { nestedData } from "../../../../../common/helpers/FakeData";

function TransitionComponent(props) {
    const style = useSpring({
        from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

const StyledTreeItem = withStyles((theme) => ({
    iconContainer: {
        '& .close': {
            opacity: 0.3,
        },
    },
    group: {
        margin: "20px 0px 20px 7px",
        paddingLeft: 18,
        borderLeft: `1px solid ${fade(theme.palette.text.primary, 0.4)}`,
    },
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const rows = [
    createData(nestedData[594651].id, nestedData[594651].name, "Gen Profile for Generice Purpose", nestedData[594651]),
    createData(nestedData[794561].id, nestedData[794561].name, "Gen Profile for Generice Purpose", nestedData[794561]),
    createData(nestedData[195753].id, nestedData[195753].name, "Gen Profile for Generice Purpose", nestedData[195753]),
];

function createData(id, name, description, nested) {
    return { id, name, description, nested };
}

const Categories = ({ history }) => {
    const classes = useStyles();
    //   models
    const [open, setOpen] = useState({});

    const tableHead = [
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
            .map((row, index) => {
                return (
                    <React.Fragment key={index}>
                        {<TableRow className={styles.table__row} >
                            <TableCell align="left" onClick={() => setOpen({ [`nested${index}`]: !open[`nested${index}`] })}>
                                <div style={{ display: "flex" }}>
                                    <div style={{ flex: 1 }}>
                                        <ClosedFolderIcon />
                                    </div>
                                    <div style={{ flex: 10 }}>
                                        {row.name}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="center">{row.description}</TableCell>
                            <TableCell align="center" className={styles.table__actions}>
                                <div
                                    className={styles.table__actionIcon}
                                    onClick={() => history.push(`/admin/administration/category-profiles/${row.id}`)}
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
                        </TableRow>}
                        {open[`nested${index}`] && <TreeView
                            style={{
                                minHeight: 20,
                                flexGrow: 1,
                                minWidth: 200,
                                margin: "10px 0px 20px 50px"
                            }}
                            defaultCollapseIcon={(<OpenFolderIcon />)}
                            defaultExpandIcon={(<ClosedFolderIcon />)}
                        >
                            {row.nested.data.map((category, indexCategory) => {
                                return (
                                    <StyledTreeItem key={indexCategory} nodeId={`${index}${indexCategory}${category.sub}`} label={category.sub}
                                        style={{ margin: "20px 0px 20px 7px", color: "#979797" }}>
                                        {Object.keys(category.product).map((subCategory, indexSubCategory) => {
                                            return (
                                                <StyledTreeItem key={indexSubCategory} nodeId={`${index}${indexCategory}${indexSubCategory}${subCategory}`} label={subCategory}
                                                    style={{ margin: "20px 0px 20px 7px", color: "#979797" }}>
                                                    {category.product[subCategory].map((rrr, indexProduct) => {
                                                        return (
                                                            <StyledTreeItem key={indexProduct} nodeId={`${index}${indexCategory}${subCategory}${indexProduct}${rrr}`} label={rrr}
                                                                style={{ margin: "20px 0px 20px 7px", color: "#979797" }} />
                                                        );
                                                    })}
                                                </StyledTreeItem>
                                            )
                                        })}
                                    </StyledTreeItem>
                                )
                            })}
                        </TreeView>}
                    </React.Fragment>)
            });

    // const renderEdit = (category) => (
    //     <EditCategory category={category} initialValues={{ category: "High Level Category 1", product: "subdsa" }} />
    // )

    const renderList = () => (
        <Slide in direction="up">
            <div className={classes.adminstration}>
                {/* Title Area */}
                <div className={classes.adminstration__header}>
                    <Typography variant="h6">Category Profiles</Typography>
                </div>
                {/* Controls Area */}
                <div className={classes.adminstration__controls}>
                    <DownloadIcon />

                    {/* New Category */}
                    <Button
                        startIcon={<AddIcon style={{ margin: 0, fontSize: 28 }} />}
                        variant="outlined"
                        className={classes.adminstration__add}
                        style={{ width: 260 }}
                        onClick={() => setOpen({ new: true })}
                    >
                        Add New Category Profile
                    </Button>
                </div>
                {/* Table */}
                <IsOneTable
                    rows={rows}
                    tableHead={tableHead}
                    tableBody={renderTableBody}
                />

                {/* Create New Category */}
                {open.new && <NewCategory handleClose={() => setOpen({ new: false })} />}

                {/* Delete Existing Category */}
                {open.delete?.state && (
                    <DeleteCategory
                        title="Delete Category ?"
                        message="If you proceed, you will lose the data of this category."
                        handleClose={() => setOpen({ delete: false })}
                    />
                )}
            </div>
        </Slide>
    );

    return (renderList())
};

export default Categories;
