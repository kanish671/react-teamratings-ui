import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Filters from './Filters';
import Graphs from './Graphs';
import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<img src={logo} className="app-logo" alt="logo" />
				<header className="app-header">
					<p>
					r/coys rating of players
					</p>
				</header>
				<Filters></Filters>
				<Graphs></Graphs>
			</div>
		);
	}
}

export default App;
