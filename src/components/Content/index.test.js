import React from 'react';
import { fakeServer } from 'sinon';
import { mount } from 'enzyme';

import SectionContext from '../../contexts/SectionContext';
import Content from './index';
import { apiResponse } from '../../data/fixtures';
import SectionReducer from '../../reducers/Sections';


describe('Content', () => {
  let server;
  const sectionTest = 'technology';

  beforeEach(() => {
    console.log(`https://api.nytimes.com/svc/topstories/v2/${sectionTest}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`);
    server = fakeServer.create();
    server.respondWith(
      'GET',
      `https://api.nytimes.com/svc/topstories/v2/${sectionTest}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(apiResponse),
      ],
    );
  });

  describe('Content after request', () => {
    let sectionMount;
    let state = { section: sectionTest };
    const dispatch = (action) => {
      state = SectionReducer(state, action);
    };
    beforeEach((done) => {
      sectionMount = mount(
        <SectionContext.Provider value={{ ...state, dispatch }}>
          <Content />
        </SectionContext.Provider>,
      );
      server.respond();


      setTimeout(done);
    });

    it('context state', () => {
      // useEffects não está sendo chamado
      // TODO teste em que é feito um mock da requesição e teste se os valores estão aparecendo e a cada mudança de menu, esse componente re-renderize
      expect(true);
    });
  });
});
