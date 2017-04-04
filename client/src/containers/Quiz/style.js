import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';

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
  }
});
