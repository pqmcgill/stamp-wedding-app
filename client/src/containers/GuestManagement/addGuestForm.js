import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addGuest } from '../../actions/admin';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { SelectField, TextField } from 'redux-form-material-ui';

const Form = ({ handleSubmit, reset }) => {
	const submit = e => {
    console.log(e);
		handleSubmit(e);
		reset();
	}

  const formStyle = { paddingLeft: '15px' };
  const fieldStyle = { margin: '0 10px' };
  const selectStyle = { ...fieldStyle, verticalAlign: 'bottom' };

  return (
    <form style={ formStyle } onSubmit={ submit }>
      <span>
        <Field 
          style={ fieldStyle } 
          name="username" 
          component={ TextField } 
          type="text" 
          floatingLabelText="Guest name"
        />
      </span>
      <span>
        <Field style={ selectStyle } name="affiliation" component={ SelectField } floatingLabelText="Select an Affiliation">
          <MenuItem value="SAM_FRIEND" primaryText="Sam's Friend" />
          <MenuItem value="SAM_FAM" primaryText="Sam's Family" />
          <MenuItem value="PAT_FRIEND" primaryText="Pat's Friend" />
          <MenuItem value="PAT_FAM" primaryText="Pat's Family" />
          <MenuItem value="OTHER" primaryText="Other" />
        </Field>
      </span>
      <span>
        <RaisedButton style={ fieldStyle } label="Primary" primary={true} type="submit" /> 
      </span>
		</form>
	);
};

const AddGuestForm = reduxForm({
	form: 'addGuest'
})(Form);

const AddGuestFormContainer = ({ addGuest, token }) => {
	const handleSubmit = val => {
    const guests = val.username.split('.');
    const guestName = guests[0];
    const plusOneName = guests[1] || '';
		addGuest({ ...val, guestName, plusOneName }, token);
	};

	return (
		<AddGuestForm onSubmit={ handleSubmit } />
	);
};

const mapStateToProps = ({ user }) => ({ token: user.token });
const mapDispatchToProps = { addGuest };
export default connect(mapStateToProps, mapDispatchToProps)(AddGuestFormContainer);
