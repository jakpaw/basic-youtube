import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultList from '../SearchResultList/SearchResultList';
import Video from '../Video/Video';
import './App.scss';

export const App: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  return (
    <div className="App">
      <SearchBar onSearchSubmit={setSearchQuery} />
      <SearchResultList searchQuery={searchQuery} onVideoSelect={setSelectedVideo} />
      <Video videoId={selectedVideo} />
    </div>
  );
};

export default App;
