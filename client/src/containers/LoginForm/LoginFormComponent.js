import React from 'react';
import { Field } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import styles from './styles';

const Form = ({ handleSubmit, reset, error }) => {
	const submit = (e) => {
		handleSubmit(e);
		reset();
	}
	return (
		<Grid>
			<Row center="xs,sm,md,lg" middle="xs,sm,md,lg">
				<Col xs={12}
					className={ css(styles.message) + ' quicksandMedium' }>
					<p>
						Please enter the username and password that was provided for
						you on your invitation.
					</p>
				</Col>
			</Row>
			<Row className={ css(styles.spacer) }></Row>
			<Row center="xs,sm,md,lg" >
				<Col xs={12} sm={8} md={8} lg={6} className={css(styles.formControlContainer)} >
					<h1 className={ css(styles.title) + ' princessSofia' }>
						{ error ? error : 'Welcome, Guest'}
					</h1>
					<form onSubmit={ submit }>
						<Row start="xs,sm,md,lg"
							className={ 'quicksandRegular' }>
							<Col xs={12}>
								<label
									className={css(styles.formControlLabel)}
									htmlFor="username">
									Username
								</label>
								<Field className={css(styles.formControl)}
									name="username"
									component="input"
									type="text"
									placeholder="see your invitation..."
								/>
							</Col>
						</Row>
						<Row start="xs,sm,md,lg"
							className={'quicksandRegular' }>
							<Col xs={12}>
								<label className={css(styles.formControlLabel)}
									htmlFor="password">
									Password
								</label>
								<Field className={css(styles.formControl)}
									name="password"
									component="input"
									type="password"
									placeholder="see your invitation..."
								/>
							</Col>
						</Row>
						<Row center="xs,sm,md,lg">

							<Col>
								<button className={css(styles.submitBtn)}
									type="submit">
									LOGIN
								</button>
							</Col>
						</Row>
					</form>
				</Col>
			</Row>
		</Grid>
	);
};

export default Form;
