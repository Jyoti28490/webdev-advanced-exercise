import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchBarProps } from '../../types';
import Button from '../components/Button';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Set focus on the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <section className="search-bar">
      <div className="searchbar__grid">
        <div className="searchbar__input">
          <FontAwesomeIcon icon="search" className="searchbar__icon" />
          <div className="searchbar__inputwrapper">
            <input
              type="text"
              aria-label="Search"
              className="search__input"
              placeholder="Find statistics, forecasts and reports"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              ref={inputRef}
            />
          </div>

          <Button
            type="submit"
            text="Search"
            onClick={handleSearch}
            className="searchbar__button button--primary"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
