import SearchResult from 'components/SearchResult/SearchResult';
import React from 'react';
import { useTypedSelector } from 'store';
import './SearchResultList.scss';

export const SearchResultList: React.FC = () => {

  const { results, status } = useTypedSelector(
    (state) => state.search,
  );

  const getContent = () => {
    if (results.length > 0) {
      const listItems = results.map((result) =>
        <SearchResult key={result.id.videoId} videoProperties={result} />,
      );
      return (
        <div className="result-list">
          {listItems}
        </div>
      );
    } else {
      switch (status) {
        case 'ready':
          // messages should be styled nicer
          return <div className="message">No videos found, please try another query</div>;
        case 'loading':
          return <div className="message">Loading search results...</div>;
        case 'error':
          return <div className="message">An error occured while loading search results</div>;
        default:
          return <div className="message">Please type your search query in the box above</div>;
      }
    }
  };

  return (
    // headers hierarchy needs to be rethought
    <section className="SearchResultList">
      <h2>Search results</h2>
      {getContent()}
    </section>
  );
};

export default SearchResultList;
