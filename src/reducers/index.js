import {combineReducers} from 'redux';
import teams from './teamReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	teams,
	ajaxCallsInProgress
});

export default rootReducer;