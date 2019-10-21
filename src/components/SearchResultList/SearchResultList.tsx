import SearchResult from 'components/SearchResult/SearchResult';
import React from 'react';
import { useTypedSelector } from 'store';
import './SearchResultList.scss';

export const SearchResultList: React.FC = () => {

  const { results, status } = useTypedSelector(
    (state) => state.search,
  );

  const listItems = results.map((result) =>
    <SearchResult key={result.id.videoId} videoProperties={result} />,
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
        return <div>No videos found, please try another query</div>;
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
