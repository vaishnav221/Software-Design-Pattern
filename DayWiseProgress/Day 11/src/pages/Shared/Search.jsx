import React from 'react';

const SearchBox = ({ searchTerm, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={onChange}
      className="border p-2 rounded mb-6 w-80"
    />
  );
};

export default SearchBox;
