import React from 'react';
import classnames from 'classnames';

//styles
import s from './Header.module.css';

const Header = ({ children, size = 'xl', color }) => {
	let sizePointer;
	switch (size) {
		case 'xl':
			sizePointer = 1;
			break;
		case 'l':
			sizePointer = 2;
			break;
		case 'm':
			sizePointer = 3;
			break;
		case 's':
			sizePointer = 4;
			break;
		case 'xs':
			sizePointer = 5;
			break;
		default:
			sizePointer = 1;
	}

	const styleCover = { color: `${color}` };

	return React.createElement(
		`h${sizePointer}`,
		{
			className: classnames(s.header, s[`size${size.toUpperCase()}`],),
			style: styleCover,
		},
		children,
	)
};

export default Header;