import React from 'react';
import { shallow } from 'enzyme';
import RSVPButton from './';
import styleTestHelper from '../../util/styleTestHelper';

styleTestHelper();

function setupComponent() {
	const props = {
		textAlignment: 'bottom',
		reminderText: 'Deadline to RSVP',
		deadlineText: 'May 27, 2017'
	};
	const wrapper = shallow(<RSVPButton { ...props } />);
	return {
		props,
		wrapper
	};
}

it('renders without crashing', () => {
	setupComponent();
});
