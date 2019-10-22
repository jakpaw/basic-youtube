import { selectVideo } from 'features/selectVideo/selectVideoSlice';
import React from 'react';
import { useTypedDispatch } from 'store';
import { VideoProperties } from 'youtube-api';
import './SearchResult.scss';

interface SearchResultProps {
  videoProperties: VideoProperties;
}

const SearchResult: React.FC<SearchResultProps> = (props) => {

  const dispatch = useTypedDispatch();

  const { videoProperties } = props;

  const handleClick = () => dispatch(selectVideo({ videoProperties }));

  return (
    // img should use srcSet
    <button onClick={handleClick} className="SearchResult">
      <img alt={'Video thumbnail'} src={videoProperties.snippet.thumbnails.medium.url}/>
      <div className="title">{videoProperties.snippet.title}</div>
    </button>
  );
};

export default SearchResult;
