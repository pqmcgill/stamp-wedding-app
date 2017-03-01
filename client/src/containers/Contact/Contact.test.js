import React from 'react';
import { shallow } from 'enzyme';
import Contact from './';

it('renders without crashing', () => {
	shallow(<Contact />);
});
