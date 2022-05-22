import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Grid, Typography, Button, Slide } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BackIcon from "../../../../../../common/components/icons/BackIcon";
// assets
import { fakeSuppliers } from '../../../../../../common/helpers/FakeData'
// Sections
import EntryDiscounting from "./sections/EntryDiscounting";
import EntryGeneralInfo from "./sections/EntryGeneralInfo";
import EntryPrincipals from "./sections/EntryPrincipals";
// styles
import { useTabsStyles, useTabStyles, useStyles } from "./suppliersEntryStyles";

const SuppliersEntry = ({ match, history }) => {
    const classes = useStyles();
    const [ supplier, setSupplier ] = useState(false)
    const tabsClasses = useTabsStyles();
    const tabClasses = useTabStyles();
    const [value, setValue] = useState(0);
    const { id } = match.params;
    
    useEffect(() => {
        const selectedSupplier = fakeSuppliers.filter(supplier => supplier.id == id)[0];

        setSupplier(selectedSupplier)
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderEntry = () => (
        <Slide in direction="left">
            <div className={classes.entry}>
                <div className={classes.entry__header}>
                    <div className={classes.entry__title}>
                        <Button startIcon={<BackIcon />} onClick={() => history.push(`/admin/administration/suppliers`)} className={classes.entry__title__back}>Back</Button>
                        <Typography className={classes.entry__title__main}>Supplier Entry</Typography>
                    </div>
                    <Button
                        onClick={() => history.push(`/admin/administration/suppliers`)}
                        variant="outlined"
                        className={classes.dashboard__button__cancel}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => history.push(`/admin/administration/suppliers`)}
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
                            <Tab classes={tabClasses} label="Discounting" />
                            <Tab classes={tabClasses} label="Principals" />
                        </Tabs>
                    </Grid>
                    {id && supplier ? 
                    <Grid item xs={12} className={classes.section__inner__tabs}>
                        {value === 0 && (<EntryGeneralInfo initialValues={supplier}/>)}
                        {value === 1 && (<EntryDiscounting />)}
                        {value === 2 && (<EntryPrincipals />)}
                    </Grid> :
                    <Grid item xs={12} className={classes.section__inner__tabs}>
                        {value === 0 && (<EntryGeneralInfo />)}
                        {value === 1 && (<EntryDiscounting />)}
                        {value === 2 && (<EntryPrincipals />)}
                    </Grid>
                    }
                </Grid>
            </div>
        </Slide>
    );

    return <>{renderEntry()}</>;
};

export default compose(withRouter)(SuppliersEntry);
