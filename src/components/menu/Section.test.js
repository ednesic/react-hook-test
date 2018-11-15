import React from 'react';
import { mount } from 'enzyme';

import Section from './Section';

describe('Section', () => {
  describe('Mounting Section', () => {
    const sectionName = 'TestName';
    const sectionKey = 'TestKey';
    // cannot shallow component: https://github.com/facebook/react/issues/14091
    const section = mount(<Section sectionName={sectionName} sectionKey={sectionKey} />);

    it('create the section as expected', () => {
      expect(section.find('Section button').text()).toEqual(sectionName);
    });
  });
});
