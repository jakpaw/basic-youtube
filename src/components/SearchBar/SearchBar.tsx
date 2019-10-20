import { submitSearchQuery } from 'features/search/searchSlice';
import React, { useState } from 'react';
import { useTypedDispatch } from 'store';
import './SearchBar.scss';

const SearchBar: React.FC = () => {

  const dispatch = useTypedDispatch();

  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(submitSearchQuery(value));
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
