import React from 'react';
import { shallow } from 'enzyme';
import Actions from '../Actions';
import { fakeData } from '../../redux/fakeData';

const item = fakeData.containers[0];
const itemWithDeadStatus = fakeData.containers.find(it => it.status === 'dead');

describe('<Actions /> test', () => {
  test('should show 3 actions', () => {
    const component = shallow(<Actions item={item} index={0} updateStore={() => {}} />);
    expect(component.hasClass('actions')).toBeTruthy();
    expect(component.find('.action')).toHaveLength(3);
    expect(component).toMatchSnapshot();
  });
  test('should show only remove action', () => {
    const component = shallow(
      <Actions item={itemWithDeadStatus} index={0} updateStore={() => {}} />
    );
    expect(component.hasClass('actions')).toBeTruthy();
    expect(component.find('.action')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});
