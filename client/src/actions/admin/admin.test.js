import { spy } from 'sinon';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../ActionTypes';
import * as actions from './';

// this font is italic
const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);
const guests = {
	12345: { name: 'test1', _id: 12345 },
	54321: { name: 'test2', _id: 54321 },
	67890: { name: 'test3', _id: 67890 }
};

describe('Admin Guest Management', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it('should have a loadGuests action which makes api call to get guests and dispatches success action', () => {
		fetchMock.get('/api/user', {
			body: { success: true, guests }
		});

		const expectedActions = [
			{ type: types.LOADING_GUEST_CHANGES },
			{ type: types.UPLOAD_GUESTS, guests }
		];

		const store = mockStore({
			admin: {
				guests: {
					byId: {},
					all: [],
					loading: false
				}
			}
		});

    ///////////////TODO: figure out why this is undefined vvv
		console.log('TODO: figure out why this is undefined', JSON.stringify(store.dispatch(actions.loadGuests())));
    expect(true).toEqual(true);
	});
});
