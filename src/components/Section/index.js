import React from 'react';

//styles
import s from './Section.module.css';

const SectionCard = ({ children, bgColor }) => {
	const styleCover = { backgroundColor: `${bgColor}` };

	return (
		<div className={s.wrapp} style={styleCover}>
			{children}
		</div>
	);
}

export default SectionCard;