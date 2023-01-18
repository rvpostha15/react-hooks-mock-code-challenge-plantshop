import React from "react";

function Search({searchTerm, setSearchTerm}) {
// State, Value/Input, onChange

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={handleSearch}
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
