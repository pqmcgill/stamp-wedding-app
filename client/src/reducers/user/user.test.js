import * as types from '../../ActionTypes';
import users from './';

const unauthState = { status: 'UNAUTH', access: 'guest' };

it('should be defined', () => {
	expect(users).not.toBe(undefined);
});

it('should initialize state if left undefined', () => {
	const action = { type: '@@INIT' };
	const nextState = users(undefined, action);
	expect(nextState).toEqual(unauthState);
});

it('should subscribe to LOGIN_SUCCESS and add user details', () => {
	const prevState = { status: 'PENDING' };
	const action = {
		type: 'LOGIN_SUCCESS',
		user: {
			name: 'Pat',
			access: 'admin',
			token: '123ABC'
		}
	};
	const expectedState = {
		...action.user,
		status: 'AUTH'
	};
	const nextState = users(prevState, action);
	expect(nextState).toEqual(expectedState);
});

it('should subscribe to LOGIN_PENDING and update user status', () => {
	const prevState = unauthState;
	const action = {
		type: 'LOGIN_PENDING'
	};
	const expectedState = {
		status: 'PENDING'
	};
	const nextState = users(prevState, action);
	expect(nextState).toEqual(expectedState);
});

it('should subscribe to LOGIN_FAILURE and update user status', () => {
	const prevState = { status: 'PENDING' };
	const action = {
		type: 'LOGIN_FAILURE'
	};
	const nextState = users(prevState, action);
	expect(nextState).toEqual(unauthState);
});

it('should subscribe to LOGOUT which returns to initial state', () => {
  const prevState = { status: 'AUTH', username: 'Patrick' };
  const action = {
    type: 'LOGOUT'
  };
  const nextState = users(prevState, action);
  expect(nextState).toEqual(unauthState);
});

it('should subscribe to UPDATE_USER_SUCCESS and update user accordingly', () => {
  const prevState = { username: 'Pat', plusOneConfirmation: true, guestConfirmation: false };
  const action = {
    type: 'UPDATE_USER_SUCCESS',
    updatedUser: { username: 'Pat', plusOneConfirmation: false, guestConfirmation: true }
  };
  const nextState = users(prevState, action);
  expect(nextState).toEqual(action.updatedUser);
});

it('should subscribe to UPDATE_USER_FAILURE and not update user accordingly', () => {
  const prevState = { username: 'Pat', plusOneConfirmation: true, guestConfirmation: false };
  const action = {
    type: 'UPDATE_USER_FAILURE',
    err: 'whoops!'
  };
  const nextState = users(prevState, action);
  expect(nextState).toEqual(prevState);
});
