export const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  if (
    values.new_password &&
    values.confirm_password &&
    values.new_password !== values.confirm_password
  ) {
    errors.new_password = "Password Didn’t Matched";
    errors.confirm_password = "Password Didn’t Matched";
  }

  return errors;
};
