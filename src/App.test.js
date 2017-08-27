import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

it('renders App', () => {
    const wrapper = shallow(<App />);
    const textHeader = <h2>Welcome to React</h2>;
    expect(wrapper.contains(textHeader)).toEqual(true);
});
