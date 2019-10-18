import React from 'react';
import './SearchResultList.scss';

import { API_KEY } from '../../api-key';
import SearchResult from '../SearchResult/SearchResult';

interface SearchResultListProps {
  searchQuery?: string;
  onVideoSelect(id: string): void;
}

interface SearchResultListState {
  videos: any[]; // TODO
}

class SearchResultList extends React.Component<SearchResultListProps, SearchResultListState> {

  constructor(props: SearchResultListProps) {
    super(props);
    this.state = { videos: [] };
  }

  componentDidUpdate(prevProps: SearchResultListProps) {
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
            videos: result.items,
          });
        },
      );
  }

  selectVideo = (videoId: string) => {
    this.props.onVideoSelect(videoId);
  }

  render() {
    const listItems = this.state.videos.map((video) =>
      <SearchResult key={video.id.videoId} videoData={video} onVideoSelected={this.selectVideo} />,
    );
    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default SearchResultList;
