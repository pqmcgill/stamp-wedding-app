import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user';
import admin from './admin';

const rootReducer = combineReducers({
	user,
	form,
	admin
});

export default rootReducer;
