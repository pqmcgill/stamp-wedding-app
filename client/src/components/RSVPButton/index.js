import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import style from './style';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create(style);

export default ({ hasSubmittedResponse }) => {
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
