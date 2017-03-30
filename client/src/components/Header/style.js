import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

const link = {
	color: colors.blue,
	textDecoration: 'none'
};

export default {
	wrapper: {
		display: 'box'
	},

	header: {
		paddingBottom: '1rem'
	},

	title: {
		fontSize: fonts.largest
	},

	titleLink: {
		':link': link,
		':visited': link,
		':hover': link,
		':active': link
	},

	rsvpContainer: {
		fontSize: fonts.medium,
	},

	rsvp: {
		paddingTop: '1rem',
		paddingBottom: '1rem'
	},

	rsvpText: {
		fontSize: fonts.smallerer,
		fontWeight: 200
  },

  logout: {
    cursor: 'pointer',
    fontSize: fonts.smaller,
    textDecoration: 'underline',
    position: 'relative',
    top: '0.1em',
    ':hover': {
      color: colors.pink
    }
  }
};
