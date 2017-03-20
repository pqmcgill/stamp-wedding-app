import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

const styles = {
	map: {
		width: '100%',
		height: '16em',
		textAlign: 'left',

		'@media (max-width: 1024px)': {
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

		'@media (max-width: 1024px)': {
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
		margin: '0.5em 0',
		fontSize: fonts.smaller,

		// '@media (max-width: 768px)': {
		// 	textAlign: 'center'
		// }
	},

	thanks: {
		fontSize: '1.2rem'
	},

	thanksInner: {
		padding: '1em',
		margin: '1em 0 1em 0',
		backgroundColor: colors.lightPink,
		borderRadius: '10px',
		'@media (max-width: 1024px)': {
			marginRight: '1em'
		}
	},

	header: {
		fontWeight: 400,
		fontSize: fonts.large
	},

	thanksHeader: {
		fontSize: fonts.small
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
