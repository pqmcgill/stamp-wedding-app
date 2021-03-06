import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

export default StyleSheet.create({
  flower: {
		marginTop: '1rem',
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

  formHeader: {
    fontSize: fonts.medium,
    textAlign: 'left',
    '@media (max-width: 768px)': {
      textAlign: 'center'
    }
  },

  formSection: {
    marginBottom: '1em',
    textAlign: 'left'
  },

  formHeaderCenter: {
    fontSize: fonts.medium,
    textAlign: 'center'
  },

  radioQuestion: {
    textAlign: 'left',
    fontSize: fonts.smallerer,
    marginBottom: 0
  },

  input: {
    margin: '0.5em 0',
    border: `solid 1px ${colors.blue}`,
    width: '100%',
    padding: '5px',
    boxSizing: 'border-box',
    minHeight: fonts.small,
    fontSize: fonts.smallerer,

    ':focus': {
      outline: 'none',
      border: `solid 2px ${colors.aquaMarine}`,
      marginBottom: '-1px'
    },

    '@media (max-width: 768px)': {
      margin: '0.25em 0'
    },
  },

  submitBtn: {
    fontSize: fonts.smaller,
    padding: '0.5em 1em',
    border: 'none',
    outline: 'none',
    backgroundColor: colors.blue,
    color: '#FFF',
    borderRadius: '4px',
		cursor: 'pointer',

    ':focus': {
      backgroundColor: colors.aquaMarine
    },

    '@media (max-width: 768px)': {
      width: '100%'
    }
  },

  disabled: {
    pointerEvents: 'none',
    opacity: 0.5
	},

	buttonWrapper: {
	
	},

	buttonWrapperDisabled: {
		cursor: 'not-allowed'
	},

	guestRow: {
		alignItems: 'flex-start'
	},

	submitContainer: {
    marginTop: '2em',
		flexDirection: 'column'
	}
});
