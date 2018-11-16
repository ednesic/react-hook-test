import React, { useState } from 'react';
import PropTypes from 'prop-types';

const News = (props) => {
  const {
    title,
    published_date,
    byline,
    kicker,
  } = props;
  const [showKicker, setKicker] = useState(false);

  return (
    <div role="article">
      <div role="presentation" onClick={() => { setKicker(!showKicker); }}>
        <h3 id="Title">{title}</h3>
        <div id="PublishedDate">{published_date}</div>
        <div id="ByLine">{byline}</div>
        { showKicker ? <p id="Kicker">{kicker}</p> : ''}
        <hr />
      </div>
    </div>
  );
};

News.defaultProps = {
  kicker: '',
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  published_date: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  kicker: PropTypes.string,
};

export default News;
