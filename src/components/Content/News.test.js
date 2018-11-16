import React from 'react';
import { mount } from 'enzyme';

import News from './News';

describe('Section', () => {
  describe('Mounting Section', () => {
    const props = {
      title: 'TitleTest', published_date: 'PublishedDateTest', byline: 'Testman', kicker: 'kicktest', abstract: 'aabstest',
    };
    const news = mount(<News {...props} />);

    it('create the news as expected', () => {
      expect(news.find('#Title').text()).toEqual(props.title);
      expect(news.find('#ByLine').text()).toEqual(props.byline);
      expect(news.find('#PublishedDate').text()).toEqual(props.published_date);
      expect(news.find('#PublishedDate').text()).toEqual(props.published_date);
      expect(news.find('#Kicker').exists()).toBe(false);
    });

    it('onclick shows more information', () => {
      news.find('#Title').simulate('click');
      const kicker = news.find('#Kicker');
      const abstract = news.find('#Abstract');
      expect(kicker.exists()).toBeTruthy();
      expect(abstract.exists()).toBeTruthy();
      expect(kicker.text()).toEqual(props.kicker);
      expect(abstract.text()).toEqual(props.abstract);
    });

    it('onclick again hide kicker', () => {
      news.find('#Title').simulate('click');
      const abstract = news.find('#Abstract');
      const kicker = news.find('#Kicker');
      expect(abstract.exists()).toBeFalsy();
      expect(kicker.exists()).toBeFalsy();
    });
  });
});
