import SearchResult from 'components/SearchResult/SearchResult';
import { fetchSearchResults } from 'features/search/searchSlice';
import React, { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from 'store';
import { VideoProperties } from 'youtube-api';
import './SearchResultList.scss';

interface SearchResultListProps {
  searchQuery?: string;
  onVideoSelect(video: VideoProperties): void;
}

export const SearchResultList: React.FC<SearchResultListProps> = (props) => {

  const { searchQuery } = props;

  const dispatch = useTypedDispatch();

  const { results, status } = useTypedSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchSearchResults(searchQuery));
    }
  }, [searchQuery, dispatch]);

  const listItems = results.map((result) =>
    <SearchResult key={result.id.videoId} videoData={result} onVideoSelected={props.onVideoSelect} />,
  );
  if (listItems.length > 0) {
    return (
      <div>
        {listItems}
      </div>
    );
  } else {
    switch (status) {
      case 'ready':
        return <div>No videos found, try another query</div>;
      case 'loading':
        return <div>Loading search results...</div>;
      case 'error':
        return <div>An error occured while loading search results</div>;
      default:
        return <div>Please type your search query in the box above</div>;
    }
  }
};

export default SearchResultList;
