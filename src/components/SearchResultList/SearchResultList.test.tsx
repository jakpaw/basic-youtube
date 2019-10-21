import { shallow } from 'enzyme';
import { selectVideo } from 'features/selectVideo/selectVideoSlice';
import React from 'react';
import { mockSearchResults } from 'testMocks';
import { MockStore, setupMockStore } from 'testUtils';
import { VideoProperties } from 'youtube-api';
import SearchResultList from './SearchResultList';

test('SearchResultList show a message when there is no query submitted', () => {
  setupMockStore({});

  const searchResultList = shallow(<SearchResultList />);
  expect(searchResultList.find('SearchResult').length).toBe(0);
  expect(searchResultList.text()).toBe('Please type your search query in the box above');
});

test('SearchResultList show a message when results are loading', () => {
  setupMockStore({
    search: {
      submittedQuery: 'test',
      status: 'loading',
      results: [],
    },
  });

  const searchResultList = shallow(<SearchResultList />);
  expect(searchResultList.find('SearchResult').length).toBe(0);
  expect(searchResultList.text()).toBe('Loading search results...');
});

test('SearchResultList shows list of results', () => {
  setupMockStore({
    search: {
      submittedQuery: 'test',
      status: 'ready',
      results: mockSearchResults,
    },
  });

  const searchResultList = shallow(<SearchResultList />);

  const results = searchResultList.find('SearchResult');

  expect(results.length).toBe(2);
  expect(results.at(0).prop('videoProperties')).toEqual(mockSearchResults[0]);
  expect(results.at(0).key()).toBe('testId1');
  expect(results.at(1).prop('videoProperties')).toEqual(mockSearchResults[1]);
  expect(results.at(1).key()).toBe('testId2');
});

test('SearchResultList show a message when result list is empty', () => {
  setupMockStore({
    search: {
      submittedQuery: 'test',
      status: 'ready',
      results: [],
    },
  });

  const searchResultList = shallow(<SearchResultList />);
  expect(searchResultList.find('SearchResult').length).toBe(0);
  expect(searchResultList.text()).toBe('No videos found, please try another query');
});

test('SearchResultList show a message when there is an error', () => {
  setupMockStore({
    search: {
      submittedQuery: 'test',
      status: 'error',
      results: [],
    },
  });

  const searchResultList = shallow(<SearchResultList />);
  expect(searchResultList.find('SearchResult').length).toBe(0);
  expect(searchResultList.text()).toBe('An error occured while loading search results');
});
