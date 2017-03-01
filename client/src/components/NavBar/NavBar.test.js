import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './';
import styleTestHelper from '../../util/styleTestHelper';

styleTestHelper();

it('renders without crashing', () => {
	shallow(<NavBar />);
});

