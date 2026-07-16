import React from "react";

const SearchBar = React.memo(({ setSearchInput, searchInput }) => {
  return (
    <input
      placeholder="Search"
      value={searchInput}
      onChange={(e) => {
        setSearchInput(e.target.value);
      }}
    />
  );
});

export default SearchBar;
