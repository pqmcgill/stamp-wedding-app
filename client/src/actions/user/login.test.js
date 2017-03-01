import { spy } from 'sinon';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../ActionTypes';
import * as actions from './';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);
const user = { name: 'Pat', password: 'foo' };
const success_res = { name: 'Pat', access: 'admin', token: 'abc' };
const failure_res = { success: false };

describe('User', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it('should have login action which makes successful api call to get user data dispatches success action', () => {
		fetchMock.post('/api/user/authenticate', {
			body: { success: true, user: success_res }
		});

		const expectedActions = [
			{ type: types.LOGIN_PENDING },
			{ type: types.LOGIN_SUCCESS, user: success_res }
		];

		const store = mockStore({ user: null });
		return store.dispatch(actions.login(user.name, user.password))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it('should dispatch login failure action upon unauthorized call', () => {
		fetchMock.post('/api/user/authenticate', {
			status: 401,
			body: { success: false }
		});

		const expectedActions = [
			{ type: types.LOGIN_PENDING },
			{ type: types.LOGIN_FAILURE }
		];

		const store = mockStore({ user: null });
		return store.dispatch(actions.login(user.name, user.password))
			.catch(() => {
				console.log('here');
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it('should dispatch login failure action upon server error', () => {
		fetchMock.post('/api/user/authenticate', {
			status: 500,
			throws: { msg: 'internal server error' }
		});

		const expectedActions = [
			{ type: types.LOGIN_PENDING },
			{ type: types.LOGIN_FAILURE }
		];

		const store = mockStore({ user: null });
		return store.dispatch(actions.login(user.name, user.password))
			.catch(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});
});
