import React, { Component } from 'react';

//styles
import s from './CardList.module.css';

//components
import Card from '../Card';

class CardList extends Component {
	state = {
		valueWord: '',
		valueTransletion: '',
	}

	inputRef = React.createRef();

	handleINputChange = (event) => {
		this.setState({
			valueWord: event.target.value,
		});
	}

	handleINputChangeTransletion = (event) => {
		this.setState({
			valueTransletion: event.target.value,
		});
	}

	handleSubmitForm = (event) => {
		event.preventDefault();
		this.setState({
			valueWord: '',
			valueTransletion: '',
		});
		this.handleAddNewWord();
	}

	handleAddNewWord = () => {
		const newWord = {
			eng: this.state.valueWord,
			rus: this.state.valueTransletion,
			id: this.props.item.length + 1,
		}
		this.props.item.push(newWord);
	}

	render() {
		const { inputRef } = this;

		const { item = [], onDeletedItem, inputFocus } = this.props;

		const { valueWord, valueTransletion } = this.state;

		return (
			<div className={s.wrapp}>
				<form
					className={s.form}
					onSubmit={(valueWord && valueTransletion) ? this.handleSubmitForm : (event) => {
						event.preventDefault();
						inputRef.current.focus();
					}}>

					<div className={s.inputWrapp}>
						<input
							ref={inputRef}
							type='text'
							value={valueWord}
							onChange={this.handleINputChange}
							placeholder='Enter word...' />

						<input
							ref={inputFocus}
							type='text'
							value={valueTransletion}
							onChange={this.handleINputChangeTransletion}
							placeholder='Enter translation...' />
					</div>

					<button>Create Card</button>
				</form>

				<div className={s.root}>
					{
						item.map(({ eng, rus, id }) => (
							<Card
								onDeleted={() => { onDeletedItem(id) }}
								key={id}
								eng={eng}
								rus={rus} />
						))
					}
				</div>
			</div>
		);
	}
}

export default CardList;