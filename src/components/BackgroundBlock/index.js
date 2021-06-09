import React from 'react';
import s from './Background.module.css';

const BackgroundBlock = ({ children, backgroundImg, fullHeight = false }) => {
	const styleCover = { backgroundImage: `url(${backgroundImg})` };

	if (fullHeight) {
		styleCover.height = '10px';
	}

	return (
		<div className={s.cover} style={styleCover}>
			<div className={s.wrap}>
				{children}
			</div>
		</div>
	)
}

export default BackgroundBlock;