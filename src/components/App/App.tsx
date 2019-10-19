import SearchBar from 'components/SearchBar/SearchBar';
import SearchResultList from 'components/SearchResultList/SearchResultList';
import Video from 'components/Video/Video';
import {
  submitSearchQuery,
} from 'features/search/searchSlice';
import {
  selectVideo,
} from 'features/selectVideo/selectVideoSlice';
import React from 'react';
import { useTypedDispatch, useTypedSelector } from 'store';
import { VideoProperties } from 'youtube-api';
import './App.scss';

export const App: React.FC = () => {

  const dispatch = useTypedDispatch();

  const { submittedQuery } = useTypedSelector(
    (state) => state.search,
  );
  const searchSubmit = (query: string) => dispatch(submitSearchQuery({ query }));

  const { selectedVideo } = useTypedSelector(
    (state) => state.selectVideo,
  );
  const videoSelect = (videoProperties: VideoProperties) => dispatch(selectVideo({ videoProperties }));

  return (
    <div className="App">
      <SearchBar onSearchSubmit={searchSubmit} />
      <SearchResultList searchQuery={submittedQuery} onVideoSelect={videoSelect} />
      <Video videoProperties={selectedVideo} />
    </div>
  );
};

export default App;
