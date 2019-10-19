import React from 'react';
import { VideoProperties } from 'youtube-api';
import './SearchResult.scss';

interface SearchResultProps {
  videoData: VideoProperties;
  onVideoSelected(video: VideoProperties): void;
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { videoData } = props;

  const selectVideo = () => props.onVideoSelected(videoData);

  return <button onClick={selectVideo}>{videoData.snippet.title}</button>;
};

export default SearchResult;
