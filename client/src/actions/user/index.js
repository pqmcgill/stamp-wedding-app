import * as types from '../../ActionTypes';

const loginSuccess = user => {
	return {
		type: types.LOGIN_SUCCESS,
		user
	};
};

const loginFailure = () => {
	return {
		type: types.LOGIN_FAILURE
	};
};

const loginPending = () => {
	return {
		type: types.LOGIN_PENDING
	};
};

const updateUserSuccess = updatedUser => {
  return {
    type: types.UPDATE_USER_SUCCESS,
    updatedUser
  };
};

const updateUserFailure = err => {
  return {
    type: types.UPDATE_USER_FAILURE,
    err
  };
};

const updateUserPending = () => {
  return {
    type: types.UPDATE_USER_PENDING
  };
};

export const login = (username, password) => {
	return dispatch => {
		dispatch(loginPending());
		return fetch('/api/user/authenticate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		})
		.then(res => res.json())
		.then(data => {
			console.log('here');
			if (data.success) {
				return dispatch(loginSuccess(data.user));
			} else {
				throw new Error(data.msg);
			}
		})
		.catch(err => {
			return dispatch(loginFailure());
		});
	};
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const updateUser = (userId, newUser, token) => {
  return dispatch => {
    dispatch(updateUserPending());
    return fetch(`/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        return data.success ?
          dispatch(updateUserSuccess(data.updated)) :
          dispatch(updateUserFailure(data));
      })
      .catch(err => dispatch(updateUserFailure(err)));
  };
};
