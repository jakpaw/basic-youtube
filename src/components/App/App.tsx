import SearchBar from 'components/SearchBar/SearchBar';
import SearchResultList from 'components/SearchResultList/SearchResultList';
import Video from 'components/Video/Video';
import React from 'react';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <SearchBar />
      <SearchResultList />
      <Video />
    </div>
  );
};

export default App;
