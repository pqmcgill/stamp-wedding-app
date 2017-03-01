import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ConnectedGuestManagement, { GuestManagement } from './';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'; 
const mockStore = configureMockStore([ thunk ]);

function setupComponent() {
  const props = {
    token: 'JWT 12345',
    guests: [{ username: 'foo', _id: 1 }, { username: 'bar', _id: 2 }],
    addGuest: spy(),
    loadGuests: spy(),
    deleteGuest: spy()
  };
  const wrapper = shallow(<GuestManagement { ...props } />);
  return {
    props,
    wrapper
  };
}

it('renders without crashing', () => {
  setupComponent();
});

it('should render a list of guest names', () => {
  const { wrapper } = setupComponent();
  const list = wrapper.find('TableBody > TableRow');
  expect(list.length).toBe(2);
  expect(list.contains('foo')).toBe(true);
  expect(list.contains('bar')).toBe(true);
});

it('should call deleteGuest when delete button is clicked', () => {
  const { wrapper, props } = setupComponent();
  expect(props.deleteGuest.callCount).toBe(0);
  wrapper.find('button.delete').first().simulate('click');
  expect(props.deleteGuest.callCount).toBe(1);
  expect(props.deleteGuest.calledWith(1)).toBe(true);
});

it('should call loadGuests initially', () => {
  const { props } = setupComponent();
  expect(props.loadGuests.calledOnce).toBe(true);
});
