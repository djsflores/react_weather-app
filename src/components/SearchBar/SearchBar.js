import React from 'react';

const SearchBar = ({ setIsOpenSearchBar }) => {
  const handleClick = () => {
    setIsOpenSearchBar(false);
  };
  return (
    <div>
      <h1>SearchBar</h1>
      <button onClick={handleClick}>Close</button>
      <br/>
      <input type='text' placeholder='Seach location' />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
