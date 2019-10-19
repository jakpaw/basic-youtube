import React, { useState } from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  onSearchSubmit(query: string): void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {

  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearchSubmit(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
