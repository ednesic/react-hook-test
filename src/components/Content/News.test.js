import React from 'react';
import { mount } from 'enzyme';

import News from './News';

describe('Section', () => {
  describe('Mounting Section', () => {
    const props = {
      title: 'TitleTest', published_date: 'PublishedDateTest', byline: 'Testman', kicker: 'kicktest',
    };
    const news = mount(<News {...props} />);

    it('create the news as expected', () => {
      expect(news.find('#Title').text()).toEqual(props.title);
      expect(news.find('#ByLine').text()).toEqual(props.byline);
      expect(news.find('#PublishedDate').text()).toEqual(props.published_date);
      expect(news.find('#PublishedDate').text()).toEqual(props.published_date);
      expect(news.find('#Kicker').exists()).toBe(false);
    });

    it('onclick shows kicker', () => {
      news.find('#Title').simulate('click');
      const kicker = news.find('#Kicker');
      expect(kicker.exists()).toBeTruthy();
      expect(kicker.text()).toEqual(props.kicker);
    });

    it('onclick again hide kicker', () => {
      news.find('#Title').simulate('click');
      const kicker = news.find('#Kicker');
      expect(kicker.exists()).toBeFalsy();
    });
  });
});
