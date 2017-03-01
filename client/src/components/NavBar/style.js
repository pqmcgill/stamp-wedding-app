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
		display: 'block',
		height: '35px',
		color: colors.white,
		textAlign: 'center',
		padding: '0 0.5rem',
		textDecoration: 'none',

		':hover': {
			color: colors.blue,
			backgroundColor: colors.white
		}
	},

};

export default styles;
