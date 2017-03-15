import React from 'react';
import { shallow } from 'enzyme';
import { ContactForm } from './';

import styleTestUtil from '../../util/styleTestHelper';
styleTestUtil();

it('renders without crashing', () => {
	shallow(<ContactForm />);
});
