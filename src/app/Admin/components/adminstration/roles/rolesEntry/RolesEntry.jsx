import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Grid, Typography, Button, Slide } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// assets
import { fakeRoles } from '../../../../../../common/helpers/FakeData';
// Sections
import EntryBranchAccess from "./sections/EntryBranchAccess";
import EntryGeneralInfo from "./sections/EntryGeneralInfo";
import EntryComponentAccess from "./sections/EntryComponentAccess";
// styles
import { useTabsStyles, useTabStyles, useStyles } from "./rolesEntryStyles";
import BackIcon from "../../../../../../common/components/icons/BackIcon";

const RolesEntry = ({ match, history }) => {
    const classes = useStyles();
    const [ user, setUser ] = useState(false);
    const { id } = match.params
    const tabsClasses = useTabsStyles();
    const tabClasses = useTabStyles();
    const [value, setValue] = useState(0);

    useEffect(() => {
        const selectedUser = fakeRoles.filter(role => role.id == id)[0]

        setUser(selectedUser)
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderEntry = () => (
        <Slide in direction="left">
            <div className={classes.entry}>
                <div className={classes.entry__header}>
                    <div className={classes.entry__title}>
                        <Button startIcon={<BackIcon />} onClick={() => history.push(`/admin/administration/roles`)} className={classes.entry__title__back}>Back</Button>
                        <Typography className={classes.entry__title__main}>Roles Entry</Typography>
                    </div>
                    <Button
                        onClick={() => history.push(`/admin/administration/roles`)}
                        variant="outlined"
                        className={classes.dashboard__button__cancel}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => history.push(`/admin/administration/roles`)}
                        variant="contained"
                        className={classes.dashboard__button__save}>
                        Save Changes
                    </Button>
                </div>
                <Grid container className={classes.section__inner}>
                    <Grid item xs={12} style={{ paddingTop: 0 }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            classes={tabsClasses}
                        >
                            <Tab classes={tabClasses} label="General Information" />
                            <Tab classes={tabClasses} label="Branch Access" />
                            <Tab classes={tabClasses} label="Component Access" />
                        </Tabs>
                    </Grid>
                    {id && user ? 
                    <Grid item xs={12} className={classes.section__inner__tabs}>
                        {value === 0 && (<EntryGeneralInfo initialValues={user}/>)}
                        {value === 1 && (<EntryBranchAccess />)}
                        {value === 2 && (<EntryComponentAccess />)}
                    </Grid> : 
                    <Grid item xs={12} className={classes.section__inner__tabs}>
                        {value === 0 && (<EntryGeneralInfo />)}
                        {value === 1 && (<EntryBranchAccess />)}
                        {value === 2 && (<EntryComponentAccess />)}
                    </Grid>
                    }
                </Grid>
            </div>
        </Slide>
    );

    return <>{renderEntry()}</>;
};

export default compose(withRouter)(RolesEntry);
