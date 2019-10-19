import SearchResult from 'components/SearchResult/SearchResult';
import { fetchSearchResults } from 'features/search/searchSlice';
import React, { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from 'store';
import './SearchResultList.scss';

interface SearchResultListProps {
  searchQuery?: string;
  onVideoSelect(id: string): void;
}

export const SearchResultList: React.FC<SearchResultListProps> = (props) => {

  const { searchQuery } = props;

  const dispatch = useTypedDispatch();

  const { results } = useTypedSelector(
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
  return (
    <div>
      {listItems}
    </div>
  );
};

export default SearchResultList;
