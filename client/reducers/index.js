import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import apis from './apis';
import goals from './goals';

const rootReducer = combineReducers({
	posts, 
	comments, 
	//goals,
	example: apis,
	routing: routerReducer });

export default rootReducer;