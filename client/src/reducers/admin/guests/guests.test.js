import * as types from '../../../ActionTypes';
import { all, byId, loading } from './';

const initialAll = [];
const initialById = {};
const initialLoading = false;

it('should return an initial default state', () => {
	const action = { type: '@@INIT' };
	const prevState = undefined;
	const nextById = byId(prevState, action);
	const nextAll = all(prevState, action);
	const nextLoading = loading(prevState, action);
	expect(nextById).toEqual(initialById);
	expect(nextAll).toEqual(initialAll);
	expect(nextLoading).toEqual(initialLoading);
});

it('should respond to ADD_GUEST by adding a guest object to the state', () => {
	const action = { 
		type: types.ADD_GUEST,
		guest: {
			_id: 'abc123',
			name: 'user1',
			password: 'pass1',
			plusOne: 'myWife',
			affiliation: 'PAT_FRIEND'
		}
	};
	const prevById = initialById;
	const prevAll = initialAll;
	const expectedById = {
		'abc123': action.guest
	};
	const expectedAll = [ 'abc123' ];
	const nextById = byId(prevById, action);
	const nextAll = all(prevAll, action);
	expect(nextById).toEqual(expectedById);
	expect(nextAll).toEqual(nextAll);
});

it('should respond to EDIT_GUEST by editing the guest with the given id', () => {
	const action = {
		type: types.EDIT_GUEST,
		guest: {
			_id: 'abc123',
			name: 'user2',
			password: 'pass2',
			plusOne: 'myHusband',
			affilliation: 'SAM_FRIEND'
		}
	};
	const prevById = {
		'abc123': { 
			_id: 'abc123', 
			name: 'user1', 
			password: 'pass1', 
			plusOne: 'myWife', 
			affilliation: 'PAT_FRIEND' }
	};
	const prevAll = [ 'abc123' ];
	const expectedById = {
		'abc123': action.guest
	};
	const expectedAll = prevAll;
	const nextById = byId(prevById, action);
	const nextAll = all(prevAll, action);
	expect(nextById).toEqual(expectedById);
	expect(nextAll).toEqual(expectedAll);
});

it('should respond to DELETE_GUEST by removing that guest from state', () => {
	const action = {
		type: types.DELETE_GUEST,
    _id: '123'
  };
	const prevById = {
		'123': {
			_id: '123',
			name: 'Pat'
		}
	};
	const prevAll = [ '123' ]
	const expectedById = initialById;
	const expectedAll = initialAll;
	const nextById = byId(prevById, action);
	const nextAll = all(prevAll, action);
	expect(nextById).toEqual(expectedById);
	expect(nextAll).toEqual(expectedAll);
});

it('should respond to LOADING_GUEST_CHANGES by setting loading state to true', () => {
	const action = {
		type: types.LOADING_GUEST_CHANGES
	};
	const prevLoading = initialLoading;
	const expectedLoading = true;
	const nextLoading = loading(prevLoading, action);
	expect(nextLoading).toEqual(expectedLoading);
});

it('should flip loading state to false for any other Guest action type', () => {
	const nonLoadingTypes = ['ADD_GUEST','ADD_GUEST_FAILURE','DELETE_GUEST','DELETE_GUEST_FAILURE','EDIT_GUEST','EDIT_GUEST_FAILURE','UPLOAD_GUESTS','UPLOAD_GUESTS_FAILURE'];
	nonLoadingTypes.forEach(type => {
		const action = { type, guest: { _id: '123' }};
		const prevState = true;
		const expectedState = false;
		const nextState = loading(prevState, action);
		expect(nextState).toEqual(expectedState);
	});
});

it('should respond to unknown action type by returning state as is', () => {
	const action = {
		type: types.UNKNOWN,
		guest: { _id: '12345' }
	};
	const nextById = byId(initialById, action);
	const nextAll = all(initialAll, action);
	const nextLoading = loading(initialLoading, action); 
	expect(nextById).toEqual(initialById);
	expect(nextAll).toEqual(initialAll);
	expect(nextLoading).toEqual(initialLoading);
});
