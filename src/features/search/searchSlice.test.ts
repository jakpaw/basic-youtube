import { configureStore } from 'redux-starter-kit';
import { mockSearchResults } from 'testMocks';
import { searchVideos } from 'youtube-api';
import searchReducer from './searchSlice';
import { submitSearchQuery } from './searchSlice';

jest.mock('youtube-api', () => ({ searchVideos: jest.fn() }));
const searchVideosMock = searchVideos as jest.MockedFunction<typeof searchVideos>;

test('submitSearchQuery action should load search results', async () => {
  searchVideosMock.mockImplementation(() => Promise.resolve(mockSearchResults));
  const store = configureStore({
    reducer: searchReducer,
  });

  // initial
  expect(store.getState()).toEqual({
    submittedQuery: '',
    results: [],
    status: 'initial',
  });

  const actionPromise = store.dispatch(submitSearchQuery('test') as any /* typings don't handle thunks */);
  // loading
  expect(store.getState()).toEqual({
    submittedQuery: 'test',
    results: [],
    status: 'loading',
  });

  await actionPromise;
  // ready
  expect(store.getState()).toEqual({
    submittedQuery: 'test',
    results: mockSearchResults,
    status: 'ready',
  });
});

test('submitSearchQuery action should handle errors when loading search results', async () => {
  searchVideosMock.mockImplementation(() => Promise.reject());
  const store = configureStore({
    reducer: searchReducer,
  });

  await store.dispatch(submitSearchQuery('test') as any);
  expect(store.getState()).toEqual({
    submittedQuery: 'test',
    results: [],
    status: 'error',
  });
});
