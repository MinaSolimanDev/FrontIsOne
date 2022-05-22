import React, { useState } from 'react';
import { Field, reduxForm } from "redux-form";
import { Typography, Grid, Slide } from '@material-ui/core';
// Styles
import { useStyles, AntSwitch } from './sectionsStyles';
// input
import MuiSelectField from '../../../../../../../common/components/fields/SelectField';
import RenderInputField from '../../../../../../../common/components/fields/InputField';

const EntryGeneralInfo = ({ handleSubmit, initialValues}) => {
    const classes = useStyles();
    const [state, setState] = useState({ checkedC: false, });
    const addressInfoArr =
        [{ placeholder: "Address 1", name: "address_1" },
        { placeholder: "Address 2", name: "address_2" },
        { placeholder: "Tel No. 1", name: "telno_1" },
        { placeholder: "Tel No. 2", name: "telno_2" },
        { placeholder: "Fax No. 1", name: "fax_1" },
        { placeholder: "Fax No. 2", name: "fax_2" },
        { placeholder: "Contact Person", name: "contact_person" },];

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Slide in direction="up">
            <form onSubmit={handleSubmit(values => console.log(values))}>
                <Grid container direction="row" alignItems="center" justify="space-between" className={classes.entry__container} spacing={3}>
                    <Grid item style={{ padding: "35px 76px 19px 50px" }} className={classes.entry__first}>
                        <Typography className={classes.entry__first__title}>Company Information</Typography>
                        <div style={{ marginTop: "26px" }}>
                            <Field
                                name="code"
                                type="text"
                                placeholder="* Code"
                                classe={classes.login__input}
                                component={RenderInputField}
                            />
                            <Field
                                name="name"
                                type="text"
                                placeholder="* Name"
                                classe={classes.login__input}
                                component={RenderInputField}
                            />
                        </div>
                    </Grid >
                    <Grid item style={{ padding: "35px 50px" }} className={classes.entry__second}>
                        <Typography component="div" style={{ position: "absolute", top: 27, right: 57 }}>
                            <Grid component="label" container alignItems="center" spacing={1}>
                                <Grid item className={classes.entry__switch}>{!state.checkedC ? "Inactive" : "active"}</Grid>
                                <Grid item>
                                    <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                                </Grid>
                            </Grid>
                        </Typography>
                        <Typography className={classes.entry__second__title}>Discount Method</Typography>
                        <Field
                            name="discountMethod"
                            label="DiscountMethod"
                            component={MuiSelectField}
                        >
                            {["After VAT"].map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </Field>
                        <Typography className={classes.entry__second__title}>Pricing Method</Typography>
                        <Field
                            name="PricingMethod"
                            label="PricingMethod"
                            component={MuiSelectField}
                        >
                            {["Pricing Method"].map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </Field>
                    </Grid>
                    <Grid item style={{ padding: "35px 50px" }} className={classes.entry__third} >
                        <Typography className={classes.entry__third__title}>Address Information</Typography>
                        <Grid container direction="row" justify="space-between" style={{ marginTop: "26px" }}>
                            {addressInfoArr.map((address, index) => {
                                return (
                                    <Grid item style={{ width: "49%" }} key={index}>
                                        <Field
                                            name={address.name}
                                            type="text"
                                            placeholder={address.placeholder}
                                            classe={classes.login__input}
                                            component={RenderInputField}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Slide>
    );
}

export default reduxForm({
    form: "genralEntryInfo",
    //   validate,
    // destroyOnUnmount: false,
})(EntryGeneralInfo);
