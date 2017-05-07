import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import style from './style';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create(style);

export default ({ hasSubmittedResponse, admin }) => {
	const style = hasSubmittedResponse ?
		css(styles.button, styles.complete) :
		css(styles.button);

	const toLink = admin ? '/guest-management' : '/rsvp';

	return (
		<div>
			<Link
				className={ `${style} quicksandLight` }
				to={ toLink }
			>
				RSVP
			</Link>
		</div>
	);
};
