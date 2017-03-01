import React from 'react';
import { shallow, mount } from 'enzyme';
import FAQ from './';

import cssTestHelper from '../../util/styleTestHelper';
cssTestHelper();

it('renders without crashing', () => {
	shallow(<FAQ />);
});
