import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./App.css";
import SearchBar from "../src/components/SearchBar/SearchBar.jsx"
import DisplayList from "./components/DisplayList/DisplayList";
import { addBooks } from "./redux/booksReducer";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchedItem, setSearchedItem] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const sortAlphabetically = () => {
		const sortedArray = data.sort(function (a, b) {
			if (a.title < b.title) {
				return -1;
			}

			if (a.title > b.title) {
				return 1;
			}
			return 0;
		})
		setSearchResults([])
		setData(sortedArray)
	}

	const sortByDate = (array) => {
		const sortedArray = array.sort(function (a, b) {
			if (a.publish_year[0] > b.publish_year[0]) {
				return -1;
			}

			if (a.publish_year[0] < b.publish_year[0]) {
				return 1;
			}
			return 0;
		})
		setSearchResults([])
		setData(sortedArray)
	}

	const filterDates = () => {
		const filteredArray = data.filter(item => item.publish_year !== undefined)
		console.log(filteredArray, 'filteredArray')
		sortByDate(filteredArray)
	}



	useEffect(() => {
		if (!data.length) {
			setLoading(true);
			fetch("http://openlibrary.org/search.json?author=tolkien")
				.then((response) => response.json())
				.then((data) => setData(data.docs))
				.then(() => setLoading(false))
				.catch(setError);
		}
	}, [data]);

	if (error) {
		return <pre>{JSON.stringify(error, null, 2)}</pre>;
	}

	if (!data) {
		return <h3>No data found</h3>;
	}



	return (
		<div className="container">
			<SearchBar data={data} searchedItem={searchedItem} setSearchedItem={setSearchedItem} setSearchResults={setSearchResults} setData={setData} />
			{loading ? <h1 style={{ textAlign: "center" }}>Loading...</h1>  : <DisplayList sortAlphabetically={sortAlphabetically} data={data} searchedItem={searchedItem} searchResults={searchResults} setSearchResults={setSearchResults} filterDates={filterDates}/>}
			
		</div>
	);
}
export default App;
