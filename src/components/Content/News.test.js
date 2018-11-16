import React from 'react';
import { shallow } from 'enzyme';

import News from './News';

describe('Section', () => {
  describe('Mounting Section', () => {
    const props = {
      title: 'TitleTest', published_date: 'PublishedDateTest', byline: 'Testman',
    };
    const news = shallow(<News {...props} />);

    it('create the news as expected', () => {
      expect(news.find('#Title').text()).toEqual(props.title);
      expect(news.find('#ByLine').text()).toEqual(props.byline);
      expect(news.find('#PublishedDate').text()).toEqual(props.published_date);
    });
  });
});
