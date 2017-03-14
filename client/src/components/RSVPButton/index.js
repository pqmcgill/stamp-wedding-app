import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import style from './style';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create(style);

export const RSVPButton = ({ hasSubmittedResponse }) => {
	const style = hasSubmittedResponse ?
		css(styles.button, styles.complete) :
		css(styles.button);
	return (
		<div>
			<Link
				className={ `${style} quicksandLight` }
				to="/rsvp"
			>
				RSVP
			</Link>
		</div>
	);
};

const mapStateToProps = ({ user }) => ({
	hasSubmittedResponse: user.hasSubmittedResponse
});

export default connect(mapStateToProps)(RSVPButton);
