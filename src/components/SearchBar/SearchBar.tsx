import React from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  onSearchSubmit(query: string): void;
}

interface SearchBarState {
  value: string;
  items: any[];
  error: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  constructor(props: SearchBarProps) {
    super(props);
    this.state = { value: '', items: [], error: '' };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    this.props.onSearchSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
