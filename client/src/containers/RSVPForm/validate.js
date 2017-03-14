export default values => {
  const errors = {};
  if (!values.guestRSVP || !values.guestDinnerSelection || !values.guestBeverageSelection) {
    errors._error = true;
  }
  if (values.plusOneRSVP === 'YES') {
    if (!values.plusOneDinnerSelection || !values.plusOneBeverageSelection) {
      errors._error = true;
    }
  }
  if (!values.overnightSelection) {
    errors._error = true;
  }
  return errors;
};
