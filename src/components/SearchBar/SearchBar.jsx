import React from 'react'

const SearchBar = ({data, searchedItem, setSearchedItem, searchResults, setSearchResults}) => {


    let y = data.docs;

	const searchHandler = (searchedItem) => {
		setSearchedItem(searchedItem);
		if (searchedItem !== "") {
			const newBooksList = y.filter((i) => {
				return Object.values(i)
					.join(" ")
					.toLowerCase()
					.includes(searchedItem.toLowerCase());
			});
			setSearchResults(newBooksList);
		} else {
			setSearchResults(y);
		}
	};

	console.log(searchResults);

  return (
    <div className="SearchBar-wrapper">
        <input placeholder="Search a book" value={searchedItem} onchange={(e) => e.target.value}/>
        <button>Search</button>
    </div>
  )
}

export default SearchBar