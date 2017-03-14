export default values => {
  const errors = {};

  // if (!values.guestRSVP || !values.guestDinnerSelection || !values.guestBeverageSelection) {
  //   errors._error = true;
  // }
  // if (values.plusOneRSVP === 'YES') {
  //   if (!values.plusOneDinnerSelection || !values.plusOneBeverageSelection) {
  //     errors._error = true;
  //   }
  // }
  // if (!values.overnightSelection) {
  //   errors._error = true;
  // }

  if (!values.guestRSVP || !values.plusOneRSVP) {
      errors._error = true;
  } else {
      if (values.guestRSVP === 'YES') {
          if (!values.guestDinnerSelection || !values.guestBeverageSelection) {
              errors._error = true;
          }
      }

      if (values.plusOneRSVP === 'YES') {
          if (!values.plusOneDinnerSelection || !values.plusOneBeverageSelection) {
              errors._error = true;
          }
      }

      if ((values.guestRSVP === 'YES' || values.plusOneRSVP === 'YES') && !values.overnightSelection) {
          errors._error = true;
      }
  }
  return errors;
};
