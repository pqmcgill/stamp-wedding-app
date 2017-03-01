import { StyleSheet } from 'aphrodite';
import * as colors from '../../style/colors';

const bounce = {
	'0%': {
		opacity: 0,
		transform: 'translateY(-2000px) rotate(-45deg)'
	},
	'60%': {
		opacity: 1,
		transform: 'translateY(30px) rotate(-45deg)'
	},
	'80%': { 
		transform: 'translateY(-10px) rotate(-45deg)'
	},
	'100%': {
		transform: 'translateY(0) rotate(-45deg)'
	}
};

const pulsate = {
	'0%': {
		transform: 'scale(0.1, 0.1)',
		opacity: '0.0'
	},
	'50%': {
		opacity: '1.0'
	},
	'100%': {
		transform: 'scale(1.2, 1.2)',
		opacity: 0
	}
};

export default StyleSheet.create({
	marker: {
		position: 'absolute',
		width: '30px',
		height: '30px',
		left: '50%',
		top: '50%',

		borderRadius: '50% 50% 50% 0',
		background: colors.pink,
		transform: 'rotate(-45deg)',
		margin: '-20px 0 0 -20px',
		animationName: bounce,
		animationFillMode: 'both',
		animationDuration: '1s',
		animationDelay: '1s',

		':after': {
			content: '""',
			width: '14px',
			height: '14px',
			margin: '8px 0 0 8px',
			background: '#FBE0DA',
			position: 'absolute',
			borderRadius: '50%'
		}
	},

	pulse: {
		background: 'rgba(0,0,0,0.2)',
		borderRadius: '50%',
		height: '14px',
		width: '14px',
		position: 'absolute',
		left: '50%',
		top: '50%',
		margin: '11px 0px 0px -12px',
		transform: 'rotateX(55deg)',
		zIndex: '-2',

		':after': {
			content: "''",
			borderRadius: '50%',
			height: '40px',
			width: '40px',
			position: 'absolute',
			margin: '-13px 0 0 -13px',
			animationName: pulsate,
			animationDuration: '1s',
			animationTimingFunction: 'ease-out',
			animationIterationCount: 'infinite',
			opacity: '0.0',
			boxShadow: '0 0 1px 2px #89849b',
			animationDelay: '2.1s'
		}
	}

});
