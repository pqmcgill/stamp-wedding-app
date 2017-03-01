import * as types from '../../ActionTypes';

const statuses = {
	UNAUTH:  'UNAUTH',
	AUTH:    'AUTH',
	PENDING: 'PENDING'
};

const unauthState = { status: statuses.UNAUTH, access: 'guest' };

export default (state = unauthState, action) => {
	switch(action.type) {
		case types.LOGIN_SUCCESS:
			return {
				...action.user,
				status: statuses.AUTH
			};
		case types.LOGIN_PENDING:
			return {
				status: statuses.PENDING
			};
		case types.UNAUTHORIZED:
		case types.LOGIN_FAILURE:
    case types.LOGOUT:
			return unauthState;

    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        ...action.updatedUser
      };

		default: return state;
	}
};
