import React from 'react';
import classnames from 'classnames';

//style
import s from './Button.module.css';

class Button extends React.Component {
	state = {
		click: false
	}

	handleCardClick = () => {
		this.setState(state => ({
			click: !state.click,
		}));
	}

	render() {

		const { children, textcolor, handleInputFocus } = this.props

		const styleCover = this.state.click ? { color: '#000000' } : { color: `${textcolor}` };

		const { click } = this.state;

		return (
			<button
				className={classnames(s.wrapp, { [s.click]: click })}
				style={styleCover}
				onClick={this.handleCardClick, handleInputFocus}
			>
				{children}
			</button>
		);
	}
}

export default Button;