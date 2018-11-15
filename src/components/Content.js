import React, { Fragment, useContext } from 'react';
import SectionContext from '../contexts/SectionContext';

export default () => {
  const { section } = useContext(SectionContext);
  return (
    <Fragment>
      {section}
    </Fragment>
  );
};
