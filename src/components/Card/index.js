import React from 'react';

//
import classnames from 'classnames';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

//styles
import s from './Card.module.css';

class Card extends React.Component {

	state = {
		done: false,
		isRemembered: false,
		isRememberedIcon: false,
	}

	handleCardClick() {
		this.setState(({ done }) => { //говорит, что состояние этого компонента только что поменяло, надо его перерендерить => render()
			return {
				done: !done,
			}
		});
	}

	handleIsRememberClick() {
		this.setState(({ isRemembered, isRememberedIcon }) => {
			return {
				isRemembered: !isRemembered,
				isRememberedIcon: !isRememberedIcon,
			}
		});
	}

	handleDeletedClick() {
		this.props.onDeleted();
	}

	render() {
		const { eng, rus } = this.props;
		const { done, isRemembered, isRememberedIcon } = this.state;

		const cardClass = [s.card];
		if (done) {
			cardClass.push(s.done);
		}

		return (
			<div className={s.root}>
				<div
					className={classnames(s.card, {
						[s.done]: done,
						[s.isRemembered]: isRemembered,
					})}
					onClick={() => this.handleCardClick()} //внутри стрелочной функции контекстом вызова this будет то, что и было снаружи
				>
					<div className={s.cardInner}>
						<div className={s.cardFront}>
							{eng}
						</div>

						<div className={s.cardBack}>
							{rus}
						</div>
					</div>
				</div >

				<div
					className={classnames(s.icons, {
						[s.isRememberedIcon]: isRememberedIcon,
					})}>
					<CheckSquareOutlined onClick={() => this.handleIsRememberClick()} />
				</div>

				<div className={classnames(s.icons, s.iconDel)}>
					<DeleteOutlined onClick={() => this.handleDeletedClick()} />
				</div>
			</div>
		)
	}
}

export default Card;