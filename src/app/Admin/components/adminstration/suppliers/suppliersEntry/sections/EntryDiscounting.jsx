import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Typography, Grid, Slide } from '@material-ui/core';
// Styles
import { useStyles } from './sectionsStyles'
// input
import RenderInputField from '../../../../../../../common/components/fields/InputField';

const EntryDiscounting = ({ }) => {
    const classes = useStyles();

    return (
        <Slide in direction="up">
            <Grid container direction="row" justify="flex-start" className={classes.discount__container} spacing={3}>
                < Grid xs={4} item style={{ padding: "35px 76px 19px 50px" }} className={classes.discount__first}>
                    <Typography className={classes.entry__first__title}>Items Discounts</Typography>
                    <div style={{ marginTop: "26px" }}>
                        {[1, 2, 3, 4, 5].map((r, index) => {
                            return (
                                <div key={index} style={{ display: "flex" }}>
                                    <div className={classes.discount__first__fieldtitle}>{`Discount Method ${r}`}</div>
                                    <div style={{ flex: 2 }}>
                                        <Field
                                            name="code"
                                            type="number"
                                            placeholder="0"
                                            classe={classes.input__discount}
                                            component={RenderInputField}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Grid >
                <Grid xs={1} />
                <Grid xs={4} item style={{ padding: "35px 50px" }} className={classes.discount__second}>
                    <Typography className={classes.entry__second__title}>PO Subtotal Discounts</Typography>
                    <div style={{ marginTop: "26px" }}>
                        {[1, 2, 3, 4, 5].map((r, index) => {
                            return (
                                <div key={index} style={{ display: "flex" }}>
                                    <div className={classes.discount__first__fieldtitle}>{`PO Subtotal Discount ${r}`}</div>
                                    <div style={{ flex: 2 }}>
                                        <Field
                                            name="code"
                                            type="number"
                                            placeholder="0"
                                            classe={classes.input__discount}
                                            component={RenderInputField}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Grid>
            </Grid>
        </Slide>
    );
}

export default reduxForm({
    form: "",
    //   validate,
    destroyOnUnmount: false,
})(EntryDiscounting);
