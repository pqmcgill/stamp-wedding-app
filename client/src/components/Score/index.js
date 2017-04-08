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
			<div className={ 'princessSofia ' + css(style.moreInner) }>
				<p className={ css(style.text)}>Your Score:</p> 
				<p className={ css(style.text)}>{score}/{total}</p>
			</div>
		</Paper>
    );
};
