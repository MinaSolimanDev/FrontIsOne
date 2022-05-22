import React from 'react';
import { TextField } from '@material-ui/core';

const RenderInputField = ({
    meta: { touched, invalid, error },
    input,
    name,
    type,
    placeholder,
    classe
}) => {
    return (
        <TextField
            variant="outlined"
            placeholder={placeholder}
            required
            className={classe}
            name={name}
            type={type}
            error={touched && invalid}
            {...input}
        />
    );
};

export default RenderInputField;
