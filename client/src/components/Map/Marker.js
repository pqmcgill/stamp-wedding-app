import React from 'react';
import { css } from 'aphrodite';
import style from './Marker.style.js';

export default () => (
	<div>
		<div className={ css(style.marker) } />
		<div className={ css(style.pulse) } />
	</div>
);
