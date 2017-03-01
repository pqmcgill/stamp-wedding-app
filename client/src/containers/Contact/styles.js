import { StyleSheet } from 'aphrodite';
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

export default StyleSheet.create({
  flower: {
		marginTop: '1rem',
	},

	img: {
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

  formControlContainer: {
    margin: '0.5em 0',
    fontSize: fonts.smallerer,
    '@media (max-width: 768px)': {
      margin: '0.25em 0'
    }
  },

  formControl: {
    border: `solid 1px ${colors.blue}`,
    width: '100%',
    padding: '5px',
    boxSizing: 'border-box',
    minHeight: fonts.small,
    fontSize: fonts.smallerer,

    ':focus': {
      outline: 'none',
      border: `solid 2px ${colors.pink}`,
      marginBottom: '-1px'
    },

  },

  formControlLabel: {
    textAlign: 'right',
    padding: '6px',
    '@media (max-width: 768px)': {
      textAlign: 'left'
    }
  },

  textArea: {
    height: '100px'
  },

  submitBtn: {
    fontSize: fonts.smaller,
    padding: '0.5em 1em',
    border: 'none',
    outline: 'none',
    backgroundColor: colors.blue,
    color: '#FFF',
    borderRadius: '4px',

    ':focus': {
      backgroundColor: colors.pink
    },

    '@media (max-width: 768px)': {
      width: '100%'
    }
  },

  divider: {
    margin: '30px 0'
  },
  
  rsvpButton: {
		fontSize: fonts.medium
	},

	rsvpButtonText: {
		fontSize: fonts.smallerer,
		fontWeight: 200
	}
});
