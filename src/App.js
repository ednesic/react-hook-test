import React, { useReducer } from 'react';
import { produce } from 'immer';

import Menu from './components/menu';
import Content from './components/Content';
import SectionContext from './contexts/SectionContext';
import SectionsReducer from './reducers/Sections';

function useImmerReducer(reducer, initialState) {
  return useReducer(produce(reducer), initialState);
}

export default () => {
  const [section, dispatch] = useImmerReducer(SectionsReducer, 'world');

  return (
    <SectionContext.Provider value={{ section, dispatch }}>
      <Menu />
      <Content />
    </SectionContext.Provider>
  );
};
