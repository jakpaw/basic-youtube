import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.scss';

interface AppState {
  searchQuery?: string;
  selectedVideo?: string;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  updateSearchQuery = (query: string) => {
    this.setState({
      searchQuery: query,
    });
  }

  updateSelectedVideo = (selectedVideo: string) => {
    this.setState({
      selectedVideo,
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchSubmit={this.updateSearchQuery} />
        <SearchResults searchQuery={this.state.searchQuery} onVideoSelect={this.updateSelectedVideo} />
      </div>
    );
  }
}

export default App;
