import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../src/components/SearchBar/SearchBar.jsx"
import DisplayList from "./components/DisplayList/DisplayList";

function App() {
	const [data, setData] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchedItem, setSearchedItem] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch("http://openlibrary.org/search.json?author=tolkien")
			.then((response) => response.json())
			.then((data) => setData(data))
			.then(() => setLoading(false))
			.catch(setError);
	}, []);

	if (loading) {
		return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
	}

	if (error) {
		return <pre>{JSON.stringify(error, null, 2)}</pre>;
	}

	if (!data.docs) {
		return null;
	}



	return (
		<div className="container">
			<SearchBar data={data} searchedItem={searchedItem} setSearchedItem={setSearchedItem} setSearchResults={setSearchResults} />
			<DisplayList data={data} searchedItem={searchedItem} searchResults={searchResults}/>
		</div>
	);
}
export default App;
