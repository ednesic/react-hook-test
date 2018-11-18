import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TimeDiff from '../../utils/time';

const Article = styled.article`
  width: 29%;
  padding: 2%;
  border-right: 1px solid #999;
  &:nth-child(3n +1) {
    border-right: none;
  }
`;

const H3 = styled.h3`
  line-height: 1.875rem;
  font-weight: 700;
  font-style: normal;
  font-family: "cheltenham-normal-200",georgia,"times new roman",times,serif;
  &:hover {
    text-decoration: underline;
  }
`;

const P = styled.p`
  font-style: normal;
  font-family: "cheltenham-normal-200",georgia,"times new roman",times,serif;
`;

const Span = styled.span`
  color: #999;
  font-size: 0.6875rem;
`;

const SpanDivider = styled.span`
  border-radius: 1px;
  background-color: #999;
  width: 2px;
  height: 2px;
  display: inline-block;
  margin: 6px 5px 2px;
`;

const News = (props) => {
  const {
    title,
    published_date,
    byline,
    kicker,
    abstract,
  } = props;
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <Article onClick={() => { setShowMoreInfo(!showMoreInfo); }}>
      <H3 className="title">{title}</H3>
      { showMoreInfo ? <P className="kicker">{kicker}</P> : ''}
      { showMoreInfo ? <P className="abstract">{abstract}</P> : ''}
      <Span className="publishedDate">{TimeDiff(new Date(published_date))}</Span>
      <SpanDivider className="divider" />
      <Span className="byLine">{byline}</Span>
      <hr />
    </Article>
  );
};

News.defaultProps = {
  kicker: '',
  abstract: '',
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  published_date: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  abstract: PropTypes.string,
};

export default News;
