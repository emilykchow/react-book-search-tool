import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import DisplayList from './components/DisplayList/DisplayList';
import './App.css';

function App() {
  // const [book, setBook] = useState({title: "", bookCover: "", author: "", publishedDate: ""});
  // const [displayList, setDisplayList] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
   fetch("http://openlibrary.org/search.json?author=tolkien")
   .then((res) => (res.json))
   .then((data) => setData(data));
   console.log(data)
  }, [])
  

  return (
    <div className="App">
      <SearchBar />
      <DisplayList />

    </div>
  );
}

export default App;
