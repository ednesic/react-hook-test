import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import SectionContext from '../../contexts/SectionContext';

const Section = (props) => {
  const { dispatch } = useContext(SectionContext);
  const { sectionName, sectionKey } = props;
  return (
    <Fragment>
      <button type="button" onClick={() => { dispatch({ type: sectionKey, sectionName }); }}>{sectionName}</button>
    </Fragment>
  );
};

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionKey: PropTypes.string.isRequired,
};

export default Section;
