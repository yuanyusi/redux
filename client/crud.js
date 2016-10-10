// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import Employees from './components/Employees';
import PhotoGrid from './components/PhotoGrid';
import Goals from './components/Goals';

// import react router deps
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import createBrowserHistory from 'history';
import store, { history } from './store';
//import store from './store';

import configureStore from './store';
import {fetchData} from './actions/actionCreators';
//const store = configureStore();

//const history = new createBrowserHistory();

function loadData() {
	//store.dispatch(fetchData('http://localhost:8080/api/employees'));
	store.dispatch(fetchData('http://localhost:8080/goals'));
};

const router = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Goals}> </IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
				<Route path="employees" component={Employees} onEnter={loadData}></Route>
				<Route path="goals" component={Goals} onEnter={loadData}></Route>
				<Route path="photoGrid" component={PhotoGrid}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));
