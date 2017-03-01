import { spy } from 'sinon';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as types from '../../ActionTypes';
import * as actions from './';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);
const user = {
  id: '12345',
  username: 'Pat',
  password: 'foo',
  guestConfirmation: false,
  plusOneConfirmation: false
};

describe('RSVP', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should have update user action which makes successful api call to update the user', () => {
    const success_res = {
      success: true,
      updatedUser: {
        username: 'Pat',
        password: 'foo',
        guestConfirmation: true,
        plusOneConfirmation: false
      }
    };

    const fieldsToUpdate = {
      guestConfirmation: false,
      plusOneConfirmation: false
    };

    fetchMock.put(`/api/user/12345`, {
      body: success_res
    });

    const expectedActions = [
      { type: types.UPDATE_USER_PENDING },
      { type: types.UPDATE_USER_SUCCESS, udpated: success_res.updated }
    ];

    const store = mockStore({ user });
    return store.dispatch(actions.updateUser(user.id, fieldsToUpdate))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

  });

  it('should dispatch failure actions for unsuccessful api call', () => {
    const failure_res = {
      success: false,
      err: 'whoops!'
    };

    const fieldsToUpdate = {
      foo: 'bar'
    };

    fetchMock.put(`/api/user/12345`, {
      body: failure_res
    });

    const expectedActions = [
      { type: types.UPDATE_USER_PENDING },
      { type: types.UPDATE_USER_FAILURE, err: failure_res }
    ];

    const store = mockStore({ user });
    return store.dispatch(actions.updateUser(user.id, fieldsToUpdate))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
