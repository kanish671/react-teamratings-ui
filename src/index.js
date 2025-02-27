import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/index.css';
import routes from './routes';
import App from './components/App';
import {loadTeams} from './actions/teamActions';
import configureStore from './store/ConfigureStore';
import * as serviceWorker from './utility/serviceWorker';

const store = configureStore();
store.dispatch(loadTeams());

ReactDOM.render(
	<Provider store = {store}>
		<BrowserRouter>
			<Route path = "/" component = {App} />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
