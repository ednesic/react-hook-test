import React from 'react';
import TestRenderer from 'react-test-renderer';

import Section from './Section';
import { SectionNames } from '../../reducers/Sections';
import Menu from './index';

describe('Menu', () => {
  describe('Mounting category', () => {
    const menu = TestRenderer.create(<Menu />);

    it('creates the number os expected menus', () => {
      expect(menu.root.findAllByType(Section).length).toEqual(Object.keys(SectionNames).length);
    });
  });
});
