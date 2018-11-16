import React from 'react';
import { mount } from 'enzyme';
import SectionContext from '../../contexts/SectionContext';

import Section from './Section';

describe('Section', () => {
  const sectionName = 'TestName';
  const sectionKey = 'TestKey';
  describe('Mounting Section', () => {
    // cannot shallow component: https://github.com/facebook/react/issues/14091
    const section = mount(<Section sectionName={sectionName} sectionKey={sectionKey} />);

    it('create the section as expected', () => {
      expect(section.find('Section button').text()).toEqual(sectionName);
    });
  });

  describe('click dispatch', () => {
    const dispatch = jest.fn();
    const section = mount(
      <SectionContext.Provider value={{ dispatch }}>
        <Section sectionName={sectionName} sectionKey={sectionKey} />
      </SectionContext.Provider>,
    );
    section.find('Section button').simulate('click');
    it('expect to trigger dispatch', () => {
      expect(dispatch.mock.calls.length).toEqual(1);
    });
  });
});
