import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';


const styles = {
	wrapper: {
		display: 'box'
	},

	navBar: {
		width: '100%',
		backgroundColor: colors.blue,
		height: '40px',
		willChange: 'transform',
		transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
	},

	nav: {
		height: '40px',
		lineHeight: '40px',
		fontSize: fonts.smaller
	},

	link: {
		display: 'flex',
		alignItems: 'center',
		height: '30px',
		color: colors.white,
		textAlign: 'center',
		padding: '5px 0.5rem 0 0.5rem',
		textDecoration: 'none',
		transition: 'color .2s',
		':hover': {
			color: colors.blue,
			backgroundColor: colors.white
		}
	},

	activeLink: {
		color: colors.blue,
		backgroundColor: colors.white
	},

	iconLink: {
		lineHeight: '3.25rem'
	},

  home: {
		height: '2rem',
		width: '2rem',
		color: 'inherit',
    ':hover': {
      color: colors.blue
    }
	},

	first: {
		padding: 0
	}

};

export default styles;
