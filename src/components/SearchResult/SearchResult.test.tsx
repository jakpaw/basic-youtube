import { shallow } from 'enzyme';
import { selectVideo } from 'features/selectVideo/selectVideoSlice';
import React from 'react';
import { mockVideoProperties } from 'testMocks';
import { MockStore, setupMockStore } from 'testUtils';
import SearchResult from './SearchResult';

let store: MockStore;

beforeEach(() => {
  store = setupMockStore();
});

test('SearchResult shows video thumbnail and title', () => {
  const searchResult = shallow(<SearchResult videoProperties={mockVideoProperties} />);

  const img = searchResult.find('img');
  expect(img.exists()).toBe(true);
  expect(img.prop('src')).toBe('testThumbnailUrl');

  expect(searchResult.text()).toBe('test title');
});

test('SearchResult dispatches selectVideo action when clicked ', () => {
  const searchResult = shallow(<SearchResult videoProperties={mockVideoProperties} />);

  searchResult.find('button').simulate('click');
  expect(store.getActions()).toEqual([selectVideo({ videoProperties: mockVideoProperties})]);
});
