import { RootState } from 'store';
import { VideoProperties } from 'youtube-api';

export const mockVideoProperties = {
  id: { videoId: 'testId' },
  snippet: {
    title: 'test title',
    description: 'test description',
    thumbnails: {
      high: { url: 'testThumbnailUrl' },
    },
  },
};

export const mockSearchResults = [
  {
    id: { videoId: 'testId1' },
  },
  {
    id: { videoId: 'testId2' },
  },
] as VideoProperties[];

export const mockInitialState: RootState = {
  search: {
    submittedQuery: '',
    status: 'initial',
    results: [],
  },
  selectVideo: { },
};
