import React from 'react';
import PropTypes from 'prop-types';

const News = (props) => {
  const { title, published_date, byline } = props;
  return (
    <div>
      <div id="Title">{title}</div>
      <div id="PublishedDate">{published_date}</div>
      <div id="ByLine">{byline}</div>
      <hr />
    </div>
  );
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  published_date: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
};

export default News;
