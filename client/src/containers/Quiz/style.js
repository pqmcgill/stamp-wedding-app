import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

export default StyleSheet.create({
	quiz: {
		marginTop: '3em'
  },

  flower: {
		marginTop: '1rem',
	},

	img: {
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

  rsvpButton: {
		fontSize: fonts.medium
	},

	rsvpButtonText: {
		fontSize: fonts.smallerer,
		fontWeight: 200
  },

  score: {
    marginBottom: '2em'
	},

	retake: {
		marginBottom: '2em',
		fontSize: '2em',
	},

	retakeLink: {
		textDecoration: 'underline',
		cursor: 'pointer',
		color: colors.blue,
		':hover': {
			color: colors.aquaMarine
		}
	}
});
