import React from 'react';

const Search = ({ searchVal, handleInputChange, handleSearchFilter }) => (
  <div className="search-product pos-relative bo4 of-hidden">
    <input
      className="s-text7 size6 p-l-23 p-r-50"
      type="text"
      name="search-product"
      placeholder="Search Products..."
      value={searchVal}
      onChange={handleInputChange}
    />

    <button
      type="button"
      className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4"
      onClick={handleSearchFilter}
    >
      <i className="fs-12 fa fa-search" aria-hidden="true" />
    </button>
  </div>
);

export default Search;
