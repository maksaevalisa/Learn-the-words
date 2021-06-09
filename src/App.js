import React, { Component } from 'react';

//styles
import './App.css';

//components
import BackgroundBlock from './components/BackgroundBlock';
import Button from './components/Button';
import CardList from './components/CardList';
import Header from './components/Header';
import Paragrapher from './components/Paragrapher';
import Section from './components/Section';

//img
import firstBackground from './assets/img/background.jpg';
import secondBackground from './assets/img/secondBackground.jpg';

//data
const wordList = [
	{
		eng: 'between',
		rus: 'между',
		id: 1,
	},
	{
		eng: 'high',
		rus: 'высокий',
		id: 2,
	},
	{
		eng: 'really',
		rus: 'действительно',
		id: 3,
	},
	{
		eng: 'something',
		rus: 'что-нибудь',
		id: 4,
	},
	{
		eng: 'most',
		rus: 'большинство',
		id: 5,
	},
	{
		eng: 'width',
		rus: 'ширина',
		id: 6,
	},
	{
		eng: 'another',
		rus: 'другой',
		id: 7,
	},
	{
		eng: 'much',
		rus: 'много',
		id: 8,
	},
	{
		eng: 'family',
		rus: 'семья',
		id: 9,
	},
	{
		eng: 'own',
		rus: 'личный',
		id: 10,
	},
	{
		eng: 'out',
		rus: 'из/вне',
		id: 11,
	},
	{
		eng: 'leave',
		rus: 'покидать',
		id: 12,
	},
];

class App extends Component {
	state = {
		wordArr: wordList,
	}

	inputRef = React.createRef();

	handleDeletedItem = (id) => {
		this.setState(({ wordArr }) => {
			const index = wordArr.findIndex(item => item.id === id);
			const newwordArr = [
				...wordArr.slice(0, index),
				...wordArr.slice(index + 1)
			];
			return {
				wordArr: newwordArr,
			}
		});
	}

	render() {
		const { wordArr } = this.state;

		return (
			<>
				<BackgroundBlock
					backgroundImg={firstBackground}
					fullHeight>

					<Header color='#ffffff'>
						Время учить слова онлайн
					</Header>

					<Paragrapher color='#ffffff'>
						Bспользуйте карточками для запоминания и пополнения активных словарных запасов
					</Paragrapher>
				</BackgroundBlock>

				<Section bgColor='#f0f0f0'>

					<Header size='l'>
						Начать учить английский просто
					</Header>

					<Paragrapher>
						Кликай по карточкам и узнавай новые слова, быстро и легко!<br />Создавай новые карточки!
					</Paragrapher>

					<CardList
						onDeletedItem={this.handleDeletedItem}
						item={wordArr}
						inputFocus={this.inputRef} />
				</Section>

				<BackgroundBlock
					backgroundImg={secondBackground}>
					<Header
						size='l'
						color='#ffffff'>
						Изучайте английский с персональным помощником
					</Header>

					<Paragrapher color='#ffffff'>
						Начни прямо сейчас
					</Paragrapher>

					<Button
						textcolor='#fff'
						handleInputFocus={() => {
							this.inputRef.current.focus();
						}}>
						Начать бeсплатный урок
					</Button>
				</BackgroundBlock>
			</>
		);
	}
}
export default App;
