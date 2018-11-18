import React, { useReducer } from 'react';
import { produce } from 'immer';
import styled from 'styled-components';

import Menu from './components/menu';
import Content from './components/Content';
import SectionContext from './contexts/SectionContext';
import SectionsReducer, { SectionNames } from './reducers/Sections';

const Hr = styled.hr`
  border-color: black;
`;

function useImmerReducer(reducer, initialState) {
  return useReducer(produce(reducer), initialState);
}

export default () => {
  const [section, dispatch] = useImmerReducer(SectionsReducer, SectionNames.WORLD);

  return (
    <SectionContext.Provider value={{ section, dispatch }}>
      <Menu />
      <Hr />
      <Content />
    </SectionContext.Provider>
  );
};
