import React from "react";
// import { Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from "./fieldsStyles";

const MuiSelectField = ({
    // label,
    input,
    children,
    value,
    native = true,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.select__Field_layr}>
            {/* <Typography style={{ float: "left", fontSize: "12px" }}>{label}</Typography> */}
            <FormControl className={classes.root_layr}>
                {/*<InputLabel className={classes.header_select_input}>{label}</InputLabel>*/}
                <Select native={native} variant="outlined" value={value} labelWidth={0} {...input} className={classes.header_select} IconComponent={() => <ExpandMoreIcon />} >
                    {children}
                </Select>
            </FormControl>
        </div>
    );
};

export default MuiSelectField;
