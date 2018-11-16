import React, {
  Fragment, useContext, useState, useEffect,
} from 'react';
import fetch from 'isomorphic-fetch';

import SectionContext from '../../contexts/SectionContext';
import News from './News';

const getNewsFromSection = (section, setNews) => {
  console.log(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`);
  fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
    .then(res => res.json())
    .then(json => setNews(json.results))
    .catch(err => console.log(err)); // TODO: error
};

export default () => {
  const [news, setNews] = useState([]);
  const { section } = useContext(SectionContext);

  useEffect(() => {
    getNewsFromSection(section, setNews);
  }, [section]);

  return (
    <Fragment>
      {news.map(result => (
        <News key={result.title} {...result} />
      ))}
    </Fragment>
  );
};
