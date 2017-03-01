import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './';
import styleSheetHelper from '../../util/styleTestHelper';

styleSheetHelper();

it('renders without crashing', () => {
	shallow(<App />);
});
