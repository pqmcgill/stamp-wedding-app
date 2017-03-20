import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user';
import admin from './admin';
import quiz from './quiz';

const rootReducer = combineReducers({
	user,
	form,
	admin,
	quiz
});

export default rootReducer;
