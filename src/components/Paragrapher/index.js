import React from 'react';
import classnames from 'classnames';

//styles
import s from './Paragrapher.module.css';

const Paragrapher = ({ children, color, small = false, lead = false }) => {
	const styleCover = { color: `${color}` };

	return (
		<p
			className={classnames(s.paragraph, {
				[s.small]: small,
				[s.lead]: lead,
			})}
			style={styleCover}
		>
			{children}
		</p>
	);
};

export default Paragrapher;