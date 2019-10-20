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
    <button onClick={handleClick} className="SearchResult">
      <img alt={'Video thumbnail'} src={videoProperties.snippet.thumbnails.high.url}/>
      {videoProperties.snippet.title}
    </button>
  );
};

export default SearchResult;
