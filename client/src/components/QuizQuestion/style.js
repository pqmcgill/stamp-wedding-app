import { StyleSheet } from 'aphrodite';
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

export default StyleSheet.create({
	questionContainer: {
		position: 'relative'
	},

	timeline: {
		position: 'absolute',
		left: '50%',
		width: '1.5rem',
		top: '-4rem',
		bottom: '-4rem',
		marginLeft: '-0.75rem',
		backgroundColor: colors.seaGreen,
		zIndex: -1
	},

	question: {
		width: '100%',
		margin: '4em 0'
	},

	blurb: {
		fontSize: fonts.smaller
	},

	moreCircle: {
		width: '6em',
		height: '6em',
		lineHeight: '6em',
		margin: '-5px auto 0 auto',
		backgroundColor: colors.aquaMarine
	},

	moreInner: {
		color: colors.white,
		fontSize: '2rem'
	},

	buttonGroup: {
		textAlign: 'left',
		fontSize: fonts.smallerer,
	},

	radio: {
		padding: '0.25em 0'
  },

  correct: {
    fontSize: fonts.smallerer,
    color: colors.aquaMarine
  },

  incorrect: {
    fontSize: fonts.smallerer,
    color: colors.red
	},

	link: {
		textDecoration: 'underline',
		cursor: 'pointer',
		':hover': {
			color: colors.aquaMarine
		}

	}
});
