import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <div role="article">
      <div role="presentation" onClick={() => { setShowMoreInfo(!showMoreInfo); }}>
        <h3 id="Title">{title}</h3>
        { showMoreInfo ? <p id="Kicker">{kicker}</p> : ''}
        <div id="PublishedDate">{published_date}</div>
        <div id="ByLine">{byline}</div>
        { showMoreInfo ? <p id="Abstract">{abstract}</p> : ''}
        <hr />
      </div>
    </div>
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
