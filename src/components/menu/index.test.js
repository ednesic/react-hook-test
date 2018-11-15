import React from 'react';
import { shallow } from 'enzyme';

import { SectionNames } from '../../reducers/Sections';
import Menu from './index';

describe('Menu', () => {
  describe('Mounting category', () => {
    const menu = shallow(<Menu />);

    it('creates the number os expected menus', () => {
      expect(menu.find('Section').length).toEqual(Object.keys(SectionNames).length);
    });
  });
});
