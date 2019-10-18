import React from 'react';
import './SearchResult.scss';

interface SearchResultProps {
  videoData: any; // TODO
  onVideoSelected(videoId: string): void;
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { videoData } = props;

  const selectVideo = () => props.onVideoSelected(videoData.id.videoId);

  return <button onClick={selectVideo}>{videoData.snippet.title}</button>;
};

export default SearchResult;
