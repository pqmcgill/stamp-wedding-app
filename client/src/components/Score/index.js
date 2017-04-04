import React from 'react';
import style from './style';
import { css } from 'aphrodite';
import Paper from 'material-ui/Paper';

export default ({ score, total }) => {
  return (
    <Paper circle={true} 
      className={ css(style.moreCircle) }
      zDepth={2}
    >
      <span className={ 'princessSofia ' + css(style.moreInner) }>{score}/{total}</span>
    </Paper>
    );
};
