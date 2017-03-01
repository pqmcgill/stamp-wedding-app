import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

const styles = {
	map: {
		width: '100%',
		height: '16em',
		textAlign: 'left',

		'@media (max-width: 768px)': {
			order: -2,
			height: '20em'
		}
	},

	center: {
		textAlign: 'center'
	},

	address: {
		fontSize: fonts.smaller,
		padding: '0 1em',
		textAlign: 'center',

		'@media (max-width: 768px)': {
			padding: '0',
			order: -1
		}
	},

	directionsHeader: {
		fontSize: fonts.large,
		textAlign: 'center'
	},

	directions: {
		textAlign: 'left',
		padding: '0 1em',
		fontSize: fonts.smaller,

		'@media (max-width: 768px)': {
			textAlign: 'center'
		}
	},

	thanks: {
		padding: '1em',
		fontSize: fonts.smaller,
		backgroundColor: colors.lightPink,
		borderRadius: '10px',
	},

	header: {
		fontWeight: 400,
		fontSize: fonts.large
	},

	thanksHeader: {
		fontSize: fonts.large
	},

	dearGuests: {
		fontSize: fonts.smaller
	},

	salutation: {
		fontSize: fonts.large
	},

	regards: {
		fontSize: fonts.large
	},
};

export default StyleSheet.create(styles);
