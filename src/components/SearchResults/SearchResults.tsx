import React from 'react';
import './SearchResults.scss';

import { API_KEY } from '../../api-key';

interface SearchResultsProps {
  searchQuery?: string;
  onVideoSelect(id: string): void;
}

interface SearchResultsState {
  items: any[];
}

class SearchResults extends React.Component<SearchResultsProps, SearchResultsState> {

  constructor(props: SearchResultsProps) {
    super(props);
    this.state = { items: [] };
  }

  componentDidUpdate(prevProps: SearchResultsProps) {
    if (this.props.searchQuery !== prevProps.searchQuery && this.props.searchQuery) {
      this.fetchData(this.props.searchQuery);
    }
  }

  fetchData = (query: string) => {
    fetch('https://www.googleapis.com/youtube/v3/search'
    + `?part=snippet&q=${query}&type=video&key=${API_KEY}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.items,
          });
        },
      );
  }

  render() {
    const listItems = this.state.items.map((item) =>
      <div key={item.id.videoId}>{item.snippet.title}</div>,
    );
    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default SearchResults;
