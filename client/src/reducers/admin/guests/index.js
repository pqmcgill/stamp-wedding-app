import { combineReducers } from 'redux';
import * as types from '../../../ActionTypes';

export const byId = (state = {}, action) => {
	const { guest, guests, _id } = action;
	switch(action.type) {
		case types.LOGOUT_SUCCESS:
		case types.CLEAR_ADMIN_STATE:
			return {};
		case types.UPLOAD_GUESTS:
			return guests
		case types.ADD_GUEST:
		case types.EDIT_GUEST:
			return { ...state, [guest._id]: guest };

		case types.DELETE_GUEST:
			const newState = Object.keys(state)
				.filter(key => key !== _id)
				.reduce((next, guestId) => {
					return { ...next, [guestId]: state[guestId] };
				}, {});
			return newState;
		default: return state;
	}
};

export const all = (state = [], action) => {
	switch(action.type) {
		case types.LOGOUT_SUCCESS:
		case types.ADD_GUEST_FAILURE:
		case types.CLEAR_ADMIN_STATE:
			return [];

		case types.ADD_GUEST:
			return [ ...state, action.guest._id ];

		case types.DELETE_GUEST:
      return state.filter(id => id !== action._id);

    case types.UPLOAD_GUESTS:
      return Object.keys(action.guests);

		default: return state;
	}
};

export const loading = (state = false, action) => {
	switch(action.type) {
		case types.LOGOUT_SUCCESS:
		case types.CLEAR_ADMIN_STATE:
		case types.ADD_GUEST:
		case types.ADD_GUEST_FAILURE:
		case types.DELETE_GUEST:
		case types.DELETE_GUEST_FAILURE:
		case types.EDIT_GUEST:
		case types.EDIT_GUEST_FAILURE:
		case types.UPLOAD_GUESTS:
		case types.UPLOAD_GUESTS_FAILURE:
			return false;
		case types.LOADING_GUEST_CHANGES:
			return true;
		default: return state;
	}
};

export default combineReducers({
	loading,
	byId,
	all
});
