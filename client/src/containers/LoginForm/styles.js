import { StyleSheet } from 'aphrodite';
import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

export default StyleSheet.create({
  message: {
    padding: '1em',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    color: '#FFF',
    fontSize: fonts.smaller,
    height: '8em',
  },

  title: {
    fontWeight: 200
  },

  spacer: {
    marginBottom: '12em'
  },

  formControlContainer: {
    margin: '5em, 0, 0.5em 0 !important',
    fontSize: fonts.smallerer,
    '@media (max-width: 768px)': {
      paddingLeft: '1em',
      paddingRight: '1em',
      margin: '5em, 0, 0.25em 0 !important'
    }
  },

  formControl: {
    border: `solid 1px ${colors.blue}`,
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    minHeight: fonts.small,
    fontSize: fonts.smallerer,
    marginBottom: '1em',
    marginTop: '0.25em',

    ':focus': {
      outline: 'none',
      border: `solid 2px ${colors.pink}`,
    },

  },

  formControlLabel: {
    textAlign: 'left',
    padding: '6px',
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
    marginTop: '1em',

    ':focus': {
      backgroundColor: colors.pink
    },

    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
});
