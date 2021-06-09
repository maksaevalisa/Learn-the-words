import React from 'react';
import styles from './testApp.module.css';

const data = [
	{
		id: 1,
		title: 'React',
		subtitle: 'Библиотека для создания пользовательских интерфейсов',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		id: 2,
		title: 'Angular',
		subtitle: 'Один фреймвор',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',
	}
]

const ImageCounter = ({ count, imageUrl, onCount }) => {
	return (
		<div className={styles.imageCounter}>
			<div className={styles.count}>{count}</div>
			<img src={imageUrl} onClick={onCount} />
		</div>
	);
}

class Hero extends React.Component {
	state = {
		count: 0,
	}

	handleCLick = () => {
		this.setState(state => ({
			count: ++state.count,
		}));
	}

	render() {
		const { count } = this.state;
		const { imageUrl, title, subtitle } = this.props;

		return (
			<div className={styles.container}>
				<ImageCounter
					count={count}
					imageUrl={imageUrl}
					onCount={this.handleCLick} />

				<h1>{title}</h1>

				<p>{subtitle}</p>
			</div>
		);
	}
}

class AppTest extends React.Component {
	render() {
		return (
			<div>
				{data.map((hero) => {
					return <Hero
						key={hero.id}
						title={hero.title}
						subtitle={hero.subtitle}
						imageUrl={hero.imageUrl} />
				})}
			</div>
		);
	}
}

export default AppTest;

// const Hero = React.createClass({

// 	getInitialState: function () {
// 		return {
// 			count: 0,
// 		}
// 	},

// 	handleCLick: function () {
// 		console.log('click');
// 		this.setState({count: ++this.state.count });
// 	},

// 	render: function () {
// 		return (
// 			<div className={styles.container}>
// 				<div className={styles.count}>{this.state.count}</div>
// 				<img src={this.props.imageUrl} onClick={this.handleCLick} />
// 				<h1>{this.props.title}</h1>
// 				<p>{this.props.subtitle}</p>
// 			</div>
// 		);
// 	}
// });



