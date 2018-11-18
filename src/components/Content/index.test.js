import React from 'react';
import TestRenderer from 'react-test-renderer';
import nock from 'nock';

import SectionContext from '../../contexts/SectionContext';
import Content from './index';
import News from './News';
import { apiTechResponse, apiWorldResponse } from '../../data/fixtures';
import SectionReducer from '../../reducers/Sections';


describe('Content', () => {
  const sectionTest1 = { api: 'technology', text: 'Technology' };
  const sectionTest2 = { api: 'world', text: 'World' };
  let sectionMount;
  let state = { section: sectionTest1 };

  const dispatch = (action) => {
    state = SectionReducer(state, action);
  };

  beforeEach(() => {
    process.env.REACT_APP_NY_TIMES_URL = 'http://mockTestnytimes.com';
    nock(process.env.REACT_APP_NY_TIMES_URL)
      .get(`/svc/topstories/v2/${sectionTest1.api}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
      .reply(200, apiTechResponse);
    nock(process.env.REACT_APP_NY_TIMES_URL)
      .get(`/svc/topstories/v2/${sectionTest2.api}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
      .reply(200, apiWorldResponse);
  });

  describe('Content after request', () => {
    beforeEach((done) => {
      sectionMount = TestRenderer.create(
        <SectionContext.Provider value={{ ...state, dispatch }}>
          <Content />
        </SectionContext.Provider>,
      );
      sectionMount.update(
        <SectionContext.Provider value={{ ...state, dispatch }}>
          <Content />
        </SectionContext.Provider>,
      );

      setTimeout(done, 1000); // unfortunate timeout due mock server
    });

    it('Mounted all news', () => {
      expect(sectionMount.root.findAllByType(News).length).toEqual(apiTechResponse.results.length);
    });

    it('Mount all news on section change', () => {
      state = { section: sectionTest2 };
      sectionMount.update(
        <SectionContext.Provider value={{ ...state, dispatch }}>
          <Content />
        </SectionContext.Provider>,
      );
      expect(sectionMount.root.findAllByType(News).length)
        .toEqual(apiWorldResponse.results.length);
    });
  });
});
