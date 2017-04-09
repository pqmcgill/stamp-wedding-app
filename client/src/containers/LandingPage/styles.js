import { StyleSheet } from 'aphrodite';

import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';
import stampWebp from '../../assets/stamp.webp';
import stampJpeg from '../../assets/stamp.jpg';

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},

	antiWrapper: {
		display: 'box'
	},

	content: {
		flex: 1,
		minHeight: '80vh',
		'@media (max-width: 768px)': {
			minHeight: '400px'
		}
	},

	flower: {
		marginTop: '1rem',
	},

	img: {
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

	info: {
		fontWeight: 200,
		fontSize: fonts.smaller,
		textAlign: 'center',
		paddingBottom: '1em'
	},

	infoHeader: {
		fontSize: fonts.medium,
		fontWeight: 400,
		margin: '0 0 20px 0'
	},

	quizWrapper: {
		display: 'box'
	},

	quizLink: {
		cursor: 'pointer',
		fontSize: fonts.small,
		backgroundColor: colors.lightPink,
		paddingTop: '1em',
		paddingBottom: '1em',
		':hover': {
			textDecoration: 'underline'
		}
	},

	rsvp: {
		fontSize: fonts.medium,
		textAlign: 'center',
		paddingBottom: '1rem'
	},

	rsvpText: {
		fontWeight: 200,
		fontSize: fonts.smallerer,
		paddingBottom: '1rem'
	},

	parallax: {
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height: '70vh',
		'@media (max-width: 768px)': {
			height: '400px'
		}
	},

	parallaxWebp: {
		backgroundImage: `url(${stampWebp})`,
	},

	parallaxJpg: {
		backgroundImage: `url(${stampJpeg})`
	}
});

export default styles;
