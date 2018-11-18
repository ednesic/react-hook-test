import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionContext from '../../contexts/SectionContext';

const Button = styled.button`
  border: none;
  font-size: 12px;
  outline: none;
  &:not(:last-child) {
    border-right: 1px solid #cfcfcf;
}
`;

const Section = (props) => {
  const { dispatch } = useContext(SectionContext);
  const { sectionName, sectionKey } = props;
  return (
    <Button type="button" onClick={() => { dispatch({ type: sectionKey, sectionName }); }}>{sectionName}</Button>
  );
};

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionKey: PropTypes.string.isRequired,
};

export default Section;
