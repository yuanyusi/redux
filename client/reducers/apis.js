import * as types from '../actions/actionTypes';

function apis(state = {
	isLoading: false,
	data: [],
	error: false}
, action = null) {
	const i = action.index;
	switch(action.type) {
		case types.RECV_ERROR:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
		case types.RECV_DATA:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
			//return action.data;
		case types.REQ_DATA:
			return Object.assign({}, state, {isLoading: true, error: false });
		case 'SUCCESS_GOAL':
		//var editedArray = state.data[i].successes;
		//editedArray.push(new Date());
		//console.log(new Date().getTime());
		
 /*       return [
          ...state.data.slice(0,i), // before the one we are updating
          {...state.data[i], successes: editedArray},
          ...state.data.slice(i + 1), // after the one we are updating
        ]
*/
			return {
				...state,
				data: [
				  ...state.data.slice(0, i),
				  Object.assign({}, state.data[i], action.json),
				  ...state.data.slice(i + 1)
				]
			}
		case 'ADD_GOAL':
			// return the new state with the new comment
			state.data.push(action.json);
			return {
				...state,
				/*data: [
				  ...state.data.slice(0, i),
				  Object.assign({}, state.data[i], action.data),
				  ...state.data.slice(i + 1)
				]*/
			}
		default:
			return state;
	}
};

export default apis;