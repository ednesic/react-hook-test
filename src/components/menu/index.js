import React, { memo } from 'react';
import styled from 'styled-components';

import Section from './Section';
import { SectionNames } from '../../reducers/Sections';

const Header = styled.header`
  display: flex;
  justify-content: center;
  
`;

const Menu = () => (
  <Header>
    {Object
      .entries(SectionNames)
      .map(([
        sectionKey,
        sectionName,
      ]) => (<Section key={sectionKey} sectionKey={sectionKey} sectionName={sectionName.text} />))}
  </Header>
);
export default memo(Menu);
