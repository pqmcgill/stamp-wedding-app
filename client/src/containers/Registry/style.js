import { StyleSheet } from 'aphrodite';

import * as fonts from '../../style/fonts';

export default StyleSheet.create({
	container: {
	},

	flower: {
		marginTop: '1rem',
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

	text: {
		fontSize: fonts.smaller,
		fontWeight: 200,
		textAlign: 'center'
	},

	thanks: {
		fontSize: fonts.large,
		marginTop: 20
	},

	button: {
		fontSize: fonts.medium
	},

	buttonText: {
		fontSize: fonts.smallerer,
		fontWeight: 200
	}
});
