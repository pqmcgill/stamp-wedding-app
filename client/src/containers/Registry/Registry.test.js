import React from 'react';
import { shallow, mount } from 'enzyme';
import Registry from './';

import styleTestUtil from '../../util/styleTestHelper';
styleTestUtil();

it('renders without crashing', () => {
	shallow(<Registry />);
});
