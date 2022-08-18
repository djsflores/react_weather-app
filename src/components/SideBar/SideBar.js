import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const SideBar = () => {
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
  const handleClick = () => {
    setIsOpenSearchBar(true);
  };
  return (
    <div>
      {
        isOpenSearchBar
          ? <SearchBar setIsOpenSearchBar={setIsOpenSearchBar} />
          : <div>
              <h1>SideBar</h1>
              <button onClick={handleClick}>Search for places</button>
            </div>
      }
    </div>
  );
};

export default SideBar;
