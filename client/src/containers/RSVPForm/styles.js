import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';

export default StyleSheet.create({
  flower: {
		marginTop: '1rem',
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

  guestName: {
    fontSize: fonts.medium,
    textAlign: 'left'
  },

  radioQuestion: {
    textAlign: 'left',
    fontSize: fonts.smallerer,
    marginBottom: 0
  },
});
