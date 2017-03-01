import * as types from '../../ActionTypes';

const requestPending = () => {
	return {
		type: types.LOADING_GUEST_CHANGES
	};
};

const addGuestSuccess = (guest) => {
	return {
		type: types.ADD_GUEST,
		guest
	};
};

const addGuestFailure = () => {
	return {
		type: types.ADD_GUEST_FAILURE
	};
};

const loadGuestsSuccess = (guests) => {
	return {
		type: types.UPLOAD_GUESTS,
		guests
	};
};

const loadGuestsFailure = (err) => {
	return {
		type: types.UPLOAD_GUESTS_FAILURE,
		err
	};
};

const deleteGuestSuccess = (_id) => {
	return {
		type: types.DELETE_GUEST,
		_id
	};
};

const deleteGuestFailure = (err) => {
	return {
		type: types.DELETE_GUEST_FAILURE,
		err
	};
};

// API
export const loadGuests = (token) => {
	return dispatch => {
		dispatch(requestPending());
		fetch('/api/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		})
		.then(res => res.json())
		.then(data => dispatch(loadGuestsSuccess(data.guests)))
		.catch(err => dispatch(loadGuestsFailure(err)));
	};
};

export const addGuest = (guest, token) => {
	return dispatch => {
		dispatch(requestPending());
		fetch('/api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			},
			body: JSON.stringify({ ...guest, access:"guest" })
		})
		.then(res => res.json())
		.then(data => {
			return data.success ?
				dispatch(addGuestSuccess(data.guest)) :
				dispatch(addGuestFailure(data))
		})
		.catch(err => {
			return dispatch(addGuestFailure(err));
		});
	};
};

export const clearGuests = () => {
	return {
		type: types.CLEAR_ADMIN_STATE
	};
};

export const deleteGuest = (_id, token) => {
	return dispatch => {
		dispatch(requestPending());
		fetch('/api/user/' + _id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		})
		.then(res => res.json())
		.then(data => {
			return data.success ?
				dispatch(deleteGuestSuccess(_id)) :
				dispatch(deleteGuestFailure(data));
		})
		.catch(err => {
			return dispatch(deleteGuestFailure(err));
		});
	};
};
