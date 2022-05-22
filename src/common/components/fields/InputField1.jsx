import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from "../../assets/jss/components/adminstration";

const RenderInputField = ({
    meta: { touched, invalid, error },
    input,
    name,
    type,
    placeholder,
}) => {
    const classes1 = useStyles();

    return (
        <>
            <TextField
                variant="outlined"
                placeholder={placeholder}
                required
                className={
                    touched && error ? classes1.login__input_error : classes1.login__input
                }
                name={name}
                type={type}
                error={touched && invalid}
                {...input}
            />
            <div className={`helperText_error ${classes1.login__helper_text_error}`}>
                {touched && error}
            </div>
        </>
    );
};

export default RenderInputField;
