import React, { useContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';

import SectionContext from '../../contexts/SectionContext';
import News from './News';

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  `;

const H1 = styled.h1`
  width: 100%;
  padding-left: 2%;  
`;

const getNewsFromSection = (section, setNews) => {
  fetch(`${process.env.REACT_APP_NY_TIMES_URL}/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
    .then(res => res.json())
    .then(json => setNews(json.results))
    .catch(err => console.log(err)); // TODO: error
};

export default () => {
  const [news, setNews] = useState([]);
  const { section } = useContext(SectionContext);

  useEffect(() => {
    getNewsFromSection(section.api, setNews);
  }, [section]);

  return (
    <Main>
      <H1>{section.text}</H1>
      {news.map(result => (
        <News key={result.title} {...result} />
      ))}
    </Main>
  );
};
