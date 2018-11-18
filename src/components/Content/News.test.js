import React from 'react';
import { mount } from 'enzyme';

import News from './News';

describe('Section', () => {
  describe('Mounting Section', () => {
    const props = {
      title: 'TitleTest', published_date: new Date().toString(), byline: 'Testman', kicker: 'kicktest', abstract: 'aabstest',
    };
    const news = mount(<News {...props} />);

    it('create the news as expected', () => {
      expect(news.find('h3').text()).toEqual(props.title);
      expect(news.find('.byLine').first().text()).toEqual(props.byline);
      expect(news.find('.publishedDate').first().text()).toEqual('Just Now');
      expect(news.find('.kicker').exists()).toBe(false);
    });

    it('onclick shows more information', () => {
      news.find('h3').simulate('click');
      const kicker = news.find('.kicker').first();
      const abstract = news.find('.abstract').first();
      expect(kicker.exists()).toBeTruthy();
      expect(abstract.exists()).toBeTruthy();
      expect(kicker.text()).toEqual(props.kicker);
      expect(abstract.text()).toEqual(props.abstract);
    });

    it('onclick again hide kicker', () => {
      news.find('h3').simulate('click');
      const abstract = news.find('.abstract');
      const kicker = news.find('.kicker');
      expect(abstract.exists()).toBeFalsy();
      expect(kicker.exists()).toBeFalsy();
    });
  });
});
