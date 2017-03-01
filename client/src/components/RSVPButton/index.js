import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import style from './style';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create(style);

const RSVPButton = () => {
	return (
		<div>
			<Link
				className={ `${css(styles.button)} quicksandLight` }
				to="/rsvp"
			>
				RSVP
			</Link>
		</div>
	);
};

export default RSVPButton;
