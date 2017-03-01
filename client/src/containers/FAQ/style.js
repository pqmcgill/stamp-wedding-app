import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

const styles = {
	map: {
		width: '100%',
		height: '20em'
	},

	thanks: {
		fontSize: fonts.smaller,
		backgroundColor: colors.lightPink,
		borderRadius: '10px',
	},

	header: {
		fontWeight: 400,

		'@media (max-width: 456px)': {
			textAlign: 'center'
		}
	},

	thanksHeader: {
		fontSize: fonts.large
	},

	indented: {
		paddingLeft: '2em'
	},

	centered: {
		textAlign: 'center'
	},

	dearGuests: {
		padding: '0 1em',
		fontSize: fonts.smaller
	},

	salutation: {
		fontSize: fonts.large
	},

	regards: {
		fontSize: fonts.large
	},

	button: {
		fontSize: fonts.medium
	},

	buttonText: {
		fontSize: fonts.smallerer,
		fontWeight: 200
	},

	flower: {
		marginTop: '1rem',
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},
};

export default StyleSheet.create(styles);
