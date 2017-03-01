import * as colors from '../../style/colors';

export default {
	button: {
		backgroundColor: colors.red,
		color: colors.white,
		borderRadius: '8px',
		border: 'none',
		padding: '5px 30px',
		fontSize: '1em',
		textDecoration: 'none',

		':hover': {
			backgroundColor: colors.darkRed
		}
	}
};
