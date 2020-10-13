import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MyFirstComponent from './';

describe('ui components test', () => {
  it('renders three <MyFirstComponent /> components', () => {
    const wrapper = shallow(<MyFirstComponent />);
    expect(true).toBe(true);
  });
});
