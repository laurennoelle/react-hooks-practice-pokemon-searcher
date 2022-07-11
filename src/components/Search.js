import React from "react";

function Search( {onSearchChange, search}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={onSearchChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
