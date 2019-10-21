import { shallow } from 'enzyme';
import { fetchSearchResultsStart } from 'features/search/searchSlice';
import React from 'react';
import { MockStore } from 'redux-mock-store';
import { setupMockStore } from 'testUtils';
import SearchBar from './SearchBar';

/*
const mockDispatch = jest.fn();
jest.mock('store', () => ({ useTypedDispatch: () => mockDispatch }));
*/

let store: MockStore;

beforeEach(() => {
  store = setupMockStore();
});

test('SearchBar dispatches submitSearchQuery action', () => {
  const searchBar = shallow(<SearchBar />);

  searchBar.find('input').simulate('change', { target: { value: 'test query' } });
  searchBar.find('form').simulate('submit', { preventDefault() {} });

  // I don't like that we depend on thunk action creator implementation, but I couldn't find a better way
  expect(store.getActions()).toEqual([fetchSearchResultsStart({ query: 'test query' })]);
});
