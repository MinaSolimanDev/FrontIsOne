import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Typography, Grid, Slide } from '@material-ui/core';
// input
import RenderInputField from '../../../../../../../common/components/fields/InputField';
// Styles
import { useStyles } from './sectionsStyles'

const EntryGeneralInfo = ({ handleSubmit }) => {
    const classes = useStyles();

    return (
        <Slide in direction="up">
            <form onSubmit={handleSubmit(values => console.log(values))}>
                <Grid container direction="row" alignItems="center" justify="space-between" className={classes.entry__container} spacing={3}>
                    <Grid item style={{ padding: "35px 76px 19px 50px" }} className={classes.entry__first}>
                        <Typography className={classes.entry__first__title}>Role Information</Typography>
                        <div style={{ marginTop: "26px" }}>
                            <Field
                                name="code"
                                type="text"
                                placeholder="* Code"
                                classe={classes.login__input}
                                component={RenderInputField}
                            />
                            <Field
                                name="description"
                                type="text"
                                placeholder="Description"
                                classe={classes.login__input}
                                component={RenderInputField}
                            />
                        </div>
                    </Grid >
                </Grid>
            </form>
        </Slide>
    );
}

export default reduxForm({
    form: "EditRoleInfo",
    //   validate,
    // destroyOnUnmount: false,
})(EntryGeneralInfo);
