import { StyleSheet } from 'aphrodite';
import * as colors from '../../style/colors';

export default StyleSheet.create({
	moreCircle: {
		width: '12em',
		height: '12em',
		margin: '-5px auto 3em auto',
		backgroundColor: colors.aquaMarine
	},

	moreInner: {
		color: colors.white,
		lineHeight: '4em',
		paddingTop: '2.5em'
	},

	text: {
		margin: 0,
		fontSize: '2em'
	}
});
