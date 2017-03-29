import React from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import Form from './LoginFormComponent';
import { login } from '../../actions/user';

const LoginForm = reduxForm({
	form: 'login'
})(Form);

const LoginFormContainer = ({ ...props, login, logout, user, history }) => {
  const { push } = history;
	const handleSubmit = val => {
		return login(val.username, val.password)
			.then(res => {
				if (res.user.access === 'admin') {
          console.log(push);
					push('/guest-management');
				} else {
					push('/rsvp');
				}
			})
			.catch(() => {
				throw new SubmissionError({_error: 'Oops! Something went wrong. Try again.'});
			});
	};

	return (
		<div>
			<LoginForm onSubmit={ handleSubmit } />
		</div>
	);
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
