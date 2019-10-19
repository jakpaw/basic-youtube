import React, { useEffect, useState } from 'react';
import './SearchResultList.scss';

import { API_KEY } from 'api-key';
import SearchResult from '../SearchResult/SearchResult';

interface SearchResultListProps {
  searchQuery?: string;
  onVideoSelect(id: string): void;
}

export const SearchResultList: React.FC<SearchResultListProps> = (props) => {

  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (props.searchQuery) {
      fetchData(props.searchQuery);
    }
  }, [props.searchQuery]);

  const fetchData = (query: string) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`)
      .then((res) => res.json())
      .then((result) => setResults(result.items));
  };

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
