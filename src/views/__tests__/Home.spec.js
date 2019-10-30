import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../Home';

const location = { pathname: '/dashboard/' };

describe('<Home /> test', () => {
  test('should render correctly', () => {
    const component = shallow(<Home location={location} />);
    expect(component.find('Content')).toHaveLength(1);
    expect(component.hasClass('home')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
