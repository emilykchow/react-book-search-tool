import React from 'react';
import "../../App.css";
import "./SearchBar.css";

const SearchBar = ({data, searchedItem, setSearchedItem, searchResults, setSearchResults, setData}) => {

	const searchHandler = (e) => {
        const searchWord = e.target.value;
        setSearchedItem(searchWord);

        const newFilter = data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
          setSearchResults([]);
        } else {
          setSearchResults(newFilter);
        }
      };

      const clearInput = () => {
        setData([])
        setSearchResults([]);
        setSearchedItem("");
      };

  return (
    <div className="SearchBar-wrapper">
        <input placeholder="Search a book" value={searchedItem} onChange={searchHandler}/>
        <button onClick={clearInput}>Clear</button>
    </div>
  )
}

export default SearchBar