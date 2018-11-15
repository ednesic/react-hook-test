import React, { Fragment } from 'react';

import Section from './Section';
import { SectionNames } from '../../reducers/Sections';

const Menu = () => (
  <Fragment>
    {Object
      .entries(SectionNames)
      .map(([
        sectionKey,
        sectionName,
      ]) => (<Section key={sectionKey} sectionKey={sectionKey} sectionName={sectionName} />))}
  </Fragment>
);
export default Menu;
